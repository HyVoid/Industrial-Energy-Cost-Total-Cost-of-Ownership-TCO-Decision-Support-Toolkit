import {
  ProjectInputData,
  FuelAssumptionItem,
  InfrastructureAssumptionItem,
  CalculationEngineRow,
  FuelType,
} from '../types';

/**
 * Standardize Energy Demand to Useful Energy in Gigajoules (GJ)
 * 1 MWh = 3.6 GJ
 */
export function getStandardizedUsefulEnergy(projectInput: ProjectInputData): number {
  if (projectInput.demandMode === 'Useful Energy (MWh)') {
    return projectInput.annualEnergyDemand * 3.6;
  }
  return projectInput.annualEnergyDemand;
}

/**
 * Calculate Annualized CAPEX using standard Financial PMT (Equal Annual Payment)
 * @param rate Annual discount rate / WACC (e.g., 0.08)
 * @param nper Amortization period in years (e.g., 10)
 * @param pv Present Value / Total Initial CAPEX (positive value)
 */
export function calculatePMT(rate: number, nper: number, pv: number): number {
  if (pv <= 0 || nper <= 0) return 0;
  if (rate === 0) return pv / nper;
  return (pv * (rate * Math.pow(1 + rate, nper))) / (Math.pow(1 + rate, nper) - 1);
}

/**
 * Calculate Direct Fuel Cost per Useful GJ
 */
export function calculateFuelCostPerUsefulGJ(fuel: FuelAssumptionItem): number {
  const lhvGJPerUnit = fuel.lhvMJPerUnit / 1000;
  if (lhvGJPerUnit <= 0) return 0;

  if (fuel.energyCarrier === 'Electricity') {
    const cop = fuel.heatPumpCOP || 1;
    return (fuel.fuelUnitPrice / lhvGJPerUnit) / cop;
  } else {
    const eff = fuel.thermalEfficiency || 1;
    return (fuel.fuelUnitPrice / lhvGJPerUnit) / eff;
  }
}

/**
 * Total Initial CAPEX for an Infrastructure Item
 */
export function calculateTotalInitialCapex(infra: InfrastructureAssumptionItem): number {
  return infra.storagePressureCapex + infra.connectionPipingCapex + infra.endUseEquipmentCapex;
}

/**
 * Annual O&M Cost for an Infrastructure Item
 */
export function calculateAnnualOmCost(infra: InfrastructureAssumptionItem): number {
  const totalCapex = calculateTotalInitialCapex(infra);
  return totalCapex * infra.annualOmRate;
}

/**
 * Compute Full Calculation Engine Breakdown across all fuels
 */
export function calculateEngineRows(
  projectInput: ProjectInputData,
  fuels: FuelAssumptionItem[],
  infras: InfrastructureAssumptionItem[]
): CalculationEngineRow[] {
  const standardizedUsefulGJ = getStandardizedUsefulEnergy(projectInput);

  if (standardizedUsefulGJ <= 0) {
    return fuels.map((f) => ({
      energyCarrier: f.energyCarrier,
      annualPhysicalConsumption: 0,
      annualFuelCost: 0,
      annualFixedServiceFee: f.monthlyFixedCharge * 12,
      annualizedCapex: 0,
      annualOmCost: 0,
      annualTco: f.monthlyFixedCharge * 12,
      normalizedCostPerUsefulGJ: 0,
      economicRank: 1,
    }));
  }

  const rawRows = fuels.map((fuel) => {
    const infra = infras.find((i) => i.energyCarrier === fuel.energyCarrier) || {
      id: '',
      energyCarrier: fuel.energyCarrier,
      storagePressureCapex: 0,
      connectionPipingCapex: 0,
      endUseEquipmentCapex: 0,
      annualOmRate: 0,
    };

    const lhvGJPerUnit = fuel.lhvMJPerUnit / 1000;
    
    // Physical consumption
    let annualPhysicalConsumption = 0;
    if (fuel.energyCarrier === 'Electricity') {
      const cop = fuel.heatPumpCOP || 1;
      const usefulMJ = standardizedUsefulGJ * 1000;
      annualPhysicalConsumption = (usefulMJ / fuel.lhvMJPerUnit) / cop;
    } else {
      const eff = fuel.thermalEfficiency || 1;
      const usefulMJ = standardizedUsefulGJ * 1000;
      annualPhysicalConsumption = (usefulMJ / fuel.lhvMJPerUnit) / eff;
    }

    const annualFuelCost = annualPhysicalConsumption * fuel.fuelUnitPrice;
    const annualFixedServiceFee = fuel.monthlyFixedCharge * 12;
    const totalCapex = calculateTotalInitialCapex(infra);
    const annualizedCapex = calculatePMT(
      projectInput.discountRateWACC,
      projectInput.amortizationYears,
      totalCapex
    );
    const annualOmCost = calculateAnnualOmCost(infra);
    const annualTco = annualFuelCost + annualFixedServiceFee + annualizedCapex + annualOmCost;
    const normalizedCostPerUsefulGJ = annualTco / standardizedUsefulGJ;

    return {
      energyCarrier: fuel.energyCarrier,
      annualPhysicalConsumption,
      annualFuelCost,
      annualFixedServiceFee,
      annualizedCapex,
      annualOmCost,
      annualTco,
      normalizedCostPerUsefulGJ,
    };
  });

  // Calculate ranks (1 = lowest cost)
  const sortedCosts = [...rawRows]
    .map((r) => r.normalizedCostPerUsefulGJ)
    .sort((a, b) => a - b);

  return rawRows.map((row) => {
    const economicRank = sortedCosts.indexOf(row.normalizedCostPerUsefulGJ) + 1;
    return {
      ...row,
      economicRank,
    };
  });
}

/**
 * Calculate Price Sensitivity Matrix
 * Delta ratios e.g. [-0.20, -0.10, 0, 0.10, 0.20]
 */
export interface SensitivityMatrixCell {
  energyCarrier: FuelType;
  deltaRatio: number; // e.g. -0.20
  newUnitCost: number; // Normalized $/Useful GJ
  newTco: number;
}

export function calculateSensitivityMatrix(
  projectInput: ProjectInputData,
  fuels: FuelAssumptionItem[],
  infras: InfrastructureAssumptionItem[],
  deltaRatios: number[] = [-0.20, -0.10, 0, 0.10, 0.20]
): { [carrier in FuelType]: SensitivityMatrixCell[] } {
  const engineRows = calculateEngineRows(projectInput, fuels, infras);
  const standardizedUsefulGJ = getStandardizedUsefulEnergy(projectInput);

  const result = {} as { [carrier in FuelType]: SensitivityMatrixCell[] };

  fuels.forEach((fuel) => {
    const row = engineRows.find((r) => r.energyCarrier === fuel.energyCarrier);
    if (!row || standardizedUsefulGJ <= 0) {
      result[fuel.energyCarrier] = deltaRatios.map((delta) => ({
        energyCarrier: fuel.energyCarrier,
        deltaRatio: delta,
        newUnitCost: 0,
        newTco: 0,
      }));
      return;
    }

    const baseFuelCost = row.annualFuelCost;
    const fixedCostPart = row.annualFixedServiceFee + row.annualizedCapex + row.annualOmCost;

    result[fuel.energyCarrier] = deltaRatios.map((delta) => {
      const newFuelCost = baseFuelCost * (1 + delta);
      const newTco = newFuelCost + fixedCostPart;
      const newUnitCost = newTco / standardizedUsefulGJ;
      return {
        energyCarrier: fuel.energyCarrier,
        deltaRatio: delta,
        newUnitCost,
        newTco,
      };
    });
  });

  return result;
}

/**
 * Format numbers with locale comma separators and fixed decimals
 */
export function formatCurrency(val: number, decimals: number = 2): string {
  if (isNaN(val) || !isFinite(val)) return '$0.00';
  return '$' + val.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function formatNumber(val: number, decimals: number = 2): string {
  if (isNaN(val) || !isFinite(val)) return '0.00';
  return val.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function formatPercent(val: number, decimals: number = 1): string {
  if (isNaN(val) || !isFinite(val)) return '0.0%';
  return (val * 100).toFixed(decimals) + '%';
}
