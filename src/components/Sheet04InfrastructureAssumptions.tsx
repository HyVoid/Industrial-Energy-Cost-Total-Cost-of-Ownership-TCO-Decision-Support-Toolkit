import React from 'react';
import { InfrastructureAssumptionItem } from '../types';
import {
  calculateTotalInitialCapex,
  calculateAnnualOmCost,
  formatCurrency,
  formatPercent,
} from '../utils/calculations';
import { Wrench, Info, Sparkles } from 'lucide-react';

interface Sheet04InfrastructureAssumptionsProps {
  infras: InfrastructureAssumptionItem[];
  onChange: (updatedInfras: InfrastructureAssumptionItem[]) => void;
}

export const Sheet04InfrastructureAssumptions: React.FC<
  Sheet04InfrastructureAssumptionsProps
> = ({ infras, onChange }) => {
  const handleItemChange = (
    id: string,
    field: keyof InfrastructureAssumptionItem,
    value: any
  ) => {
    const updated = infras.map((item) => {
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

  return (
    <div className="space-y-6 view-fade-up">
      {/* Page Title Header */}
      <div className="border-b border-[#E8E8E6] pb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="pill-badge bg-[#051C2C] text-white">
            Sheet 04 - Infrastructure Assumptions
          </span>
          <span className="text-[12px] text-[#888888]">
            Storage, Grid Interconnection, End-Use Conversion CAPEX & Maintenance Rates
          </span>
        </div>
        <h1 className="font-garamond-title text-[28px] font-bold text-[#051C2C]">
          04_Infrastructure_Assumptions
        </h1>
      </div>

      {/* Main Infrastructure CAPEX Table */}
      <div className="card-container overflow-hidden bg-white">
        <div className="p-4 bg-[#051C2C]/5 border-b border-[#E8E8E6] flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-[#051C2C]">
            <Wrench className="w-4 h-4 text-[#2251FF]" />
            <span>Capital Expenditure (CAPEX) & Annual O&M Breakdown</span>
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
                <th className="py-3 px-3 text-right">Storage & Pressure ($)</th>
                <th className="py-3 px-3 text-right">Connection & Piping ($)</th>
                <th className="py-3 px-3 text-right">End-Use Equipment ($)</th>
                <th className="py-3 px-4 text-right font-bold text-[#2251FF]">
                  Total Initial CAPEX ($)
                </th>
                <th className="py-3 px-3 text-right">Annual O&M Rate</th>
                <th className="py-3 px-4 text-right font-bold">Annual O&M Cost ($/Yr)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E8E6]">
              {infras.map((infra, index) => {
                const totalCapex = calculateTotalInitialCapex(infra);
                const annualOmCost = calculateAnnualOmCost(infra);

                return (
                  <tr
                    key={infra.id}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F2]/50'}
                  >
                    {/* Energy Carrier Name */}
                    <td className="py-3.5 px-4 font-bold text-[#051C2C] flex items-center gap-2">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          infra.energyCarrier === 'Natural Gas'
                            ? 'bg-[#2251FF]'
                            : infra.energyCarrier === 'LPG'
                            ? 'bg-amber-500'
                            : infra.energyCarrier === 'Electricity'
                            ? 'bg-emerald-500'
                            : 'bg-slate-600'
                        }`}
                      />
                      {infra.energyCarrier}
                    </td>

                    {/* Storage & Pressure CAPEX */}
                    <td className="py-3.5 px-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <span className="text-[#888888] text-[11px]">$</span>
                        <input
                          type="number"
                          step="1000"
                          min="0"
                          value={infra.storagePressureCapex}
                          onChange={(e) =>
                            handleItemChange(
                              infra.id,
                              'storagePressureCapex',
                              parseFloat(e.target.value) || 0
                            )
                          }
                          className="input-editable w-28 text-right font-semibold"
                        />
                      </div>
                    </td>

                    {/* Connection & Piping CAPEX */}
                    <td className="py-3.5 px-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <span className="text-[#888888] text-[11px]">$</span>
                        <input
                          type="number"
                          step="1000"
                          min="0"
                          value={infra.connectionPipingCapex}
                          onChange={(e) =>
                            handleItemChange(
                              infra.id,
                              'connectionPipingCapex',
                              parseFloat(e.target.value) || 0
                            )
                          }
                          className="input-editable w-28 text-right font-semibold"
                        />
                      </div>
                    </td>

                    {/* End-Use Equipment CAPEX */}
                    <td className="py-3.5 px-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <span className="text-[#888888] text-[11px]">$</span>
                        <input
                          type="number"
                          step="5000"
                          min="0"
                          value={infra.endUseEquipmentCapex}
                          onChange={(e) =>
                            handleItemChange(
                              infra.id,
                              'endUseEquipmentCapex',
                              parseFloat(e.target.value) || 0
                            )
                          }
                          className="input-editable w-28 text-right font-semibold"
                        />
                      </div>
                    </td>

                    {/* Total Initial CAPEX (Calculated) */}
                    <td className="py-3.5 px-4 text-right bg-[#2251FF]/5">
                      <span className="font-garamond text-[17px] font-bold text-[#2251FF]">
                        {formatCurrency(totalCapex, 0)}
                      </span>
                    </td>

                    {/* Annual O&M Rate (%) */}
                    <td className="py-3.5 px-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <input
                          type="number"
                          step="0.5"
                          min="0"
                          max="20"
                          value={(infra.annualOmRate * 100).toFixed(1)}
                          onChange={(e) =>
                            handleItemChange(
                              infra.id,
                              'annualOmRate',
                              (parseFloat(e.target.value) || 0) / 100
                            )
                          }
                          className="input-editable w-20 text-right font-semibold"
                        />
                        <span className="text-[11px] text-[#888888]">%</span>
                      </div>
                    </td>

                    {/* Annual O&M Cost ($/Yr) */}
                    <td className="py-3.5 px-4 text-right">
                      <span className="font-garamond text-[16px] font-bold text-[#051C2C]">
                        {formatCurrency(annualOmCost, 0)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Logic & M365 Excel Reference */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="insight-block">
          <div className="flex items-start gap-2.5">
            <Info className="w-5 h-5 text-[#2251FF] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-[13px] text-[#051C2C] block">
                Infrastructure CAPEX Conversion
              </span>
              <p className="text-[12px] text-[#051C2C]/80 leading-relaxed">
                Total initial CAPEX sums all system components (storage, piping, transformers, boilers, heat pumps).
                In Sheet 05 Calculation Engine, this one-time initial CAPEX is converted into equal annual capital charges using the PMT function based on your discount rate (WACC) and amortization horizon.
              </p>
            </div>
          </div>
        </div>

        <div className="card-container p-5 bg-white space-y-2">
          <div className="flex items-center gap-2 font-semibold text-[#051C2C]">
            <Sparkles className="w-4 h-4 text-[#2251FF]" />
            <span>M365 Dynamic Array Code Reference</span>
          </div>
          <p className="text-[11px] font-mono text-[#051C2C] bg-[#F5F5F2] p-2.5 rounded-lg border border-[#E8E8E6] leading-relaxed overflow-x-auto">
            =BYROW(C5:E8, LAMBDA(row, SUM(row)))
          </p>
          <p className="text-[11px] font-mono text-[#051C2C] bg-[#F5F5F2] p-2.5 rounded-lg border border-[#E8E8E6] leading-relaxed overflow-x-auto">
            =F5:F8 * G5:G8
          </p>
        </div>
      </div>
    </div>
  );
};
