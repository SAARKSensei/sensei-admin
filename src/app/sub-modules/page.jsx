"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import noDataImg from "@/assets/no-data.svg?url";

/**
 * SubModulesPage
 *
 * - Parent reference is the Module ID (fixed). It tries to find it from localStorage:
 *   1) localStorage.activeModule (preferred)
 *   2) first entry in localStorage.modules
 *   3) fallback sample module
 *
 * - Sub-modules persisted to localStorage key "submodules".
 *
 * - UI rules same as ModulesPage (empty / add / list).
 */

export default function SubModulesPage() {
  const [submodules, setSubmodules] = useState([]);
  const [modules, setModules] = useState([]);

  // mode: "empty" | "add" | "list"
  const [mode, setMode] = useState("empty");

  // form fields for adding sub-module
  const [selectedModuleId, setSelectedModuleId] = useState(""); // parent reference - fixed
  const [subModuleName, setSubModuleName] = useState("");
  const [subModuleNumber, setSubModuleNumber] = useState(0);

  // load modules & submodules on mount
  useEffect(() => {
    const rawModules = localStorage.getItem("modules");
    const parsedModules = rawModules ? JSON.parse(rawModules) : [];
    setModules(parsedModules);

    const rawSubmodules = localStorage.getItem("submodules");
    const parsedSubmodules = rawSubmodules ? JSON.parse(rawSubmodules) : [];
    setSubmodules(parsedSubmodules);

    // determine selectedModuleId:
    const activeModule = localStorage.getItem("activeModule"); // if your app sets this when selecting a module in sidebar
    if (activeModule) {
      setSelectedModuleId(activeModule);
    } else if (parsedModules && parsedModules.length > 0) {
      setSelectedModuleId(parsedModules[0].id);
    } else {
      // fallback sample module id
      setSelectedModuleId("SAMPLE-MOD-1");
    }

    if (parsedSubmodules && parsedSubmodules.length > 0) {
      setMode("list");
    } else {
      setMode("empty");
    }
  }, []);

  // persist submodules on change
  useEffect(() => {
    localStorage.setItem("submodules", JSON.stringify(submodules));
  }, [submodules]);

  // helpers
  const generateSubModuleId = () => {
    return `SUBMOD-${Date.now().toString().slice(-5)}-${Math.floor(
      Math.random() * 900
    ) + 100}`;
  };

  const resetForm = () => {
    setSubModuleName("");
    setSubModuleNumber(0);
    // keep selectedModuleId (parent) as it's fixed
  };

  // BUTTON ACTIONS
  const handleAddClick = () => {
    setMode("add");
  };

  const handleSave = () => {
    // validation: require name + parent module present
    if (!subModuleName) {
      alert("Please enter sub-module name.");
      return;
    }
    if (!selectedModuleId) {
      alert("Parent Module not found. Please select a module from sidebar.");
      return;
    }

    const newSub = {
      id: generateSubModuleId(),
      number: subModuleNumber,
      name: subModuleName,
      moduleId: selectedModuleId,
      createdAt: new Date().toISOString(),
    };

    const updated = [...submodules, newSub];
    setSubmodules(updated);

    setMode("list");
    resetForm();
  };

  const handleRemove = () => {
    if (!submodules.length) return;
    if (!confirm("Remove all sub-modules? (demo action)")) return;
    setSubmodules([]);
    setMode("empty");
  };

  const handleEdit = () => {
    alert("Edit action (implement as needed)");
  };

  // UI helpers
  const isSaveVisible = () => mode === "empty" || mode === "add";
  const isSaveEnabled = () => mode === "add";
  const isEditVisible = () => mode === "list" && submodules.length > 0;
  const isRemoveEnabled = () => submodules.length > 0;

  // effective modules fallback (if none exist)
  const effectiveModules =
    modules && modules.length > 0
      ? modules
      : [
          { id: "SAMPLE-MOD-1", name: "Emotional Well-Being" },
          { id: "SAMPLE-MOD-2", name: "Understanding Emotions" },
        ];

  const activeModuleObj =
    effectiveModules.find((m) => m.id === selectedModuleId) || effectiveModules[0];

  return (
    <div className="min-h-screen bg-white p-6 font-Nunito">
      {/* top bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          {/* Back Arrow */}
          <button
            onClick={() => window.history.back()}
            className="text-[#263759] text-2xl font-bold"
            aria-label="Back"
          >
            ←
          </button>

          {/* Module Name OR Sub-Modules */}
          <div>
           
            <h1 className="text-[24px] font-bold font-Nunito text-[#263759]">
              {activeModuleObj?.name ? `${activeModuleObj.name} | Modules sub-Modules` : "Sub-Modules"}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleRemove}
            disabled={!isRemoveEnabled()}
            className={`px-4 py-2 rounded-md border ${
              isRemoveEnabled()
                ? "bg-white text-[#263759] border-[#D1D5DB] hover:shadow"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            Remove
          </button>

          {isEditVisible() && (
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-white border border-[#FFE6CC] rounded-md text-[#FF8B13] hover:shadow"
            >
              Edit
            </button>
          )}

          <button
            onClick={handleAddClick}
            className="w-[169px] h-[49px] bg-[#F58720] text-white rounded-[10px] text-[18px] font-semibold"
          >
            + Add Sub-Module
          </button>

          {isSaveVisible() && (
            <button
              onClick={handleSave}
              disabled={!isSaveEnabled()}
              className={` w-[119px] h-[49px] rounded-[50px] text-[18px] font-semibold text-white ${
                isSaveEnabled() ? "bg-[#FF8B13] hover:opacity-95" : "bg-[#C7C7CC] text-white cursor-not-allowed"
              }`}
            >
              Save
            </button>
          )}
        </div>
      </div>

      {/* body */}
      <div>
        {/* EMPTY STATE */}
        {mode === "empty" && submodules.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-40 opacity-70">
            <p className="text-[18px] font-semibold font-Nunito text-[#333]">NO SUB-MODULES FOUND</p>
            <p className="text-gray-500 text-sm mt-2 mb-6 text-center font-Nunito">
              Refresh page or add new sub-module. still facing issue, raise a ticket to product team.
            </p>
            <Image src={noDataImg} width={500} height={500} alt="No data" />
          </div>
        )}

        {/* ADD FORM */}
        {mode === "add" && (
          <div className="w-[900px] p-6 rounded-md mt-6 bg-white">
            <div className="flex flex-col gap-10">
              {/* ROW 1: Module ID (parent) | SubModule ID | SubModule Number */}
              <div className="flex items-start justify-between gap-10">
                {/* MODULE ID (parent reference, fixed) */}
                <div className="flex flex-col gap-2 w-[280px]">
                  <label className="text-sm text-[#263759]">Module ID</label>
                  <div className="px-4 py-3 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-md text-gray-500">
                    <span className="italic text-gray-800">{selectedModuleId || "Parent node reference"}</span>
                  </div>
                </div>

                {/* SUBMODULE ID */}
                <div className="flex flex-col gap-2 w-[280px]">
                  <label className="text-sm text-[#263759]">Sub Module ID</label>
                  <div className="px-4 py-3 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-md italic text-gray-400">
                    Auto-generated
                  </div>
                </div>

                {/* SUBMODULE NUMBER */}
                <div className="flex flex-col gap-2 w-[180px]">
                  <label className="text-sm text-[#263759]">Sub Module Number</label>
                  <div className="flex rounded-md overflow-hidden w-[120px]">
                    <button
                      onClick={() => setSubModuleNumber(Math.max(0, subModuleNumber - 1))}
                      className="px-3 bg-[#FF8B13] text-white text-lg"
                    >
                      -
                    </button>

                    <div className="flex-1 flex items-center justify-center bg-white border-x">
                      {subModuleNumber.toString().padStart(2, "0")}
                    </div>

                    <button
                      onClick={() => setSubModuleNumber(subModuleNumber + 1)}
                      className="px-3 bg-[#FF8B13] text-white text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* ROW 2: SubModule Name */}
              <div className="flex flex-col gap-2 w-[500px]">
                <label className="text-sm text-[#263759]">Sub Module Name</label>
                <div className="px-4 py-3 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-md">
                  <input
                    value={subModuleName}
                    onChange={(e) => setSubModuleName(e.target.value)}
                    placeholder="Type here"
                    className="w-full outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* LIST / AFTER SAVE */}
        {mode === "list" && submodules.length > 0 && (
          <div className="absolute left-[307px] top-[233px] w-[1053px]">
            {/* Top Filters */}
            <div className="flex justify-between items-center w-full h-[49px]">
              <div className="flex gap-[20px]">
                <button className="flex items-center gap-2 bg-[#F8BF3B] px-6 py-3 rounded-[30px] text-[18px] font-semibold">
                  <div className="w-6 h-6 border rounded-full"></div>
                  Active
                </button>
                <button className="flex items-center gap-2 border border-[#F8BF3B] px-6 py-3 rounded-[30px] text-[18px] font-semibold">
                  <div className="w-6 h-6 rounded-full hidden"></div>
                  Inactive
                </button>
                <button className="flex items-center gap-2 border border-[#F8BF3B] px-6 py-3 rounded-[30px] text-[18px] font-semibold">
                  See All
                </button>
              </div>

              <button className="flex items-center justify-center px-6 py-3 border-2 border-[#FF8B13] rounded-[10px]">
                <span className="text-[#FF8B13] text-[18px] font-semibold">Filter</span>
              </button>
            </div>

            {/* Table Header */}
            <div className="w-full h-[60px] bg-[#F8BF3B] rounded-[10px] mt-[20px] flex items-center px-[55px] justify-between">
              <span className="w-[80px] text-[16px] font-normal">Sub-Module no.</span>
              <span className="w-[110px] text-[16px] font-normal">Sub-Module ID</span>
              <span className="w-[230px] text-[16px] font-normal">Sub-Module name</span>
              <span className="w-[120px] text-[16px] font-normal">Module ID</span>
              <span className="w-[110px] text-[16px] font-normal">Action</span>
            </div>

            {/* Rows */}
            <div className="mt-[20px] flex flex-col gap-3">
              {submodules.map((s) => (
                <div
                  key={s.id}
                  className="w-full h-[53px] bg-[#FAFAFA] rounded-[10px] flex items-center px-[15px] gap-4"
                >
                  <div className="w-[24px] h-[24px] border border-[#F58720] rounded-full"></div>

                  <div className="flex justify-between items-center w-full px-[20px]">
                    <span className="w-[80px] text-[16px]">{s.number.toString().padStart(2, "0")}</span>

                    <span className="w-[99px] text-[16px] italic uppercase text-[#8E8E93]">{s.id}</span>

                    <span className="w-[230px] text-[16px]">{s.name}</span>

                    <span className="w-[120px] text-[16px] italic uppercase text-[#8E8E93]">{s.moduleId}</span>

                    <button className="w-[116px] h-[38px] bg-[rgba(245,135,32,0.25)] rounded-[10px] flex justify-center items-center">
                      <span className="text-[#F58720] text-[16px] font-semibold">View Details</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
