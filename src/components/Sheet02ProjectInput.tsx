import React from 'react';
import { ProjectInputData } from '../types';
import { getStandardizedUsefulEnergy, formatNumber } from '../utils/calculations';
import { Info, Sparkles, Building2, Calendar, Percent, Clock } from 'lucide-react';

interface Sheet02ProjectInputProps {
  data: ProjectInputData;
  onChange: (updated: ProjectInputData) => void;
}

export const Sheet02ProjectInput: React.FC<Sheet02ProjectInputProps> = ({
  data,
  onChange,
}) => {
  const standardizedGJ = getStandardizedUsefulEnergy(data);
  const standardizedMWh = standardizedGJ / 3.6;

  const handleChange = (field: keyof ProjectInputData, value: any) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  return (
    <div className="space-y-6 view-fade-up">
      {/* Page Title Header */}
      <div className="border-b border-[#E8E8E6] pb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="pill-badge bg-[#051C2C] text-white">
            Sheet 02 - Project Input
          </span>
          <span className="text-[12px] text-[#888888]">
            Customer Operating Conditions & Financial Benchmarks
          </span>
        </div>
        <h1 className="font-garamond-title text-[28px] font-bold text-[#051C2C]">
          02_Project_Input
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Form Controls (2 cols on large) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card-container p-6 bg-white space-y-6">
            <h2 className="font-garamond-heading text-[18px] font-bold text-[#051C2C] border-b border-[#E8E8E6] pb-3 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#2251FF]" />
              <span>Project Profile & Customer Context</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Client Name */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider">
                  Client Name
                </label>
                <input
                  type="text"
                  value={data.clientName}
                  onChange={(e) => handleChange('clientName', e.target.value)}
                  className="input-editable w-full text-[13px]"
                  placeholder="e.g. Apex Manufacturing Ltd."
                />
              </div>

              {/* Project Name */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider">
                  Project Name
                </label>
                <input
                  type="text"
                  value={data.projectName}
                  onChange={(e) => handleChange('projectName', e.target.value)}
                  className="input-editable w-full text-[13px]"
                  placeholder="e.g. Thermal & Power Plant Upgrade"
                />
              </div>
            </div>

            <h2 className="font-garamond-heading text-[18px] font-bold text-[#051C2C] border-b border-[#E8E8E6] pt-2 pb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#2251FF]" />
              <span>Energy Demand & Operating Hours</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Demand Mode */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider">
                  Input Energy Mode
                </label>
                <select
                  value={data.demandMode}
                  onChange={(e) => handleChange('demandMode', e.target.value as any)}
                  className="input-editable w-full text-[13px] bg-[#FFFDE7]"
                >
                  <option value="Useful Energy (GJ)">Useful Energy (GJ)</option>
                  <option value="Useful Energy (MWh)">Useful Energy (MWh)</option>
                </select>
              </div>

              {/* Energy Demand Value */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider">
                  Annual Energy Demand ({data.demandMode.includes('MWh') ? 'MWh' : 'GJ'})
                </label>
                <input
                  type="number"
                  step="100"
                  min="0"
                  value={data.annualEnergyDemand}
                  onChange={(e) => handleChange('annualEnergyDemand', parseFloat(e.target.value) || 0)}
                  className="input-editable w-full text-[13px] font-bold text-right"
                />
              </div>

              {/* Operating Hours */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider">
                  Annual Operating Hours
                </label>
                <input
                  type="number"
                  step="100"
                  min="0"
                  max="8760"
                  value={data.annualOperatingHours}
                  onChange={(e) => handleChange('annualOperatingHours', parseFloat(e.target.value) || 0)}
                  className="input-editable w-full text-[13px] text-right font-medium"
                />
              </div>
            </div>

            <h2 className="font-garamond-heading text-[18px] font-bold text-[#051C2C] border-b border-[#E8E8E6] pt-2 pb-3 flex items-center gap-2">
              <Percent className="w-5 h-5 text-[#2251FF]" />
              <span>Financial Discount Rate & Amortization</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Discount Rate WACC */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider">
                    Discount Rate / WACC (%)
                  </label>
                  <span className="text-[11px] text-[#888888]">
                    {(data.discountRateWACC * 100).toFixed(1)}%
                  </span>
                </div>
                <input
                  type="number"
                  step="0.5"
                  min="0"
                  max="50"
                  value={(data.discountRateWACC * 100).toFixed(1)}
                  onChange={(e) =>
                    handleChange('discountRateWACC', (parseFloat(e.target.value) || 0) / 100)
                  }
                  className="input-editable w-full text-[13px] text-right font-semibold"
                />
              </div>

              {/* Amortization Years */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider">
                    Amortization Period (Years)
                  </label>
                  <span className="text-[11px] text-[#888888]">
                    {data.amortizationYears} Yrs
                  </span>
                </div>
                <input
                  type="number"
                  step="1"
                  min="1"
                  max="30"
                  value={data.amortizationYears}
                  onChange={(e) => handleChange('amortizationYears', parseInt(e.target.value) || 1)}
                  className="input-editable w-full text-[13px] text-right font-semibold"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Real-time Calculation Summary Card */}
        <div className="space-y-6">
          <div className="card-container p-6 bg-white space-y-5 border-t-4 border-t-[#2251FF]">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#2251FF] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Dynamic Energy Baseline
              </span>
              <span className="pill-badge bg-[#2251FF]/10 text-[#2251FF]">
                Auto-Converted
              </span>
            </div>

            <div className="space-y-4 pt-2">
              <div className="bg-[#F5F5F2] rounded-xl p-4 border border-[#E8E8E6]">
                <div className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider">
                  Standardized Useful Energy (GJ/Yr)
                </div>
                <div className="font-garamond-kpi text-[32px] font-bold text-[#051C2C] mt-1">
                  {formatNumber(standardizedGJ, 2)} <span className="text-[16px] text-[#888888] font-normal">GJ</span>
                </div>
                <div className="text-[11px] text-[#888888] mt-1">
                  Cell Formula: <code className="bg-white px-1.5 py-0.5 rounded border border-[#E8E8E6] font-mono text-[10px] text-[#051C2C]">IF(Mode="MWh", Value * 3.6, Value)</code>
                </div>
              </div>

              <div className="bg-[#F5F5F2] rounded-xl p-4 border border-[#E8E8E6]">
                <div className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider">
                  Equivalent Megawatt-Hours (MWh/Yr)
                </div>
                <div className="font-garamond-kpi text-[26px] font-bold text-[#051C2C] mt-1">
                  {formatNumber(standardizedMWh, 2)} <span className="text-[15px] text-[#888888] font-normal">MWh</span>
                </div>
              </div>

              <div className="bg-[#F5F5F2] rounded-xl p-4 border border-[#E8E8E6]">
                <div className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider">
                  Average Thermal Load Rate
                </div>
                <div className="font-garamond-kpi text-[24px] font-bold text-[#051C2C] mt-1">
                  {formatNumber(data.annualOperatingHours > 0 ? (standardizedGJ * 1000 / 3600) / data.annualOperatingHours : 0, 2)} <span className="text-[14px] text-[#888888] font-normal">MWth</span>
                </div>
                <div className="text-[11px] text-[#888888] mt-1">
                  Based on {data.annualOperatingHours} annual operating hours
                </div>
              </div>
            </div>
          </div>

          {/* Insight Explanation Block */}
          <div className="insight-block">
            <div className="flex items-start gap-2.5">
              <Info className="w-5 h-5 text-[#2251FF] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-semibold text-[13px] text-[#051C2C] block">
                  Methodology & Normalization Note
                </span>
                <p className="text-[12px] text-[#051C2C]/80 leading-relaxed">
                  All 4 fuel carriers (Natural Gas, LPG, Electricity, Diesel) are evaluated against this single standardized useful energy demand ({formatNumber(standardizedGJ, 0)} GJ/Yr).
                  This ensures a rigorous, level-playing-field comparison regardless of physical fuel metering units.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
