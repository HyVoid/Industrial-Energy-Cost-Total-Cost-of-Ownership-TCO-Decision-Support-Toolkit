import React from 'react';
import { FuelAssumptionItem } from '../types';
import {
  calculateFuelCostPerUsefulGJ,
  formatCurrency,
  formatNumber,
} from '../utils/calculations';
import { Fuel, Info, Sparkles } from 'lucide-react';

interface Sheet03FuelAssumptionsProps {
  fuels: FuelAssumptionItem[];
  onChange: (updatedFuels: FuelAssumptionItem[]) => void;
}

export const Sheet03FuelAssumptions: React.FC<Sheet03FuelAssumptionsProps> = ({
  fuels,
  onChange,
}) => {
  const handleItemChange = (
    id: string,
    field: keyof FuelAssumptionItem,
    value: any
  ) => {
    const updated = fuels.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          [field]: value,
        };
      }
      return item;
    });
    onChange(updated);
  };

  // Calculate costs per useful GJ for all fuels to find max for data bar scale
  const calculatedCosts = fuels.map((f) => calculateFuelCostPerUsefulGJ(f));
  const maxCost = Math.max(...calculatedCosts, 0.01);

  return (
    <div className="space-y-6 view-fade-up">
      {/* Page Title Header */}
      <div className="border-b border-[#E8E8E6] pb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="pill-badge bg-[#051C2C] text-white">
            Sheet 03 - Fuel Assumptions
          </span>
          <span className="text-[12px] text-[#888888]">
            Fuel Pricing, Lower Heating Values (LHV), Conversion Efficiencies & Monthly Capacity Fees
          </span>
        </div>
        <h1 className="font-garamond-title text-[28px] font-bold text-[#051C2C]">
          03_Fuel_Assumptions
        </h1>
      </div>

      {/* Main Data Table */}
      <div className="card-container overflow-hidden bg-white">
        <div className="p-4 bg-[#051C2C]/5 border-b border-[#E8E8E6] flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-[#051C2C]">
            <Fuel className="w-4 h-4 text-[#2251FF]" />
            <span>Energy Carriers & Physical Parameter Matrix</span>
          </div>
          <span className="pill-badge bg-[#FFFDE7] text-[#051C2C] border border-amber-200">
            Yellow cells indicate editable parameter fields
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-[13px]">
            <thead>
              <tr className="table-header">
                <th className="py-3 px-4">Energy Carrier</th>
                <th className="py-3 px-3">Pricing Unit</th>
                <th className="py-3 px-3 text-right">Unit Price ($)</th>
                <th className="py-3 px-3 text-right">LHV (MJ/Unit)</th>
                <th className="py-3 px-3 text-right">Boiler Efficiency</th>
                <th className="py-3 px-3 text-right">Heat Pump COP</th>
                <th className="py-3 px-3 text-right">Monthly Fixed ($)</th>
                <th className="py-3 px-4 text-right min-w-[220px]">
                  Fuel Cost per Useful GJ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E8E6]">
              {fuels.map((fuel, index) => {
                const unitCostPerUsefulGJ = calculateFuelCostPerUsefulGJ(fuel);
                const barWidthPercent = Math.min(
                  100,
                  Math.max(5, (unitCostPerUsefulGJ / maxCost) * 100)
                );

                return (
                  <tr
                    key={fuel.id}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F2]/50'}
                  >
                    {/* Energy Carrier Name */}
                    <td className="py-3 px-4 font-bold text-[#051C2C] flex items-center gap-2">
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

                    {/* Pricing Unit */}
                    <td className="py-3 px-3 text-[#051C2C]/70 font-mono text-[12px]">
                      {fuel.pricingUnit}
                    </td>

                    {/* Fuel Unit Price */}
                    <td className="py-3 px-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <span className="text-[#888888] text-[11px]">$</span>
                        <input
                          type="number"
                          step="0.001"
                          min="0"
                          value={fuel.fuelUnitPrice}
                          onChange={(e) =>
                            handleItemChange(
                              fuel.id,
                              'fuelUnitPrice',
                              parseFloat(e.target.value) || 0
                            )
                          }
                          className="input-editable w-24 text-right font-semibold"
                        />
                      </div>
                    </td>

                    {/* LHV (MJ/Unit) */}
                    <td className="py-3 px-3 text-right">
                      <input
                        type="number"
                        step="0.1"
                        min="0.1"
                        value={fuel.lhvMJPerUnit}
                        onChange={(e) =>
                          handleItemChange(
                            fuel.id,
                            'lhvMJPerUnit',
                            parseFloat(e.target.value) || 0
                          )
                        }
                        className="input-editable w-20 text-right font-medium"
                      />
                    </td>

                    {/* Thermal Efficiency */}
                    <td className="py-3 px-3 text-right">
                      {fuel.thermalEfficiency !== null ? (
                        <div className="flex items-center justify-end gap-1">
                          <input
                            type="number"
                            step="1"
                            min="10"
                            max="100"
                            value={(fuel.thermalEfficiency * 100).toFixed(0)}
                            onChange={(e) =>
                              handleItemChange(
                                fuel.id,
                                'thermalEfficiency',
                                (parseFloat(e.target.value) || 0) / 100
                              )
                            }
                            className="input-editable w-16 text-right font-medium"
                          />
                          <span className="text-[11px] text-[#888888]">%</span>
                        </div>
                      ) : (
                        <span className="text-[#888888] text-[12px] italic">
                          N/A (COP used)
                        </span>
                      )}
                    </td>

                    {/* Heat Pump COP */}
                    <td className="py-3 px-3 text-right">
                      {fuel.heatPumpCOP !== null ? (
                        <input
                          type="number"
                          step="0.1"
                          min="1"
                          max="10"
                          value={fuel.heatPumpCOP}
                          onChange={(e) =>
                            handleItemChange(
                              fuel.id,
                              'heatPumpCOP',
                              parseFloat(e.target.value) || 1
                            )
                          }
                          className="input-editable w-16 text-right font-semibold text-[#00C853]"
                        />
                      ) : (
                        <span className="text-[#888888] text-[12px] italic">
                          N/A
                        </span>
                      )}
                    </td>

                    {/* Monthly Fixed Fee */}
                    <td className="py-3 px-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <span className="text-[#888888] text-[11px]">$</span>
                        <input
                          type="number"
                          step="50"
                          min="0"
                          value={fuel.monthlyFixedCharge}
                          onChange={(e) =>
                            handleItemChange(
                              fuel.id,
                              'monthlyFixedCharge',
                              parseFloat(e.target.value) || 0
                            )
                          }
                          className="input-editable w-24 text-right font-medium"
                        />
                      </div>
                    </td>

                    {/* Calculated Direct Fuel Cost per Useful GJ with inline data bar */}
                    <td className="py-3 px-4 text-right">
                      <div className="space-y-1">
                        <div className="font-garamond text-[16px] font-bold text-[#051C2C]">
                          {formatCurrency(unitCostPerUsefulGJ, 2)}{' '}
                          <span className="text-[10px] text-[#888888] font-normal">
                            / GJ
                          </span>
                        </div>

                        {/* Inline Data Bar */}
                        <div className="data-bar-track">
                          <div
                            className="data-bar-fill"
                            style={{ width: `${barWidthPercent}%` }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dynamic Array Formula & Logic Explanation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="insight-block">
          <div className="flex items-start gap-2.5">
            <Info className="w-5 h-5 text-[#2251FF] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-[13px] text-[#051C2C] block">
                Direct Fuel Cost Logic
              </span>
              <p className="text-[12px] text-[#051C2C]/80 leading-relaxed">
                Direct fuel cost standardizes fuel price over lower heating value (LHV) and thermal conversion efficiency:
                <br />
                <code className="text-[11px] font-mono text-[#051C2C] bg-white/80 px-1 py-0.5 rounded mt-1 inline-block">
                  Fuel Cost/GJ = (UnitPrice / (LHV / 1000)) / (Efficiency or COP)
                </code>
              </p>
            </div>
          </div>
        </div>

        <div className="card-container p-5 bg-white space-y-2">
          <div className="flex items-center gap-2 font-semibold text-[#051C2C]">
            <Sparkles className="w-4 h-4 text-[#2251FF]" />
            <span>M365 Excel Formula Reference</span>
          </div>
          <p className="text-[11px] font-mono text-[#051C2C] bg-[#F5F5F2] p-2.5 rounded-lg border border-[#E8E8E6] leading-relaxed overflow-x-auto">
            =MAP(B5:B8, D5:D8, E5:E8, F5:F8, G5:G8, LAMBDA(fuel, price, lhv, eff, cop, IF(fuel="Electricity", (price / (lhv / 1000)) / cop, (price / (lhv / 1000)) / eff)))
          </p>
        </div>
      </div>
    </div>
  );
};
