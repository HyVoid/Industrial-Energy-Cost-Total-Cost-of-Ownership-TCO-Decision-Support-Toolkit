import React from 'react';
import { TabKey } from './Navbar';
import {
  ArrowRight,
  Sliders,
  DollarSign,
  Calculator,
  BarChart3,
  CheckCircle2,
  Lock,
  Database,
  FileSpreadsheet,
} from 'lucide-react';

interface Sheet01HomeProps {
  onSelectTab: (tab: TabKey) => void;
  clientName: string;
  projectName: string;
  lastSaved: string | null;
}

export const Sheet01Home: React.FC<Sheet01HomeProps> = ({
  onSelectTab,
  clientName,
  projectName,
  lastSaved,
}) => {
  return (
    <div className="space-y-8 view-fade-up">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E8E8E6] pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="pill-badge bg-[#051C2C]/10 text-[#051C2C]">
              v2.4 - M365 Dynamic Array Engine
            </span>
            <span className="pill-badge bg-[#00C853]/10 text-[#00C853]">
              Active LocalStorage Persistence
            </span>
          </div>
          <h1 className="font-garamond-title text-[32px] md:text-[38px] font-bold text-[#051C2C] leading-tight">
            Industrial & Commercial Energy Cost Comparison Tool
          </h1>
          <p className="text-[14px] text-[#888888] mt-1 max-w-3xl">
            A comprehensive Total Cost of Ownership (TCO) financial and physical energy model comparing Natural Gas, LPG, Electricity, and Diesel across capital expenditure, fuel consumption, and operational costs.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onSelectTab('02_Project_Input')}
            className="px-5 py-2.5 bg-[#051C2C] hover:bg-[#2251FF] text-white text-[13px] font-semibold rounded-lg shadow-sm transition-all flex items-center gap-2 group"
          >
            <span>Start Project Input</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => onSelectTab('07_Dashboard')}
            className="px-5 py-2.5 bg-white border border-[#E8E8E6] hover:border-[#2251FF] text-[#051C2C] text-[13px] font-semibold rounded-lg transition-all flex items-center gap-2"
          >
            <BarChart3 className="w-4 h-4 text-[#2251FF]" />
            <span>Executive Dashboard</span>
          </button>
        </div>
      </div>

      {/* Project Status Summary Card */}
      <div className="card-container p-6 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-l-4 border-l-[#2251FF]">
        <div className="space-y-1">
          <div className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider">
            Active Project Profile
          </div>
          <div className="font-garamond text-[22px] font-bold text-[#051C2C]">
            {projectName || 'Industrial Thermal Upgrade'}
          </div>
          <div className="text-[13px] text-[#051C2C]/70">
            Client: <span className="font-semibold text-[#051C2C]">{clientName || 'Apex Manufacturing Ltd.'}</span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-[12px] text-[#888888] border-t md:border-t-0 md:border-l border-[#E8E8E6] pt-4 md:pt-0 md:pl-6">
          <div>
            <div className="text-[10px] uppercase font-semibold text-[#888888]">
              Storage Engine
            </div>
            <div className="font-medium text-[#051C2C] flex items-center gap-1 mt-0.5">
              <Database className="w-3.5 h-3.5 text-[#2251FF]" />
              <span>Browser LocalStorage</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-semibold text-[#888888]">
              Last Saved State
            </div>
            <div className="font-medium text-[#051C2C] mt-0.5">
              {lastSaved || 'Just now'}
            </div>
          </div>
        </div>
      </div>

      {/* Standard Operating Procedure (4-Step Workflow) */}
      <div className="space-y-4">
        <h2 className="font-garamond-heading text-[20px] font-bold text-[#051C2C]">
          Standard Operating Procedure (SOP)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Step 1 */}
          <div
            onClick={() => onSelectTab('02_Project_Input')}
            className="card-container card-container-hover p-5 cursor-pointer flex flex-col justify-between group border border-transparent hover:border-[#2251FF]/20"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-full bg-[#051C2C] text-white text-[12px] font-bold flex items-center justify-center">
                  1
                </span>
                <Sliders className="w-5 h-5 text-[#888888] group-hover:text-[#2251FF] transition-colors" />
              </div>
              <h3 className="font-semibold text-[15px] text-[#051C2C] mb-1">
                02 Project Input
              </h3>
              <p className="text-[12px] text-[#888888] leading-relaxed">
                Enter client details, annual useful energy demand (GJ or MWh), operating hours, WACC rate, and amortization years.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E8E8E6] flex items-center text-[12px] font-semibold text-[#2251FF]">
              <span>Configure Inputs</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Step 2 */}
          <div
            onClick={() => onSelectTab('03_Fuel_Assumptions')}
            className="card-container card-container-hover p-5 cursor-pointer flex flex-col justify-between group border border-transparent hover:border-[#2251FF]/20"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-full bg-[#051C2C] text-white text-[12px] font-bold flex items-center justify-center">
                  2
                </span>
                <DollarSign className="w-5 h-5 text-[#888888] group-hover:text-[#2251FF] transition-colors" />
              </div>
              <h3 className="font-semibold text-[15px] text-[#051C2C] mb-1">
                03 & 04 Assumptions
              </h3>
              <p className="text-[12px] text-[#888888] leading-relaxed">
                Review and update fuel unit prices, LHV, efficiency/COP, fixed monthly charges, and infrastructure CAPEX/OPEX.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E8E8E6] flex items-center text-[12px] font-semibold text-[#2251FF]">
              <span>Adjust Pricing & CAPEX</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Step 3 */}
          <div
            onClick={() => onSelectTab('05_Calculation_Engine')}
            className="card-container card-container-hover p-5 cursor-pointer flex flex-col justify-between group border border-transparent hover:border-[#2251FF]/20"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-full bg-[#051C2C] text-white text-[12px] font-bold flex items-center justify-center">
                  3
                </span>
                <Calculator className="w-5 h-5 text-[#888888] group-hover:text-[#2251FF] transition-colors" />
              </div>
              <h3 className="font-semibold text-[15px] text-[#051C2C] mb-1">
                05 Calc & 06 Sensitivity
              </h3>
              <p className="text-[12px] text-[#888888] leading-relaxed">
                Inspect physical consumption, PMT annualized CAPEX, total TCO, normalized cost per GJ, and price sensitivity matrix.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E8E8E6] flex items-center text-[12px] font-semibold text-[#2251FF]">
              <span>View Calculation Engine</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Step 4 */}
          <div
            onClick={() => onSelectTab('07_Dashboard')}
            className="card-container card-container-hover p-5 cursor-pointer flex flex-col justify-between group border border-transparent hover:border-[#2251FF]/20"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-full bg-[#2251FF] text-white text-[12px] font-bold flex items-center justify-center">
                  4
                </span>
                <BarChart3 className="w-5 h-5 text-[#2251FF]" />
              </div>
              <h3 className="font-semibold text-[15px] text-[#051C2C] mb-1">
                07 Dashboard
              </h3>
              <p className="text-[12px] text-[#888888] leading-relaxed">
                Present recommended low-cost option, annual savings vs baseline, TCO cost structure bar charts, and business risk prompts.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E8E8E6] flex items-center text-[12px] font-semibold text-[#2251FF]">
              <span>Explore Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

        </div>
      </div>

      {/* Tool Architecture & Privacy Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-container p-5">
          <div className="flex items-center gap-2 font-semibold text-[#051C2C] mb-2">
            <CheckCircle2 className="w-4 h-4 text-[#00C853]" />
            <span>Instant Reactive Calculations</span>
          </div>
          <p className="text-[12px] text-[#888888] leading-relaxed">
            All formula calculations run directly in your browser JavaScript. Any input change immediately propagates to TCO, normalized cost, and sensitivity matrices without page reload.
          </p>
        </div>

        <div className="card-container p-5">
          <div className="flex items-center gap-2 font-semibold text-[#051C2C] mb-2">
            <FileSpreadsheet className="w-4 h-4 text-[#2251FF]" />
            <span>Backup & Bulk CSV Tools</span>
          </div>
          <p className="text-[12px] text-[#888888] leading-relaxed">
            Easily export JSON backups, export CSV summary reports, or import external CSV spreadsheets to update fuel prices and project data in bulk.
          </p>
        </div>

        <div className="card-container p-5">
          <div className="flex items-center gap-2 font-semibold text-[#051C2C] mb-2">
            <Lock className="w-4 h-4 text-[#051C2C]" />
            <span>Client Privacy Assured</span>
          </div>
          <p className="text-[12px] text-[#888888] leading-relaxed">
            All storage functions rely on your browser's localStorage. No proprietary financial data, client names, or fuel quotes leave your local device.
          </p>
        </div>
      </div>
    </div>
  );
};
