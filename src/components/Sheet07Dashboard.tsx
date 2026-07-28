import React from 'react';
import {
  ProjectInputData,
  FuelAssumptionItem,
  InfrastructureAssumptionItem,
} from '../types';
import {
  calculateEngineRows,
  calculateTotalInitialCapex,
  getStandardizedUsefulEnergy,
  formatCurrency,
  formatNumber,
} from '../utils/calculations';
import {
  Trophy,
  DollarSign,
  TrendingDown,
  Building2,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react';

interface Sheet07DashboardProps {
  projectInput: ProjectInputData;
  fuels: FuelAssumptionItem[];
  infras: InfrastructureAssumptionItem[];
}

export const Sheet07Dashboard: React.FC<Sheet07DashboardProps> = ({
  projectInput,
  fuels,
  infras,
}) => {
  const engineRows = calculateEngineRows(projectInput, fuels, infras);
  const standardizedUsefulGJ = getStandardizedUsefulEnergy(projectInput);

  // Best recommended option (Rank 1)
  const bestOptionRow = engineRows.find((r) => r.economicRank === 1) || engineRows[0];
  const bestCarrier = bestOptionRow ? bestOptionRow.energyCarrier : 'Natural Gas';

  // Baseline option (Diesel) or highest TCO
  const dieselRow = engineRows.find((r) => r.energyCarrier === 'Diesel') || engineRows[engineRows.length - 1];
  const annualSavingsVsBaseline = Math.max(
    0,
    dieselRow.annualTco - (bestOptionRow ? bestOptionRow.annualTco : 0)
  );

  // Top option infrastructure CAPEX
  const topInfra = infras.find((i) => i.energyCarrier === bestCarrier);
  const topCapex = topInfra ? calculateTotalInitialCapex(topInfra) : 0;

  // Max TCO for bar scale
  const maxTco = Math.max(...engineRows.map((r) => r.annualTco), 1);

  return (
    <div className="space-y-6 view-fade-up">
      {/* Page Title Header */}
      <div className="border-b border-[#E8E8E6] pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="pill-badge bg-[#2251FF] text-white">
              Sheet 07 - Executive Dashboard
            </span>
            <span className="text-[12px] text-[#888888]">
              Commercial Decision Support & TCO Cost Structure Analysis
            </span>
          </div>
          <h1 className="font-garamond-title text-[28px] font-bold text-[#051C2C]">
            07_Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-[#E8E8E6] shadow-sm">
          <Building2 className="w-4 h-4 text-[#2251FF]" />
          <div className="text-[12px]">
            <span className="text-[#888888] block text-[10px] uppercase font-semibold">
              Client & Project
            </span>
            <span className="font-bold text-[#051C2C]">
              {projectInput.clientName || 'Apex Ltd.'} ({formatNumber(standardizedUsefulGJ, 0)} GJ/Yr)
            </span>
          </div>
        </div>
      </div>

      {/* Top KPI Cards (3 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Recommended Option */}
        <div className="card-container card-container-hover p-6 bg-white border-t-4 border-t-[#2251FF] space-y-2">
          <div className="flex items-center justify-between text-[#888888]">
            <span className="text-[11px] font-semibold uppercase tracking-wider">
              Recommended Option
            </span>
            <Trophy className="w-5 h-5 text-[#2251FF]" />
          </div>
          <div className="font-garamond text-[28px] font-bold text-[#051C2C]">
            {bestCarrier}
          </div>
          <div className="flex items-center gap-1.5 text-[12px] text-[#00C853] font-semibold pt-1">
            <CheckCircle2 className="w-4 h-4" />
            <span>Rank 1 - Lowest Lifecycle TCO</span>
          </div>
        </div>

        {/* Card 2: Lowest Unit Cost */}
        <div className="card-container card-container-hover p-6 bg-white border-t-4 border-t-[#051C2C] space-y-2">
          <div className="flex items-center justify-between text-[#888888]">
            <span className="text-[11px] font-semibold uppercase tracking-wider">
              Lowest Unit Cost
            </span>
            <DollarSign className="w-5 h-5 text-[#051C2C]" />
          </div>
          <div className="font-garamond text-[28px] font-bold text-[#051C2C]">
            {formatCurrency(bestOptionRow.normalizedCostPerUsefulGJ, 2)}{' '}
            <span className="text-[14px] text-[#888888] font-normal">/ GJ</span>
          </div>
          <div className="text-[12px] text-[#888888]">
            Normalized over {formatNumber(standardizedUsefulGJ, 0)} GJ useful energy
          </div>
        </div>

        {/* Card 3: Annual Savings vs Baseline */}
        <div className="card-container card-container-hover p-6 bg-white border-t-4 border-t-[#00C853] space-y-2">
          <div className="flex items-center justify-between text-[#888888]">
            <span className="text-[11px] font-semibold uppercase tracking-wider">
              Annual Savings vs Baseline
            </span>
            <TrendingDown className="w-5 h-5 text-[#00C853]" />
          </div>
          <div className="font-garamond text-[28px] font-bold text-[#00C853]">
            {formatCurrency(annualSavingsVsBaseline, 0)}{' '}
            <span className="text-[14px] text-[#888888] font-normal">/ Yr</span>
          </div>
          <div className="text-[12px] text-[#888888]">
            Annual OPEX + CAPEX savings vs Diesel baseline
          </div>
        </div>

      </div>

      {/* Main TCO Cost Structure Table & Visual Stacked Bars */}
      <div className="card-container bg-white overflow-hidden p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E8E8E6] pb-4">
          <div>
            <h2 className="font-garamond-heading text-[20px] font-bold text-[#051C2C]">
              TCO Cost Structure Breakdown ($ / Year)
            </h2>
            <p className="text-[12px] text-[#888888]">
              Comparing Direct Fuel Cost, Fixed Service Fees, Annualized CAPEX, and Annual O&M
            </p>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-medium text-[#051C2C]">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#2251FF]" />
              <span>Fuel Cost</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#051C2C]" />
              <span>Fixed Fee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#888888]" />
              <span>Annualized CAPEX</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-amber-400" />
              <span>Annual O&M</span>
            </div>
          </div>
        </div>

        {/* Visual Stacked Bars Comparison */}
        <div className="space-y-4 pt-2">
          {engineRows.map((row) => {
            const isRank1 = row.economicRank === 1;
            const fuelPct = (row.annualFuelCost / row.annualTco) * 100;
            const fixedPct = (row.annualFixedServiceFee / row.annualTco) * 100;
            const capexPct = (row.annualizedCapex / row.annualTco) * 100;
            const omPct = (row.annualOmCost / row.annualTco) * 100;
            const barWidthTotal = (row.annualTco / maxTco) * 100;

            return (
              <div key={row.energyCarrier} className="space-y-1.5">
                <div className="flex items-center justify-between text-[13px]">
                  <div className="flex items-center gap-2 font-bold text-[#051C2C]">
                    <span>{row.energyCarrier}</span>
                    {isRank1 && (
                      <span className="pill-badge bg-[#2251FF] text-white text-[10px]">
                        BEST CHOICE
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#888888] text-[12px]">
                      {formatCurrency(row.normalizedCostPerUsefulGJ, 2)} / GJ
                    </span>
                    <span className="font-garamond text-[17px] font-bold text-[#051C2C]">
                      {formatCurrency(row.annualTco, 0)} / Yr
                    </span>
                  </div>
                </div>

                {/* Stacked Segment Bar */}
                <div className="w-full h-8 bg-[#F5F5F2] rounded-lg overflow-hidden flex shadow-inner">
                  <div
                    style={{ width: `${barWidthTotal}%` }}
                    className="h-full flex overflow-hidden rounded-lg transition-all duration-500"
                  >
                    <div
                      style={{ width: `${fuelPct}%` }}
                      className="bg-[#2251FF] h-full hover:opacity-90 transition-opacity"
                      title={`Fuel Cost: ${formatCurrency(row.annualFuelCost, 0)} (${fuelPct.toFixed(1)}%)`}
                    />
                    <div
                      style={{ width: `${fixedPct}%` }}
                      className="bg-[#051C2C] h-full hover:opacity-90 transition-opacity"
                      title={`Fixed Fee: ${formatCurrency(row.annualFixedServiceFee, 0)} (${fixedPct.toFixed(1)}%)`}
                    />
                    <div
                      style={{ width: `${capexPct}%` }}
                      className="bg-[#888888] h-full hover:opacity-90 transition-opacity"
                      title={`Annualized CAPEX: ${formatCurrency(row.annualizedCapex, 0)} (${capexPct.toFixed(1)}%)`}
                    />
                    <div
                      style={{ width: `${omPct}%` }}
                      className="bg-amber-400 h-full hover:opacity-90 transition-opacity"
                      title={`Annual O&M: ${formatCurrency(row.annualOmCost, 0)} (${omPct.toFixed(1)}%)`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Summary Table */}
        <div className="overflow-x-auto pt-4">
          <table className="w-full text-left border-collapse text-[13px]">
            <thead>
              <tr className="table-header">
                <th className="py-2.5 px-3">Carrier</th>
                <th className="py-2.5 px-3 text-right">Annual Fuel Cost</th>
                <th className="py-2.5 px-3 text-right">Fixed Service Fee</th>
                <th className="py-2.5 px-3 text-right">Annualized CAPEX</th>
                <th className="py-2.5 px-3 text-right">Annual O&M</th>
                <th className="py-2.5 px-3 text-right font-bold text-[#051C2C]">Total TCO</th>
                <th className="py-2.5 px-3 text-right font-bold text-[#2251FF]">$/Useful GJ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E8E6]">
              {engineRows.map((row) => (
                <tr key={row.energyCarrier} className="hover:bg-[#F5F5F2]/50">
                  <td className="py-2.5 px-3 font-bold text-[#051C2C]">{row.energyCarrier}</td>
                  <td className="py-2.5 px-3 text-right">{formatCurrency(row.annualFuelCost, 0)}</td>
                  <td className="py-2.5 px-3 text-right">{formatCurrency(row.annualFixedServiceFee, 0)}</td>
                  <td className="py-2.5 px-3 text-right">{formatCurrency(row.annualizedCapex, 0)}</td>
                  <td className="py-2.5 px-3 text-right">{formatCurrency(row.annualOmCost, 0)}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#051C2C]">
                    {formatCurrency(row.annualTco, 0)}
                  </td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#2251FF]">
                    {formatCurrency(row.normalizedCostPerUsefulGJ, 2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Business Discussion & Risk Alert Card */}
      <div className="insight-block space-y-2">
        <div className="flex items-start gap-3">
          {topCapex > 100000 ? (
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          ) : (
            <Lightbulb className="w-5 h-5 text-[#2251FF] shrink-0 mt-0.5" />
          )}
          <div className="space-y-1">
            <span className="font-bold text-[14px] text-[#051C2C]">
              Commercial Negotiation & Capital Strategy Advice
            </span>
            <p className="text-[13px] text-[#051C2C]/90 leading-relaxed font-medium">
              {topCapex > 100000 ? (
                <>
                  <span className="font-bold text-[#051C2C]">Notice:</span> Recommended option [{bestCarrier}] delivers the lowest full lifecycle TCO (${formatCurrency(bestOptionRow.normalizedCostPerUsefulGJ, 2)}/GJ), but requires a high upfront capital expenditure (${formatCurrency(topCapex, 0)} initial CAPEX). Consider proposing Energy Management Contracts (EMC) or Equipment Leasing Financing to lower customer entry barriers.
                </>
              ) : (
                <>
                  <span className="font-bold text-[#051C2C]">Notice:</span> Recommended option [{bestCarrier}] provides optimal full lifecycle TCO and a low initial capital investment hurdle (${formatCurrency(topCapex, 0)} initial CAPEX). Strongly recommended as the primary commercial proposal.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
