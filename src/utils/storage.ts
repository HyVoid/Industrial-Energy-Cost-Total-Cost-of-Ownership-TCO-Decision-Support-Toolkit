import { AppDataState } from '../types';
import { INITIAL_APP_DATA } from '../constants/defaultData';

const LOCAL_STORAGE_KEY = 'energy_cost_tool_data_v1';

export function loadAppData(): AppDataState {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) {
      return { ...INITIAL_APP_DATA, lastSaved: new Date().toLocaleString('en-US') };
    }
    const parsed = JSON.parse(raw);
    if (!parsed.projectInput || !parsed.fuelAssumptions || !parsed.infrastructureAssumptions) {
      return { ...INITIAL_APP_DATA, lastSaved: new Date().toLocaleString('en-US') };
    }
    return parsed;
  } catch (err) {
    console.error('Failed to load data from localStorage:', err);
    return { ...INITIAL_APP_DATA, lastSaved: new Date().toLocaleString('en-US') };
  }
}

export function saveAppData(data: AppDataState): AppDataState {
  const updatedState: AppDataState = {
    ...data,
    lastSaved: new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }),
  };
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedState));
  } catch (err) {
    console.error('Failed to save to localStorage:', err);
  }
  return updatedState;
}

export function exportBackupJSON(data: AppDataState): void {
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const timestamp = new Date().toISOString().slice(0, 10);
  a.download = `energy_cost_comparison_backup_${timestamp}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function exportBackupCSV(data: AppDataState): void {
  let csv = 'SECTION,CARRIER/PARAM,FIELD,VALUE,UNIT\n';
  csv += `Project Input,Client Name,Name,"${data.projectInput.clientName}",-\n`;
  csv += `Project Input,Project Name,Name,"${data.projectInput.projectName}",-\n`;
  csv += `Project Input,Energy Demand Mode,Mode,"${data.projectInput.demandMode}",-\n`;
  csv += `Project Input,Annual Useful Energy,Demand,${data.projectInput.annualEnergyDemand},${data.projectInput.demandMode}\n`;
  csv += `Project Input,Operating Hours,Hours,${data.projectInput.annualOperatingHours},Hours/Yr\n`;
  csv += `Project Input,Discount Rate WACC,Rate,${data.projectInput.discountRateWACC * 100},%\n`;
  csv += `Project Input,Amortization Years,Period,${data.projectInput.amortizationYears},Years\n`;

  data.fuelAssumptions.forEach((f) => {
    csv += `Fuel Assumption,${f.energyCarrier},Unit Price,${f.fuelUnitPrice},$/${f.pricingUnit}\n`;
    csv += `Fuel Assumption,${f.energyCarrier},LHV,${f.lhvMJPerUnit},MJ/${f.pricingUnit}\n`;
    csv += `Fuel Assumption,${f.energyCarrier},Efficiency,${f.thermalEfficiency !== null ? f.thermalEfficiency * 100 : 'N/A'},%\n`;
    csv += `Fuel Assumption,${f.energyCarrier},COP,${f.heatPumpCOP !== null ? f.heatPumpCOP : 'N/A'},-\n`;
    csv += `Fuel Assumption,${f.energyCarrier},Monthly Fixed Fee,${f.monthlyFixedCharge},$/Month\n`;
  });

  data.infrastructureAssumptions.forEach((i) => {
    csv += `Infrastructure,${i.energyCarrier},Storage & Pressure CAPEX,${i.storagePressureCapex},$\n`;
    csv += `Infrastructure,${i.energyCarrier},Connection & Piping CAPEX,${i.connectionPipingCapex},$\n`;
    csv += `Infrastructure,${i.energyCarrier},End-Use Equipment CAPEX,${i.endUseEquipmentCapex},$\n`;
    csv += `Infrastructure,${i.energyCarrier},Annual O&M Rate,${i.annualOmRate * 100},%\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const timestamp = new Date().toISOString().slice(0, 10);
  a.download = `energy_cost_data_export_${timestamp}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function importBackupJSON(jsonText: string): AppDataState {
  const parsed = JSON.parse(jsonText);
  if (!parsed.projectInput || !parsed.fuelAssumptions || !parsed.infrastructureAssumptions) {
    throw new Error('Invalid backup file schema: missing required sheet data sections.');
  }
  return saveAppData({
    ...INITIAL_APP_DATA,
    ...parsed,
  });
}

export function parseBulkCSV(csvText: string, currentData: AppDataState): AppDataState {
  const lines = csvText.split(/\r?\n/).map((l) => l.trim()).filter((l) => l.length > 0);
  if (lines.length < 2) {
    throw new Error('CSV text does not contain enough lines or valid header.');
  }

  const updatedData = JSON.parse(JSON.stringify(currentData)) as AppDataState;

  // Simple CSV parser supporting lines like:
  // Carrier, UnitPrice, LHV, Efficiency, MonthlyFixed
  // or SECTION, CARRIER, FIELD, VALUE
  lines.forEach((line, index) => {
    if (index === 0 && line.toLowerCase().includes('carrier')) return; // skip header
    const parts = line.split(',').map((p) => p.trim().replace(/^"|"$/g, ''));
    if (parts.length >= 2) {
      const carrierName = parts[0];
      const fuelItem = updatedData.fuelAssumptions.find(
        (f) => f.energyCarrier.toLowerCase() === carrierName.toLowerCase()
      );
      if (fuelItem) {
        if (parts.length >= 2 && !isNaN(Number(parts[1]))) fuelItem.fuelUnitPrice = Number(parts[1]);
        if (parts.length >= 3 && !isNaN(Number(parts[2]))) fuelItem.lhvMJPerUnit = Number(parts[2]);
        if (parts.length >= 4 && !isNaN(Number(parts[3]))) {
          const effVal = Number(parts[3]);
          if (fuelItem.energyCarrier === 'Electricity') {
            fuelItem.heatPumpCOP = effVal;
          } else {
            fuelItem.thermalEfficiency = effVal > 1 ? effVal / 100 : effVal;
          }
        }
        if (parts.length >= 5 && !isNaN(Number(parts[4]))) fuelItem.monthlyFixedCharge = Number(parts[4]);
      }
    }
  });

  return saveAppData(updatedData);
}

export function resetAppData(): AppDataState {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  return saveAppData({
    ...INITIAL_APP_DATA,
  });
}
