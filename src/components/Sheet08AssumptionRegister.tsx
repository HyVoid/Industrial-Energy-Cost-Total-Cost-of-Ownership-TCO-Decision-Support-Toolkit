import React, { useState } from 'react';
import { AssumptionRegisterItem } from '../types';
import { ClipboardList, Plus, Trash2, Calendar, User, ShieldCheck } from 'lucide-react';

interface Sheet08AssumptionRegisterProps {
  register: AssumptionRegisterItem[];
  onChange: (updated: AssumptionRegisterItem[]) => void;
}

export const Sheet08AssumptionRegister: React.FC<
  Sheet08AssumptionRegisterProps
> = ({ register, onChange }) => {
  const [newItem, setNewItem] = useState<Partial<AssumptionRegisterItem>>({
    id: 'ASM-NEW-01',
    category: 'Fuel Price',
    parameterField: '',
    currentValue: '',
    dataSource: '',
    verificationDate: new Date().toISOString().slice(0, 10),
    owner: '',
  });

  const handleItemChange = (
    id: string,
    field: keyof AssumptionRegisterItem,
    value: any
  ) => {
    const updated = register.map((item) => {
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

  const handleAddItem = () => {
    if (!newItem.parameterField || !newItem.id) return;
    const itemToAdd: AssumptionRegisterItem = {
      id: newItem.id || `ASM-${Date.now().toString().slice(-4)}`,
      category: newItem.category || 'Fuel Price',
      parameterField: newItem.parameterField || '',
      currentValue: newItem.currentValue || '-',
      dataSource: newItem.dataSource || 'Internal Review',
      verificationDate: newItem.verificationDate || new Date().toISOString().slice(0, 10),
      owner: newItem.owner || 'Project Analyst',
    };
    onChange([...register, itemToAdd]);
    setNewItem({
      id: `ASM-${Date.now().toString().slice(-4)}`,
      category: 'Fuel Price',
      parameterField: '',
      currentValue: '',
      dataSource: '',
      verificationDate: new Date().toISOString().slice(0, 10),
      owner: '',
    });
  };

  const handleDeleteItem = (id: string) => {
    onChange(register.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6 view-fade-up">
      {/* Page Title Header */}
      <div className="border-b border-[#E8E8E6] pb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="pill-badge bg-[#051C2C] text-white">
            Sheet 08 - Assumption Register
          </span>
          <span className="text-[12px] text-[#888888]">
            Parameter Governance, Data Provenance Audit Trail & Verification Dates
          </span>
        </div>
        <h1 className="font-garamond-title text-[28px] font-bold text-[#051C2C]">
          08_Assumption_Register
        </h1>
      </div>

      {/* Register Table */}
      <div className="card-container overflow-hidden bg-white">
        <div className="p-4 bg-[#051C2C]/5 border-b border-[#E8E8E6] flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-[#051C2C]">
            <ClipboardList className="w-4 h-4 text-[#2251FF]" />
            <span>Assumptions & Data Source Audit Trail</span>
          </div>
          <span className="pill-badge bg-[#051C2C]/10 text-[#051C2C]">
            {register.length} Records Documented
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-[13px]">
            <thead>
              <tr className="table-header">
                <th className="py-3 px-4">Assumption ID</th>
                <th className="py-3 px-3">Category</th>
                <th className="py-3 px-3">Parameter Field</th>
                <th className="py-3 px-3">Current Value</th>
                <th className="py-3 px-3">Data Source / Provenance</th>
                <th className="py-3 px-3">Verification Date</th>
                <th className="py-3 px-3">Owner</th>
                <th className="py-3 px-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E8E6]">
              {register.map((item, index) => (
                <tr
                  key={item.id}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F2]/50'}
                >
                  {/* ID */}
                  <td className="py-3 px-4 font-mono font-bold text-[#2251FF]">
                    {item.id}
                  </td>

                  {/* Category */}
                  <td className="py-3 px-3">
                    <span className="pill-badge bg-[#051C2C]/10 text-[#051C2C]">
                      {item.category}
                    </span>
                  </td>

                  {/* Parameter Field */}
                  <td className="py-3 px-3 font-semibold text-[#051C2C]">
                    <input
                      type="text"
                      value={item.parameterField}
                      onChange={(e) =>
                        handleItemChange(item.id, 'parameterField', e.target.value)
                      }
                      className="input-editable w-full text-[12px]"
                    />
                  </td>

                  {/* Current Value */}
                  <td className="py-3 px-3 font-medium text-[#051C2C]">
                    <input
                      type="text"
                      value={item.currentValue}
                      onChange={(e) =>
                        handleItemChange(item.id, 'currentValue', e.target.value)
                      }
                      className="input-editable w-full text-[12px]"
                    />
                  </td>

                  {/* Data Source */}
                  <td className="py-3 px-3 text-[#051C2C]">
                    <input
                      type="text"
                      value={item.dataSource}
                      onChange={(e) =>
                        handleItemChange(item.id, 'dataSource', e.target.value)
                      }
                      className="input-editable w-full text-[12px]"
                    />
                  </td>

                  {/* Verification Date */}
                  <td className="py-3 px-3 font-mono text-[12px]">
                    <input
                      type="date"
                      value={item.verificationDate}
                      onChange={(e) =>
                        handleItemChange(item.id, 'verificationDate', e.target.value)
                      }
                      className="input-editable w-full text-[12px]"
                    />
                  </td>

                  {/* Owner */}
                  <td className="py-3 px-3 text-[#051C2C]">
                    <input
                      type="text"
                      value={item.owner}
                      onChange={(e) =>
                        handleItemChange(item.id, 'owner', e.target.value)
                      }
                      className="input-editable w-full text-[12px]"
                    />
                  </td>

                  {/* Delete Button */}
                  <td className="py-3 px-3 text-center">
                    <button
                      onClick={() => handleDeleteItem(item.id)}
                      className="p-1.5 text-[#888888] hover:text-[#D32F2F] hover:bg-red-50 rounded transition-colors"
                      title="Delete Entry"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New Assumption Entry Card */}
      <div className="card-container p-5 bg-white space-y-4 border border-[#E8E8E6]">
        <div className="flex items-center gap-2 font-semibold text-[#051C2C]">
          <Plus className="w-4 h-4 text-[#2251FF]" />
          <span>Add New Assumption Governance Record</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <input
            type="text"
            placeholder="ID (e.g. ASM-NG-02)"
            value={newItem.id || ''}
            onChange={(e) => setNewItem({ ...newItem, id: e.target.value })}
            className="input-editable text-[12px]"
          />
          <select
            value={newItem.category || 'Fuel Price'}
            onChange={(e) =>
              setNewItem({ ...newItem, category: e.target.value as any })
            }
            className="input-editable text-[12px]"
          >
            <option value="Fuel Price">Fuel Price</option>
            <option value="Efficiency">Efficiency</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Finance">Finance</option>
            <option value="Project Input">Project Input</option>
          </select>
          <input
            type="text"
            placeholder="Parameter Field"
            value={newItem.parameterField || ''}
            onChange={(e) => setNewItem({ ...newItem, parameterField: e.target.value })}
            className="input-editable text-[12px]"
          />
          <input
            type="text"
            placeholder="Current Value"
            value={newItem.currentValue || ''}
            onChange={(e) => setNewItem({ ...newItem, currentValue: e.target.value })}
            className="input-editable text-[12px]"
          />
          <input
            type="text"
            placeholder="Data Source"
            value={newItem.dataSource || ''}
            onChange={(e) => setNewItem({ ...newItem, dataSource: e.target.value })}
            className="input-editable text-[12px]"
          />
          <input
            type="date"
            value={newItem.verificationDate || ''}
            onChange={(e) => setNewItem({ ...newItem, verificationDate: e.target.value })}
            className="input-editable text-[12px]"
          />
          <input
            type="text"
            placeholder="Owner / Team"
            value={newItem.owner || ''}
            onChange={(e) => setNewItem({ ...newItem, owner: e.target.value })}
            className="input-editable text-[12px]"
          />
          <button
            onClick={handleAddItem}
            className="px-4 py-2 bg-[#051C2C] hover:bg-[#2251FF] text-white text-[12px] font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add Record</span>
          </button>
        </div>
      </div>
    </div>
  );
};
