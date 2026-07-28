import React from 'react';
import { HelpCircle, BookOpen, AlertTriangle, CheckCircle, RefreshCw, Layers } from 'lucide-react';

export const Sheet09UserGuide: React.FC = () => {
  return (
    <div className="space-y-8 view-fade-up">
      {/* Page Title Header */}
      <div className="border-b border-[#E8E8E6] pb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="pill-badge bg-[#051C2C] text-white">
            Sheet 09 - User Guide & Troubleshooting
          </span>
          <span className="text-[12px] text-[#888888]">
            Standard Operating Procedures (SOP), Maintenance Rules & Technical QA
          </span>
        </div>
        <h1 className="font-garamond-title text-[28px] font-bold text-[#051C2C]">
          09_User_Guide
        </h1>
      </div>

      {/* Standard Operating Procedure (SOP) Section */}
      <div className="card-container p-6 bg-white space-y-4">
        <h2 className="font-garamond-heading text-[20px] font-bold text-[#051C2C] flex items-center gap-2 border-b border-[#E8E8E6] pb-3">
          <BookOpen className="w-5 h-5 text-[#2251FF]" />
          <span>4.2 Standard Operating Procedure (SOP)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
          
          <div className="p-4 rounded-xl bg-[#F5F5F2] border border-[#E8E8E6] space-y-2">
            <span className="w-6 h-6 rounded-full bg-[#051C2C] text-white text-[11px] font-bold flex items-center justify-center">
              1
            </span>
            <span className="font-bold text-[13px] text-[#051C2C] block">
              02_Project_Input
            </span>
            <p className="text-[11px] text-[#888888] leading-relaxed">
              Enter customer name, annual energy demand (GJ/MWh), operating hours, WACC discount rate, and amortization period.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F5F5F2] border border-[#E8E8E6] space-y-2">
            <span className="w-6 h-6 rounded-full bg-[#051C2C] text-white text-[11px] font-bold flex items-center justify-center">
              2
            </span>
            <span className="font-bold text-[13px] text-[#051C2C] block">
              Confirm Pricing
            </span>
            <p className="text-[11px] text-[#888888] leading-relaxed">
              Inspect Sheet 03 Fuel Assumptions and Sheet 04 Infrastructure CAPEX/OPEX. Modify pale yellow input cells as needed.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F5F5F2] border border-[#E8E8E6] space-y-2">
            <span className="w-6 h-6 rounded-full bg-[#051C2C] text-white text-[11px] font-bold flex items-center justify-center">
              3
            </span>
            <span className="font-bold text-[13px] text-[#051C2C] block">
              Automatic Recalc
            </span>
            <p className="text-[11px] text-[#888888] leading-relaxed">
              The engine automatically re-calculates physical consumption, PMT capital charges, TCO, and ranks all options in real-time.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F5F5F2] border border-[#E8E8E6] space-y-2">
            <span className="w-6 h-6 rounded-full bg-[#051C2C] text-white text-[11px] font-bold flex items-center justify-center">
              4
            </span>
            <span className="font-bold text-[13px] text-[#051C2C] block">
              Sensitivity Check
            </span>
            <p className="text-[11px] text-[#888888] leading-relaxed">
              Inspect Sheet 06 Sensitivity matrix to evaluate option stability under fuel volatility surges (-20% to +20%).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#2251FF]/10 border border-[#2251FF]/20 space-y-2">
            <span className="w-6 h-6 rounded-full bg-[#2251FF] text-white text-[11px] font-bold flex items-center justify-center">
              5
            </span>
            <span className="font-bold text-[13px] text-[#051C2C] block">
              Executive Proposal
            </span>
            <p className="text-[11px] text-[#051C2C]/80 leading-relaxed">
              Review Sheet 07 Dashboard for top KPI summary, TCO stacked bar charts, and commercial financing advice.
            </p>
          </div>

        </div>
      </div>

      {/* Visual Color Conventions */}
      <div className="card-container p-6 bg-white space-y-4">
        <h2 className="font-garamond-heading text-[20px] font-bold text-[#051C2C] flex items-center gap-2 border-b border-[#E8E8E6] pb-3">
          <Layers className="w-5 h-5 text-[#2251FF]" />
          <span>4.3 Color Coding & Visual Conventions</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[12px]">
          <div className="p-4 rounded-xl bg-[#FFFDE7] border border-amber-200 flex items-start gap-3">
            <span className="w-4 h-4 rounded bg-[#FFFDE7] border border-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#051C2C] block">
                Pale Yellow Background (#FFFDE7)
              </span>
              <p className="text-[#888888] mt-0.5">
                Designates user-editable parameter input fields (e.g., fuel prices, LHV, efficiencies, CAPEX).
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E8E8E6] flex items-start gap-3">
            <span className="w-4 h-4 rounded bg-white border border-[#E8E8E6] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#051C2C] block">
                Plain White / Neutral Container
              </span>
              <p className="text-[#888888] mt-0.5">
                Designates read-only calculated results, dynamic array outputs, and system metrics.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#2251FF]/5 border border-[#2251FF]/20 flex items-start gap-3">
            <span className="w-4 h-4 rounded bg-[#2251FF] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#051C2C] block">
                Brand Accent (#2251FF)
              </span>
              <p className="text-[#888888] mt-0.5">
                Highlights primary metrics, Rank 1 recommended choice, data bar fills, and insight block left borders.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting QA */}
      <div className="card-container p-6 bg-white space-y-6">
        <h2 className="font-garamond-heading text-[20px] font-bold text-[#051C2C] flex items-center gap-2 border-b border-[#E8E8E6] pb-3">
          <HelpCircle className="w-5 h-5 text-[#2251FF]" />
          <span>4.5 Troubleshooting & Frequently Asked Questions (QA)</span>
        </h2>

        <div className="space-y-4 text-[13px]">
          
          <div className="p-4 rounded-xl bg-[#F5F5F2] border border-[#E8E8E6] space-y-1">
            <span className="font-bold text-[#051C2C] flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Q1: How do I resolve a #SPILL! error in Excel?
            </span>
            <p className="text-[#051C2C]/80 leading-relaxed pl-6">
              <strong className="text-[#051C2C]">Cause:</strong> Dynamic array formulas (like MAP, MAKEARRAY, BYROW) attempt to spill results across multiple cells, but text or manual content is blocking the output grid.<br />
              <strong className="text-[#00C853]">Solution:</strong> Select the cell showing #SPILL!, locate the dotted boundary box, and clear all blocking content inside that rectangle.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F5F5F2] border border-[#E8E8E6] space-y-1">
            <span className="font-bold text-[#051C2C] flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-[#2251FF]" />
              Q2: I modified fuel prices in Sheet 03, but the Dashboard ranking did not update?
            </span>
            <p className="text-[#051C2C]/80 leading-relaxed pl-6">
              <strong className="text-[#051C2C]">In Excel:</strong> Verify that Excel calculation options are set to "Automatic" (Formulas -&gt; Calculation Options -&gt; Automatic), or press F9 to force a manual recalculation.<br />
              <strong className="text-[#00C853]">In this Web SaaS Tool:</strong> All calculations update instantaneously in JavaScript upon typing.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F5F5F2] border border-[#E8E8E6] space-y-1">
            <span className="font-bold text-[#051C2C] flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Q3: Why do some formula cells show #NAME? in older Excel versions?
            </span>
            <p className="text-[#051C2C]/80 leading-relaxed pl-6">
              <strong className="text-[#051C2C]">Cause:</strong> Modern dynamic array functions (MAP, LAMBDA, MAKEARRAY, BYROW, XLOOKUP) require Microsoft 365 or Excel 2021+.<br />
              <strong className="text-[#00C853]">Solution:</strong> Upgrade Office to Microsoft 365 or use this web SaaS tool directly.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F5F5F2] border border-[#E8E8E6] space-y-1">
            <span className="font-bold text-[#051C2C] flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#00C853]" />
              Q4: Does changing the discount rate WACC affect direct fuel costs?
            </span>
            <p className="text-[#051C2C]/80 leading-relaxed pl-6">
              <strong className="text-[#051C2C]">Financial Concept:</strong> No. WACC affects the PMT function for Annualized Infrastructure CAPEX only. Direct fuel costs are strictly determined by fuel unit price, LHV, and conversion efficiency. This adheres to standard corporate financial accounting rules.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
