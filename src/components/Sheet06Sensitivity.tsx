import React, { useState } from 'react';
import {
  ProjectInputData,
  FuelAssumptionItem,
  InfrastructureAssumptionItem,
  FuelType,
} from '../types';
import {
  calculateSensitivityMatrix,
  calculateEngineRows,
  formatCurrency,
  formatPercent,
} from '../utils/calculations';
import { SlidersHorizontal, Info, Sparkles, TrendingUp } from 'lucide-react';

interface Sheet06SensitivityProps {
  projectInput: ProjectInputData;
  fuels: FuelAssumptionItem[];
  infras: InfrastructureAssumptionItem[];
}

export const Sheet06Sensitivity: React.FC<Sheet06SensitivityProps> = ({
  projectInput,
  fuels,
  infras,
}) => {
  // Configurable price delta ratios
  const [deltaSteps, setDeltaSteps] = useState<number[]>([
    -0.2, -0.1, 0, 0.1, 0.2,
  ]);

  const matrix = calculateSensitivityMatrix(
    projectInput,
    fuels,
    infras,
    deltaSteps
  );
  const baseEngineRows = calculateEngineRows(projectInput, fuels, infras);

  // Find overall min and max unit costs to shade matrix cells
  let minCost = Infinity;
  let maxCost = -Infinity;
  Object.values(matrix).forEach((cells) => {
    cells.forEach((cell) => {
      if (cell.newUnitCost < minCost) minCost = cell.newUnitCost;
      if (cell.newUnitCost > maxCost) maxCost = cell.newUnitCost;
    });
  });

  const handleStepChange = (index: number, valPercent: number) => {
    const updated = [...deltaSteps];
    updated[index] = valPercent / 100;
    setDeltaSteps(updated);
  };

  return (
    <div className="space-y-6 view-fade-up">
      {/* Page Title Header */}
      <div className="border-b border-[#E8E8E6] pb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="pill-badge bg-[#051C2C] text-white">
            Sheet 06 - Sensitivity Analysis
          </span>
          <span className="text-[12px] text-[#888888]">
            Fuel Price Volatility & Multi-Scenario Unit Cost Exposure Matrix
          </span>
        </div>
        <h1 className="font-garamond-title text-[28px] font-bold text-[#051C2C]">
          06_Sensitivity
        </h1>
      </div>

      {/* Delta Ratios Step Control Strip */}
      <div className="card-container p-5 bg-white space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-[#051C2C]">
            <SlidersHorizontal className="w-4 h-4 text-[#2251FF]" />
            <span>Price Delta Steps Control (% Volatility Ratios)</span>
          </div>
          <span className="text-[11px] text-[#888888]">
            Edit values to simulate custom market volatility scenarios
          </span>
        </div>

        <div className="grid grid-cols-5 gap-3">
          {deltaSteps.map((delta, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-lg bg-[#F5F5F2] border border-[#E8E8E6] text-center space-y-1"
            >
              <label className="text-[10px] font-semibold text-[#888888] uppercase block">
                Scenario {idx + 1}
              </label>
              <div className="flex items-center justify-center gap-1">
                <input
                  type="number"
                  step="5"
                  value={(delta * 100).toFixed(0)}
                  onChange={(e) =>
                    handleStepChange(idx, parseFloat(e.target.value) || 0)
                  }
                  className="input-editable w-16 text-center font-bold text-[#051C2C]"
                />
                <span className="text-[11px] font-semibold text-[#051C2C]">%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sensitivity Matrix Table */}
      <div className="card-container overflow-hidden bg-white">
        <div className="p-4 bg-[#051C2C]/5 border-b border-[#E8E8E6] flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-[#051C2C]">
            <TrendingUp className="w-4 h-4 text-[#2251FF]" />
            <span>Normalized Unit Cost Matrix ($ / Useful GJ)</span>
          </div>
          <span className="pill-badge bg-[#2251FF]/10 text-[#2251FF]">
            Hover cell to inspect scale feedback
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-[13px]">
            <thead>
              <tr className="table-header">
                <th className="py-3.5 px-4 min-w-[160px]">Energy Carrier</th>
                <th className="py-3.5 px-3 text-right">Base Cost ($/GJ)</th>
                {deltaSteps.map((delta, idx) => (
                  <th key={idx} className="py-3.5 px-3 text-center min-w-[130px]">
                    <span className="block text-[11px] font-bold">
                      {formatPercent(delta, 0)}
                    </span>
                    <span className="text-[9px] font-normal text-[#888888] uppercase">
                      {delta === 0 ? 'Baseline' : delta > 0 ? 'Price Spike' : 'Price Drop'}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E8E6]">
              {fuels.map((fuel) => {
                const cells = matrix[fuel.energyCarrier] || [];
                const baseRow = baseEngineRows.find(
                  (r) => r.energyCarrier === fuel.energyCarrier
                );
                const baseCost = baseRow ? baseRow.normalizedCostPerUsefulGJ : 0;

                return (
                  <tr key={fuel.energyCarrier} className="bg-white hover:bg-[#F5F5F2]/40">
                    {/* Energy Carrier */}
                    <td className="py-4 px-4 font-bold text-[#051C2C] flex items-center gap-2">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          fuel.energyCarrier === 'Natural Gas'
                            ? 'bg-[#2251FF]'
                            : fuel.energyCarrier === 'LPG'
                            ? 'bg-amber-500'
                            : fuel.energyCarrier === 'Electricity'
                            ? 'bg-emerald-500'
                            : 'bg-slate-600'
                        }`}
                      />
                      {fuel.energyCarrier}
                    </td>

                    {/* Base Normalized Cost */}
                    <td className="py-4 px-3 text-right font-garamond text-[16px] font-bold text-[#051C2C]">
                      {formatCurrency(baseCost, 2)}
                    </td>

                    {/* Sensitivity Delta Columns */}
                    {cells.map((cell, idx) => {
                      const isMinInRow = cell.newUnitCost === minCost;
                      return (
                        <td key={idx} className="py-3 px-2 text-center">
                          <div
                            className={`matrix-cell-interactive p-2.5 rounded-xl border transition-all cursor-pointer ${
                              isMinInRow
                                ? 'bg-[#00C853]/10 border-[#00C853] text-[#00C853] font-bold shadow-sm'
                                : cell.deltaRatio === 0
                                ? 'bg-[#2251FF]/5 border-[#2251FF]/30 text-[#051C2C] font-semibold'
                                : 'bg-[#F5F5F2]/80 border-[#E8E8E6] text-[#051C2C]'
                            }`}
                          >
                            <div className="font-garamond text-[15px] font-bold">
                              {formatCurrency(cell.newUnitCost, 2)}
                            </div>
                            <div className="text-[10px] text-[#888888] font-mono mt-0.5">
                              TCO: {formatCurrency(cell.newTco / 1000, 0)}k
                            </div>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Code Block & Sensitivity Logic */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="insight-block">
          <div className="flex items-start gap-2.5">
            <Info className="w-5 h-5 text-[#2251FF] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-[13px] text-[#051C2C] block">
                Sensitivity Analysis Insights
              </span>
              <p className="text-[12px] text-[#051C2C]/80 leading-relaxed">
                Notice how high-CAPEX options (like Electric Heat Pumps) possess high fixed costs but are less sensitive to fuel unit price surges, whereas lower-CAPEX fuels (like Diesel) fluctuate sharply when fuel prices spike.
              </p>
            </div>
          </div>
        </div>

        <div className="card-container p-5 bg-white space-y-2">
          <div className="flex items-center gap-2 font-semibold text-[#051C2C]">
            <Sparkles className="w-4 h-4 text-[#2251FF]" />
            <span>M365 MAKEARRAY Function Reference</span>
          </div>
          <p className="text-[11px] font-mono text-[#051C2C] bg-[#F5F5F2] p-2.5 rounded-lg border border-[#E8E8E6] leading-relaxed overflow-x-auto">
            =MAKEARRAY(4, 5, LAMBDA(r, c, LET(base_fuel, INDEX(FuelCosts, r), delta, INDEX(Deltas, 1, c), fixed, INDEX(FixedCosts, r), (base_fuel * (1 + delta) + fixed) / Demand)))
          </p>
        </div>
      </div>
    </div>
  );
};
