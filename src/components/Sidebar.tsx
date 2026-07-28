import React, { useState } from 'react';
import {
  Download,
  Upload,
  FileSpreadsheet,
  RotateCcw,
  Clock,
  Zap,
  Home,
  FileText,
  Flame,
  Building2,
  Calculator,
  TrendingUp,
  BarChart3,
  ClipboardList,
  HelpCircle,
  Menu,
  X,
  ShieldCheck,
} from 'lucide-react';

export type TabKey =
  | '01_Home'
  | '02_Project_Input'
  | '03_Fuel_Assumptions'
  | '04_Infrastructure_Assumptions'
  | '05_Calculation_Engine'
  | '06_Sensitivity'
  | '07_Dashboard'
  | '08_Assumption_Register'
  | '09_User_Guide';

export interface SidebarProps {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
  lastSaved: string | null;
  onExportBackup: () => void;
  onExportCSV: () => void;
  onOpenImportModal: () => void;
  onOpenBulkCsvModal: () => void;
  onResetData: () => void;
}

export const TABS: {
  key: TabKey;
  label: string;
  shortLabel: string;
  num: string;
  icon: React.ElementType;
}[] = [
  { key: '01_Home', label: 'Home Overview', shortLabel: 'Home', num: '01', icon: Home },
  { key: '02_Project_Input', label: 'Project Input', shortLabel: 'Input', num: '02', icon: FileText },
  { key: '03_Fuel_Assumptions', label: 'Fuel Assumptions', shortLabel: 'Fuels', num: '03', icon: Flame },
  { key: '04_Infrastructure_Assumptions', label: 'Infrastructure CAPEX', shortLabel: 'Infra', num: '04', icon: Building2 },
  { key: '05_Calculation_Engine', label: 'Calculation Engine', shortLabel: 'Engine', num: '05', icon: Calculator },
  { key: '06_Sensitivity', label: 'Sensitivity Analysis', shortLabel: 'Sensitivity', num: '06', icon: TrendingUp },
  { key: '07_Dashboard', label: 'Executive Dashboard', shortLabel: 'Dashboard', num: '07', icon: BarChart3 },
  { key: '08_Assumption_Register', label: 'Assumption Register', shortLabel: 'Register', num: '08', icon: ClipboardList },
  { key: '09_User_Guide', label: 'User Guide & SOP', shortLabel: 'Guide', num: '09', icon: HelpCircle },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  lastSaved,
  onExportBackup,
  onExportCSV,
  onOpenImportModal,
  onOpenBulkCsvModal,
  onResetData,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabClick = (key: TabKey) => {
    onSelectTab(key);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Top Header (Visible only on mobile/tablet < lg) */}
      <div className="lg:hidden sticky top-0 z-40 w-full h-[56px] bg-white border-b border-[#E8E8E6] px-4 flex items-center justify-between shadow-sm">
        <div
          onClick={() => handleTabClick('01_Home')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-7 h-7 rounded-lg bg-[#051C2C] flex items-center justify-center text-white">
            <Zap className="w-4 h-4 text-[#2251FF]" />
          </div>
          <span className="font-garamond text-[15px] font-bold text-[#051C2C] line-clamp-1">
            Energy Cost & TCO Toolkit
          </span>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-[#051C2C] hover:bg-[#F5F5F2] rounded-lg transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay Backdrop */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-[#051C2C]/50 backdrop-blur-xs transition-opacity"
        />
      )}

      {/* Sidebar Sidebar Component (Desktop Sticky + Mobile Drawer) */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 lg:z-30 h-screen w-[280px] xl:w-[300px] bg-white border-r border-[#E8E8E6] flex flex-col justify-between shrink-0 shadow-sm transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Top Header / Branding */}
        <div className="p-5 border-b border-[#E8E8E6]">
          <div
            onClick={() => handleTabClick('01_Home')}
            className="flex items-start gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#051C2C] flex items-center justify-center text-white shrink-0 transition-transform group-hover:scale-105 shadow-sm">
              <Zap className="w-5 h-5 text-[#2251FF]" />
            </div>
            <div className="flex flex-col">
              <span className="font-garamond text-[16px] font-bold text-[#051C2C] leading-snug">
                Industrial Energy Cost & TCO Toolkit
              </span>
              <span className="text-[10px] font-semibold text-[#888888] tracking-wider uppercase mt-1 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#2251FF]" />
                Decision Support
              </span>
            </div>
          </div>

          {/* Last Saved Indicator */}
          {lastSaved && (
            <div className="mt-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F5F5F2] text-[#888888] text-[11px] font-medium border border-black/5">
              <Clock className="w-3.5 h-3.5 text-[#2251FF]" />
              <span className="truncate">Last saved: {lastSaved}</span>
            </div>
          )}
        </div>

        {/* Navigation Item List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-thin">
          <div className="px-3 py-1 text-[10px] font-bold text-[#888888] uppercase tracking-wider">
            Modules & Worksheets
          </div>
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabClick(tab.key)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-semibold transition-all group cursor-pointer ${
                  isActive
                    ? 'bg-[#2251FF]/10 text-[#2251FF] border-l-4 border-[#2251FF]'
                    : 'text-[#051C2C]/70 hover:text-[#051C2C] hover:bg-[#F5F5F2] border-l-4 border-transparent'
                }`}
              >
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isActive
                      ? 'bg-[#2251FF] text-white'
                      : 'bg-[#F5F5F2] text-[#888888] group-hover:bg-[#E8E8E6]'
                  }`}
                >
                  {tab.num}
                </span>
                <IconComponent
                  className={`w-4 h-4 shrink-0 ${
                    isActive ? 'text-[#2251FF]' : 'text-[#888888] group-hover:text-[#051C2C]'
                  }`}
                />
                <span className="truncate text-left">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Bottom Actions & Data Controls */}
        <div className="p-4 border-t border-[#E8E8E6] bg-[#F5F5F2]/50 space-y-2">
          <div className="text-[10px] font-bold text-[#888888] uppercase tracking-wider px-1">
            Data & Backup Operations
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={onExportBackup}
              title="Export Full Backup JSON"
              className="btn-custom flex items-center justify-center gap-1.5 !py-1.5 !px-2 text-[11px]"
            >
              <Download className="w-3.5 h-3.5 text-[#2251FF]" />
              <span>Backup JSON</span>
            </button>

            <button
              onClick={onExportCSV}
              title="Export CSV Summary Table"
              className="btn-custom flex items-center justify-center gap-1.5 !py-1.5 !px-2 text-[11px]"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-[#051C2C]" />
              <span>Export CSV</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={onOpenImportModal}
              title="Import Backup JSON"
              className="btn-custom flex items-center justify-center gap-1.5 !py-1.5 !px-2 text-[11px]"
            >
              <Upload className="w-3.5 h-3.5 text-[#051C2C]" />
              <span>Restore</span>
            </button>

            <button
              onClick={onOpenBulkCsvModal}
              title="Bulk CSV Import Data"
              className="btn-primary-custom flex items-center justify-center gap-1.5 !py-1.5 !px-2 text-[11px]"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-white" />
              <span>Bulk CSV</span>
            </button>
          </div>

          <button
            onClick={onResetData}
            title="Reset Data to Initial Default State"
            className="w-full btn-custom text-[#D32F2F] border-red-200 hover:bg-red-50 flex items-center justify-center gap-1.5 !py-1.5 text-[11px]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Data to Default</span>
          </button>
        </div>
      </aside>
    </>
  );
};
