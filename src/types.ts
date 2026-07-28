export type UsefulEnergyUnit = 'Useful Energy (GJ)' | 'Useful Energy (MWh)';

export interface ProjectInputData {
  clientName: string;
  projectName: string;
  demandMode: UsefulEnergyUnit;
  annualEnergyDemand: number;
  annualOperatingHours: number;
  discountRateWACC: number; // e.g. 0.08 for 8%
  amortizationYears: number; // e.g. 10
}

export type FuelType = 'Natural Gas' | 'LPG' | 'Electricity' | 'Diesel';

export interface FuelAssumptionItem {
  id: string;
  energyCarrier: FuelType;
  pricingUnit: string;
  fuelUnitPrice: number;
  lhvMJPerUnit: number;
  thermalEfficiency: number | null; // e.g. 0.85 for 85%; null for Electricity
  heatPumpCOP: number | null; // e.g. 3.5 for Electricity; null for others
  monthlyFixedCharge: number;
}

export interface InfrastructureAssumptionItem {
  id: string;
  energyCarrier: FuelType;
  storagePressureCapex: number;
  connectionPipingCapex: number;
  endUseEquipmentCapex: number;
  annualOmRate: number; // e.g. 0.025 for 2.5%
}

export interface CalculationEngineRow {
  energyCarrier: FuelType;
  annualPhysicalConsumption: number;
  annualFuelCost: number;
  annualFixedServiceFee: number;
  annualizedCapex: number;
  annualOmCost: number;
  annualTco: number;
  normalizedCostPerUsefulGJ: number;
  economicRank: number;
}

export interface AssumptionRegisterItem {
  id: string;
  category: 'Project Input' | 'Fuel Price' | 'Efficiency' | 'Infrastructure' | 'Finance';
  parameterField: string;
  currentValue: string | number;
  dataSource: string;
  verificationDate: string;
  owner: string;
}

export interface AppDataState {
  projectInput: ProjectInputData;
  fuelAssumptions: FuelAssumptionItem[];
  infrastructureAssumptions: InfrastructureAssumptionItem[];
  assumptionRegister: AssumptionRegisterItem[];
  lastSaved: string | null;
}
