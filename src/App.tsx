import React, { useState } from 'react';
import { AppDataState, ProjectInputData, FuelAssumptionItem, InfrastructureAssumptionItem, AssumptionRegisterItem } from './types';
import { loadAppData, saveAppData, exportBackupJSON, exportBackupCSV, resetAppData } from './utils/storage';
import { Sidebar, TabKey } from './components/Sidebar';
import { Sheet01Home } from './components/Sheet01Home';
import { Sheet02ProjectInput } from './components/Sheet02ProjectInput';
import { Sheet03FuelAssumptions } from './components/Sheet03FuelAssumptions';
import { Sheet04InfrastructureAssumptions } from './components/Sheet04InfrastructureAssumptions';
import { Sheet05CalculationEngine } from './components/Sheet05CalculationEngine';
import { Sheet06Sensitivity } from './components/Sheet06Sensitivity';
import { Sheet07Dashboard } from './components/Sheet07Dashboard';
import { Sheet08AssumptionRegister } from './components/Sheet08AssumptionRegister';
import { Sheet09UserGuide } from './components/Sheet09UserGuide';
import { ImportBackupModal, BulkCsvModal, ResetConfirmModal } from './components/Modals';
import { Footer } from './components/Footer';

export default function App() {
  const [appData, setAppData] = useState<AppDataState>(() => loadAppData());
  const [activeTab, setActiveTab] = useState<TabKey>('01_Home');

  // Modals
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isBulkCsvModalOpen, setIsBulkCsvModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  // Auto-save helper
  const handleUpdateData = (dataUpdater: (prev: AppDataState) => AppDataState) => {
    setAppData((prev) => {
      const nextData = dataUpdater(prev);
      return saveAppData(nextData);
    });
  };

  const handleProjectInputDataChange = (updatedProjectInput: ProjectInputData) => {
    handleUpdateData((prev) => ({
      ...prev,
      projectInput: updatedProjectInput,
    }));
  };

  const handleFuelAssumptionsChange = (updatedFuels: FuelAssumptionItem[]) => {
    handleUpdateData((prev) => ({
      ...prev,
      fuelAssumptions: updatedFuels,
    }));
  };

  const handleInfrastructureAssumptionsChange = (
    updatedInfras: InfrastructureAssumptionItem[]
  ) => {
    handleUpdateData((prev) => ({
      ...prev,
      infrastructureAssumptions: updatedInfras,
    }));
  };

  const handleAssumptionRegisterChange = (
    updatedRegister: AssumptionRegisterItem[]
  ) => {
    handleUpdateData((prev) => ({
      ...prev,
      assumptionRegister: updatedRegister,
    }));
  };

  const handleResetConfirm = () => {
    const defaultData = resetAppData();
    setAppData(defaultData);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#F5F5F2] text-[#051C2C]">
      {/* Left Sidebar */}
      <Sidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        lastSaved={appData.lastSaved}
        onExportBackup={() => exportBackupJSON(appData)}
        onExportCSV={() => exportBackupCSV(appData)}
        onOpenImportModal={() => setIsImportModalOpen(true)}
        onOpenBulkCsvModal={() => setIsBulkCsvModalOpen(true)}
        onResetData={() => setIsResetModalOpen(true)}
      />

      {/* Right Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8">
          {activeTab === '01_Home' && (
            <Sheet01Home
              onSelectTab={setActiveTab}
              clientName={appData.projectInput.clientName}
              projectName={appData.projectInput.projectName}
              lastSaved={appData.lastSaved}
            />
          )}

          {activeTab === '02_Project_Input' && (
            <Sheet02ProjectInput
              data={appData.projectInput}
              onChange={handleProjectInputDataChange}
            />
          )}

          {activeTab === '03_Fuel_Assumptions' && (
            <Sheet03FuelAssumptions
              fuels={appData.fuelAssumptions}
              onChange={handleFuelAssumptionsChange}
            />
          )}

          {activeTab === '04_Infrastructure_Assumptions' && (
            <Sheet04InfrastructureAssumptions
              infras={appData.infrastructureAssumptions}
              onChange={handleInfrastructureAssumptionsChange}
            />
          )}

          {activeTab === '05_Calculation_Engine' && (
            <Sheet05CalculationEngine
              projectInput={appData.projectInput}
              fuels={appData.fuelAssumptions}
              infras={appData.infrastructureAssumptions}
            />
          )}

          {activeTab === '06_Sensitivity' && (
            <Sheet06Sensitivity
              projectInput={appData.projectInput}
              fuels={appData.fuelAssumptions}
              infras={appData.infrastructureAssumptions}
            />
          )}

          {activeTab === '07_Dashboard' && (
            <Sheet07Dashboard
              projectInput={appData.projectInput}
              fuels={appData.fuelAssumptions}
              infras={appData.infrastructureAssumptions}
            />
          )}

          {activeTab === '08_Assumption_Register' && (
            <Sheet08AssumptionRegister
              register={appData.assumptionRegister}
              onChange={handleAssumptionRegisterChange}
            />
          )}

          {activeTab === '09_User_Guide' && <Sheet09UserGuide />}
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Modals */}
      <ImportBackupModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onSuccess={(importedData) => setAppData(importedData)}
      />

      <BulkCsvModal
        isOpen={isBulkCsvModalOpen}
        onClose={() => setIsBulkCsvModalOpen(false)}
        currentData={appData}
        onSuccess={(updatedData) => setAppData(updatedData)}
      />

      <ResetConfirmModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirm={handleResetConfirm}
      />
    </div>
  );
}

