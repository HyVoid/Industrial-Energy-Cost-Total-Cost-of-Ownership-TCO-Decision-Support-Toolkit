import React, { useState } from 'react';
import { AppDataState } from '../types';
import { importBackupJSON, parseBulkCSV } from '../utils/storage';
import { Upload, FileSpreadsheet, X, AlertTriangle, Check, Copy } from 'lucide-react';

interface ImportBackupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (data: AppDataState) => void;
}

export const ImportBackupModal: React.FC<ImportBackupModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [jsonText, setJsonText] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const text = evt.target?.result as string;
        setJsonText(text);
        setErrorMsg(null);
      } catch (err) {
        setErrorMsg('Failed to read file contents.');
      }
    };
    reader.readAsText(file);
  };

  const handleImport = () => {
    try {
      if (!jsonText.trim()) {
        setErrorMsg('Please upload or paste JSON text first.');
        return;
      }
      const updatedState = importBackupJSON(jsonText);
      onSuccess(updatedState);
      setJsonText('');
      setErrorMsg(null);
      onClose();
    } catch (err: any) {
      setErrorMsg(err.message || 'Invalid JSON backup format.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#051C2C]/50 backdrop-blur-sm flex items-center justify-center p-4 view-fade-up">
      <div className="card-container w-full max-w-xl bg-white p-6 space-y-5 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-[#888888] hover:text-[#051C2C] rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 border-b border-[#E8E8E6] pb-3">
          <Upload className="w-5 h-5 text-[#2251FF]" />
          <h3 className="font-garamond-heading text-[20px] font-bold text-[#051C2C]">
            Import Application Backup (JSON)
          </h3>
        </div>

        <p className="text-[12px] text-[#888888]">
          Upload a previously exported JSON backup file or paste the JSON configuration string below to restore project inputs and assumptions.
        </p>

        <div className="space-y-3">
          <div>
            <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider block mb-1">
              Option 1: Upload JSON File
            </label>
            <input
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="block w-full text-[12px] text-[#051C2C] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-[12px] file:font-semibold file:bg-[#2251FF]/10 file:text-[#2251FF] hover:file:bg-[#2251FF]/20 cursor-pointer"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider block mb-1">
              Option 2: Paste Raw JSON
            </label>
            <textarea
              rows={6}
              value={jsonText}
              onChange={(e) => {
                setJsonText(e.target.value);
                setErrorMsg(null);
              }}
              placeholder='{"projectInput": {...}, "fuelAssumptions": [...]}'
              className="input-editable w-full text-[11px] font-mono"
            />
          </div>
        </div>

        {errorMsg && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-[#D32F2F] text-[12px] flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[12px] font-semibold text-[#888888] hover:text-[#051C2C] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleImport}
            className="px-5 py-2 bg-[#2251FF] hover:bg-[#051C2C] text-white text-[12px] font-semibold rounded-lg shadow-sm transition-all flex items-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>Restore Backup</span>
          </button>
        </div>
      </div>
    </div>
  );
};

interface BulkCsvModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentData: AppDataState;
  onSuccess: (data: AppDataState) => void;
}

export const BulkCsvModal: React.FC<BulkCsvModalProps> = ({
  isOpen,
  onClose,
  currentData,
  onSuccess,
}) => {
  const sampleCsv = `Carrier, UnitPrice, LHV_MJ, Efficiency_or_COP, MonthlyFixed
Natural Gas, 0.45, 35.5, 0.85, 500
LPG, 0.68, 25.5, 0.82, 250
Electricity, 0.12, 3.6, 3.5, 1200
Diesel, 1.05, 36.0, 0.80, 100`;

  const [csvText, setCsvText] = useState(sampleCsv);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const text = evt.target?.result as string;
        setCsvText(text);
        setErrorMsg(null);
      } catch (err) {
        setErrorMsg('Failed to read CSV file.');
      }
    };
    reader.readAsText(file);
  };

  const handleApplyCsv = () => {
    try {
      if (!csvText.trim()) {
        setErrorMsg('CSV content is empty.');
        return;
      }
      const updated = parseBulkCSV(csvText, currentData);
      onSuccess(updated);
      setErrorMsg(null);
      onClose();
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to parse CSV format.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#051C2C]/50 backdrop-blur-sm flex items-center justify-center p-4 view-fade-up">
      <div className="card-container w-full max-w-xl bg-white p-6 space-y-5 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-[#888888] hover:text-[#051C2C] rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 border-b border-[#E8E8E6] pb-3">
          <FileSpreadsheet className="w-5 h-5 text-[#2251FF]" />
          <h3 className="font-garamond-heading text-[20px] font-bold text-[#051C2C]">
            Bulk CSV Fuel Import
          </h3>
        </div>

        <p className="text-[12px] text-[#888888]">
          Upload or edit CSV spreadsheet text to update fuel unit prices, LHV, efficiencies/COP, and monthly fixed fees in bulk.
        </p>

        <div className="space-y-3">
          <div>
            <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider block mb-1">
              Upload CSV File
            </label>
            <input
              type="file"
              accept=".csv,.txt"
              onChange={handleFileUpload}
              className="block w-full text-[12px] text-[#051C2C] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-[12px] file:font-semibold file:bg-[#051C2C]/10 file:text-[#051C2C] hover:file:bg-[#051C2C]/20 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-[11px] font-semibold text-[#051C2C] uppercase tracking-wider">
                CSV Data Format (Carrier, UnitPrice, LHV, Eff/COP, FixedFee)
              </label>
              <button
                onClick={() => setCsvText(sampleCsv)}
                className="text-[10px] font-semibold text-[#2251FF] hover:underline flex items-center gap-1"
              >
                <Copy className="w-3 h-3" />
                <span>Load Template</span>
              </button>
            </div>
            <textarea
              rows={6}
              value={csvText}
              onChange={(e) => {
                setCsvText(e.target.value);
                setErrorMsg(null);
              }}
              className="input-editable w-full text-[11px] font-mono"
            />
          </div>
        </div>

        {errorMsg && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-[#D32F2F] text-[12px] flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[12px] font-semibold text-[#888888] hover:text-[#051C2C] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleApplyCsv}
            className="px-5 py-2 bg-[#051C2C] hover:bg-[#2251FF] text-white text-[12px] font-semibold rounded-lg shadow-sm transition-all flex items-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>Apply Bulk CSV Update</span>
          </button>
        </div>
      </div>
    </div>
  );
};

interface ResetConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ResetConfirmModal: React.FC<ResetConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#051C2C]/50 backdrop-blur-sm flex items-center justify-center p-4 view-fade-up">
      <div className="card-container w-full max-w-md bg-white p-6 space-y-4 shadow-2xl relative border-t-4 border-t-[#D32F2F]">
        <div className="flex items-center gap-2 text-[#D32F2F]">
          <AlertTriangle className="w-5 h-5" />
          <h3 className="font-garamond-heading text-[20px] font-bold text-[#051C2C]">
            Reset Data to Default Initial State?
          </h3>
        </div>

        <p className="text-[12px] text-[#888888] leading-relaxed">
          This action will clear your browser's localStorage and restore all project inputs, fuel assumptions, and CAPEX values to their initial default benchmark parameters.
        </p>

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[12px] font-semibold text-[#888888] hover:text-[#051C2C] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-5 py-2 bg-[#D32F2F] hover:bg-red-700 text-white text-[12px] font-semibold rounded-lg shadow-sm transition-all"
          >
            Confirm Reset Data
          </button>
        </div>
      </div>
    </div>
  );
};
