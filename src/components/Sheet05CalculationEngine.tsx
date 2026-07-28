import React from 'react';
import {
  ProjectInputData,
  FuelAssumptionItem,
  InfrastructureAssumptionItem,
} from '../types';
import {
  calculateEngineRows,
  getStandardizedUsefulEnergy,
  formatCurrency,
  formatNumber,
} from '../utils/calculations';
import { Cpu, ShieldCheck, Sparkles, Trophy } from 'lucide-react';

interface Sheet05CalculationEngineProps {
  projectInput: ProjectInputData;
  fuels: FuelAssumptionItem[];
  infras: InfrastructureAssumptionItem[];
}

export const Sheet05CalculationEngine: React.FC<
  Sheet05CalculationEngineProps
> = ({ projectInput, fuels, infras }) => {
  const rows = calculateEngineRows(projectInput, fuels, infras);
  const standardizedGJ = getStandardizedUsefulEnergy(projectInput);

  return (
    <div className="space-y-6 view-fade-up">
      {/* Page Title Header */}
      <div className="border-b border-[#E8E8E6] pb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="pill-badge bg-[#051C2C] text-white">
            Sheet 05 - Calculation Engine
          </span>
          <span className="text-[12px] text-[#888888]">
            Backend TCO Calculation, PMT Capital Amortization & Normalized Energy Cost Ranking
          </span>
        </div>
        <h1 className="font-garamond-title text-[28px] font-bold text-[#051C2C]">
          05_Calculation_Engine
        </h1>
      </div>

      {/* Lock Protection Banner */}
      <div className="p-4 rounded-xl bg-[#051C2C]/5 border border-[#E8E8E6] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-[#2251FF]" />
          <div>
            <span className="font-semibold text-[13px] text-[#051C2C]">
              Read-Only Calculation Engine
            </span>
            <p className="text-[12px] text-[#888888]">
              All values are automatically computed in real-time from Sheet 02, 03, and 04 inputs. Manual cell overrides are disabled.
            </p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <span className="text-[11px] font-semibold text-[#888888] uppercase block">
            Target Useful Energy
          </span>
          <span className="font-garamond text-[18px] font-bold text-[#051C2C]">
            {formatNumber(standardizedGJ, 2)} GJ/Yr
          </span>
        </div>
      </div>

      {/* Calculation Table */}
      <div className="card-container overflow-hidden bg-white">
        <div className="p-4 bg-[#051C2C] text-white flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-[14px]">
            <Cpu className="w-4 h-4 text-[#2251FF]" />
            <span>Full Lifetime TCO & Normalized Cost Analysis Matrix</span>
          </div>
          <span className="pill-badge bg-white/10 text-white border border-white/20">
            Real-Time JavaScript Calculations
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-[13px]">
            <thead>
              <tr className="table-header">
                <th className="py-3 px-4">Energy Carrier</th>
                <th className="py-3 px-3 text-right">Physical Consumption</th>
                <th className="py-3 px-3 text-right">Annual Fuel Cost</th>
                <th className="py-3 px-3 text-right">Fixed Service Fee</th>
                <th className="py-3 px-3 text-right">Annualized CAPEX (PMT)</th>
                <th className="py-3 px-3 text-right">Annual O&M</th>
                <th className="py-3 px-4 text-right font-bold text-[#051C2C]">
                  Annual TCO ($/Yr)
                </th>
                <th className="py-3 px-4 text-right font-bold text-[#2251FF]">
                  Cost / Useful GJ
                </th>
                <th className="py-3 px-4 text-center">Rank</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E8E6]">
              {rows.map((row, index) => {
                const fuelItem = fuels.find((f) => f.energyCarrier === row.energyCarrier);
                const unit = fuelItem ? fuelItem.pricingUnit : 'units';
                const isRank1 = row.economicRank === 1;

                return (
                  <tr
                    key={row.energyCarrier}
                    className={`transition-colors ${
                      isRank1 ? 'bg-[#2251FF]/5 font-semibold' : index % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F2]/50'
                    }`}
                  >
                    {/* Energy Carrier */}
                    <td className="py-4 px-4 font-bold text-[#051C2C] flex items-center gap-2">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          row.energyCarrier === 'Natural Gas'
                            ? 'bg-[#2251FF]'
                            : row.energyCarrier === 'LPG'
                            ? 'bg-amber-500'
                            : row.energyCarrier === 'Electricity'
                            ? 'bg-emerald-500'
                            : 'bg-slate-600'
                        }`}
                      />
                      {row.energyCarrier}
                    </td>

                    {/* Physical Consumption */}
                    <td className="py-4 px-3 text-right font-mono text-[12px] text-[#051C2C]">
                      {formatNumber(row.annualPhysicalConsumption, 0)}{' '}
                      <span className="text-[#888888]">{unit}</span>
                    </td>

                    {/* Annual Fuel Cost */}
                    <td className="py-4 px-3 text-right text-[#051C2C]">
                      {formatCurrency(row.annualFuelCost, 0)}
                    </td>

                    {/* Fixed Service Fee */}
                    <td className="py-4 px-3 text-right text-[#051C2C]/80">
                      {formatCurrency(row.annualFixedServiceFee, 0)}
                    </td>

                    {/* Annualized CAPEX (PMT) */}
                    <td className="py-4 px-3 text-right text-[#051C2C]">
                      {formatCurrency(row.annualizedCapex, 0)}
                    </td>

                    {/* Annual O&M */}
                    <td className="py-4 px-3 text-right text-[#051C2C]/80">
                      {formatCurrency(row.annualOmCost, 0)}
                    </td>

                    {/* Annual TCO */}
                    <td className="py-4 px-4 text-right font-garamond text-[17px] font-bold text-[#051C2C]">
                      {formatCurrency(row.annualTco, 0)}
                    </td>

                    {/* Normalized Cost per Useful GJ */}
                    <td className="py-4 px-4 text-right font-garamond text-[19px] font-bold text-[#2251FF]">
                      {formatCurrency(row.normalizedCostPerUsefulGJ, 2)}{' '}
                      <span className="text-[11px] text-[#888888] font-normal">/ GJ</span>
                    </td>

                    {/* Economic Rank */}
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-[12px] font-bold ${
                          isRank1
                            ? 'bg-[#2251FF] text-white shadow-sm'
                            : row.economicRank === 2
                            ? 'bg-[#051C2C] text-white'
                            : 'bg-[#F5F5F2] text-[#888888] border border-[#E8E8E6]'
                        }`}
                      >
                        {isRank1 ? <Trophy className="w-3.5 h-3.5" /> : row.economicRank}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Code Blocks & Formulas Reference */}
      <div className="card-container p-6 bg-white space-y-4">
        <div className="flex items-center gap-2 font-semibold text-[#051C2C] text-[15px]">
          <Sparkles className="w-4 h-4 text-[#2251FF]" />
          <span>Excel Dynamic Array Formula Implementation Reference</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] font-mono">
          <div className="p-3 bg-[#F5F5F2] rounded-lg border border-[#E8E8E6] space-y-1">
            <span className="text-[#888888] font-sans font-semibold uppercase text-[10px] block">
              1. Physical Consumption Array
            </span>
            <code className="text-[#051C2C] block overflow-x-auto">
              =MAP(Fuel, LHV, Eff, COP, LAMBDA(f, l, e, c, IF(f="Electricity", (Demand*1000/l)/c, (Demand*1000/l)/e)))
            </code>
          </div>

          <div className="p-3 bg-[#F5F5F2] rounded-lg border border-[#E8E8E6] space-y-1">
            <span className="text-[#888888] font-sans font-semibold uppercase text-[10px] block">
              2. Annualized CAPEX (PMT)
            </span>
            <code className="text-[#051C2C] block overflow-x-auto">
              =MAP(TotalCAPEX, LAMBDA(capex, PMT(WACC, Years, -capex)))
            </code>
          </div>

          <div className="p-3 bg-[#F5F5F2] rounded-lg border border-[#E8E8E6] space-y-1">
            <span className="text-[#888888] font-sans font-semibold uppercase text-[10px] block">
              3. Annual TCO
            </span>
            <code className="text-[#051C2C] block overflow-x-auto">
              = AnnualFuelCost + AnnualFixedFee + AnnualizedCAPEX + AnnualOM
            </code>
          </div>

          <div className="p-3 bg-[#F5F5F2] rounded-lg border border-[#E8E8E6] space-y-1">
            <span className="text-[#888888] font-sans font-semibold uppercase text-[10px] block">
              4. Economic Rank
            </span>
            <code className="text-[#051C2C] block overflow-x-auto">
              =MAP(UnitCost, LAMBDA(val, RANK.EQ(val, UnitCostRange, 1)))
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};
