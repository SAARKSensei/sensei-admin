"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import noDataImg from "@/assets/no-data.svg?url"; // your illustration


/**
 * ModulesPage
 *
 * Behavior:
 * - Reads subjects from localStorage key "subjects" (if available) to populate Subject dropdown.
 * - Persists modules to localStorage key "modules".
 *
 * Button rules:
 * 1) Empty state: Save visible but disabled; Add visible; Remove visible; Edit hidden
 * 2) On Add: Save visible + enabled; Add visible; Remove visible; Edit hidden
 * 3) After Save: Save hidden; Add visible; Remove visible; Edit visible
 */

export default function ModulesPage() {
  const [modules, setModules] = useState([]);
  const [subjects, setSubjects] = useState([]);

  // mode: "empty" | "add" | "list"
  const [mode, setMode] = useState("empty");

  // form fields for adding module
  const [selectedSubjectId, setSelectedSubjectId] = useState("");
  const [moduleName, setModuleName] = useState("");
  const [moduleNumber, setModuleNumber] = useState(0);

  // load from localStorage on mount
  useEffect(() => {
    const rawModules = localStorage.getItem("modules");
    const parsedModules = rawModules ? JSON.parse(rawModules) : [];
    setModules(parsedModules);

    const rawSubjects = localStorage.getItem("subjects");
    const parsedSubjects = rawSubjects ? JSON.parse(rawSubjects) : [];
    setSubjects(parsedSubjects);

    if (parsedModules && parsedModules.length > 0) {
      setMode("list");
    } else {
      setMode("empty");
    }
  }, []);

  // persist modules on change
  useEffect(() => {
    localStorage.setItem("modules", JSON.stringify(modules));
  }, [modules]);

  // helpers
  const generateModuleId = () => {
    // simple id generator: "MOD" + timestamp + random
    return `MOD-${Date.now().toString().slice(-5)}-${Math.floor(
      Math.random() * 900
    ) + 100}`;
  };
 const generate32BitId = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let id = "";
  // first 28 chars random
  for (let i = 0; i < 28; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // last 4 MUST be digits
  const lastFour = Math.floor(1000 + Math.random() * 9000); // always 4 digits

  return id + lastFour.toString();
};

const maskId = (id) => {
  if (!id) return "";
  return "*".repeat(28) + id.slice(-4);
};


  const resetForm = () => {
    setSelectedSubjectId(generateSubjectId());
    setModuleName("");
    setModuleNumber(0);
  };
  const generateSubjectId = () => {
  return `SUB-${Date.now().toString().slice(-5)}-${Math.floor(
    Math.random() * 900
  ) + 100}`;
};


  // BUTTON ACTIONS
  const handleAddClick = () => {
    setMode("add");
    const newId = generate32BitId();
  setSelectedSubjectId(newId); 
    // enable save — form is editable
  };

  const handleSave = () => {
    // minimal validation
   if (!moduleName) {
  alert("Please enter module name.");
  return;
}

    const newModule = {
      id: generate32BitId(),
      number: moduleNumber,
      name: moduleName,
      subjectId: selectedSubjectId,
      createdAt: new Date().toISOString(),
    };

    const updated = [...modules, newModule];
    setModules(updated);

    // after save: show list and hide Save
    setMode("list");
    resetForm();
  };

  const handleRemove = () => {
    // for now just remove all modules (placeholder)
    if (!modules.length) return;
    if (!confirm("Remove all modules? (demo action)")) return;
    setModules([]);
    setMode("empty");
  };

  const handleEdit = () => {
    // placeholder — you can implement edit modal or route later
    alert("Edit action (implement as needed)");
  };

  // UI state helpers for button visibility/enabled per your rules
  const isSaveVisible = () => {
    // visible when empty (disabled) OR when in add (enabled).
    // After saving mode becomes 'list' so Save will be hidden.
    return mode === "empty" || mode === "add";
  };
  const isSaveEnabled = () => {
    // enabled only when mode === "add"
    return mode === "add";
  };

  const isEditVisible = () => {
    // only visible after saving i.e., when showing list with modules
    return mode === "list" && modules.length > 0;
  };

  const isRemoveEnabled = () => {
    return modules.length > 0;
  };

  // If no subjects exist, allow a small fallback list so dropdown isn't empty:
  const effectiveSubjects =
    subjects && subjects.length > 0
      ? subjects
      : [
          { id: "SAMPLE-1", subjectName: "Emotional Well-Being" },
          { id: "SAMPLE-2", subjectName: "Understanding Emotions" },
        ];

  return (
    <div className="min-h-screen bg-white p-6 font-Nunito">
      {/* top bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
    {/* Back Arrow */}
    <button
      onClick={() => window.history.back()}
      className="text-[#263759] text-2xl font-bold"
    >
      ←
    </button>

    {/* Subject Name OR Modules */}
    <h1 className="text-[24px] font-bold font-Nunito text-[#263759]">
      {selectedSubjectId
        ? (subjects.find((s) => s.id === selectedSubjectId)?.subjectName ||
           "Subject")
        : "Modules"}
    </h1>
  </div>

        <div className="flex items-center gap-3">
          {/* Remove (visible always; enabled only if modules exist) */}
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

          {/* Edit (visible only after save/list) */}
          {isEditVisible() && (
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-white border border-[#FFE6CC] rounded-md text-[#FF8B13] hover:shadow"
            >
              Edit
            </button>
          )}

          {/* Add Module button always visible */}
          <button
            onClick={handleAddClick}
            className="w-[169px] h-[49px] bg-[#F58720] text-white rounded-[10px]
      text-[18px] font-semibold"
          >
            + Add Module
          </button>

          {/* Save button - visible per rules */}
          {isSaveVisible() && (
            <button
              onClick={handleSave}
              disabled={!isSaveEnabled()}
              className={` w-[119px] h-[49px] rounded-[50px] text-[18px] font-semibold text-white ${
                isSaveEnabled()
                  ? "bg-[#FF8B13] hover:opacity-95"
                  : "bg-[#C7C7CC] text-white cursor-not-allowed"
              }`}
            >
              Save
            </button>
          )}
        </div>
      </div>

      {/* body content area */}
      <div>
        {/* EMPTY STATE */}
        {mode === "empty" && modules.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-40 opacity-70">
            <p className="text-[18px] font-semibold font-Nunito text-[#333]">
              NO MODULES FOUND
            </p>
            <p className="text-gray-500 text-sm mt-2 mb-6 text-center font-Nunito">
              Refresh page or add new module. still facing issue,<br/> raise a ticket
              to the product team.
            </p>

           <Image src={noDataImg} width={500} height={500} alt="No data" />
          </div>
        )}

        {/* ADD MODULE FORM (Figma style) */}
       {mode === "add" && (
  <div className="w-[900px] p-6 rounded-md mt-20 bg-white ">
    <div className="flex flex-col gap-10">

      {/* ROW 1: SUBJECT ID | MODULE ID | MODULE NUMBER */}
      <div className="flex items-start justify-between gap-10">

        {/* SUBJECT ID */}
        {/* SUBJECT ID (Auto-filled from selected subject) */}
<div className="flex flex-col gap-2 w-[280px]">
  <label className="text-sm text-[#263759]">Subject ID</label>

  <div
  className="px-4 py-3 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]
             rounded-md text-gray-500"
>
  <span className="italic text-gray-400">Parent Reference</span>
</div>
</div>


        {/* MODULE ID */}
        <div className="flex flex-col gap-2 w-[280px]">
          <label className="text-sm text-[#263759]">Module ID</label>
          <div className="px-4 py-3 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-md italic text-gray-400">
            Auto-generated
          </div>
        </div>

        {/* MODULE NUMBER */}
        <div className="flex flex-col gap-2 w-[180px]">
          <label className="text-sm text-[#263759]">Module Number</label>

          <div className="flex rounded-md overflow-hidden w-[120px]">
            <button
              onClick={() => setModuleNumber(Math.max(0, moduleNumber - 1))}
              className="px-3 bg-[#FF8B13] text-white text-lg"
            >
              -
            </button>

            <div className="flex-1 flex items-center justify-center bg-white border-x">
              {moduleNumber.toString().padStart(2, "0")}
            </div>

            <button
              onClick={() => setModuleNumber(moduleNumber + 1)}
              className="px-3 bg-[#FF8B13] text-white text-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* ROW 2: MODULE NAME */}
      <div className="flex flex-col gap-2 w-[500px]">
        <label className="text-sm text-[#263759]">Module Name</label>
        <div className="px-4 py-3 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-md">
          <input
            value={moduleName}
            onChange={(e) => setModuleName(e.target.value)}
            placeholder="Type here"
            className="w-full outline-none"
          />
        </div>
      </div>

    </div>
  </div>
)}



        {/* LIST / AFTER SAVE */}
        {mode === "list" && modules.length > 0 && (
         <div className="absolute left-[307px] top-[233px] w-[1353px]">

  {/* Top Filters */}
  <div className="flex justify-between items-center w-full h-[49px]">
    <div className="flex gap-[20px]">

      {/* Active */}
      <button className="flex items-center gap-2 bg-[#F8BF3B] px-6 py-3 rounded-[30px] text-[18px] font-semibold">
        <div className="w-6 h-6 border rounded-full"></div>
        Active
      </button>

      {/* Inactive */}
      <button className="flex items-center gap-2 border border-[#F8BF3B] px-6 py-3 rounded-[30px] text-[18px] font-semibold">
        <div className="w-6 h-6 rounded-full hidden"></div>
        Inactive
      </button>

      {/* See All */}
      <button className="flex items-center gap-2 border border-[#F8BF3B] px-6 py-3 rounded-[30px] text-[18px] font-semibold">
        See All
      </button>

    </div>

    {/* Filter Button */}
    <button className="flex items-center justify-center px-6 py-3 border-2 border-[#FF8B13] rounded-[10px]">
      <span className="text-[#FF8B13] text-[18px] font-semibold">Filter</span>
    </button>
  </div>

  {/* Table Header */}
  <div className="w-full h-[60px] bg-[#F8BF3B] rounded-[10px] mt-[20px] flex items-center px-[55px] justify-between">
    <span className="w-[80px] text-[16px] font-normal">Module no.</span>
    <span className="w-[110px] text-[16px] font-normal">Module ID</span>
    <span className="w-[230px] text-[16px] font-normal">Module name</span>
    <span className="w-[120px] text-[16px] font-normal">Subject ID</span>
    <span className="w-[110px] text-[16px] font-normal">Action</span>
  </div>

  {/* Dynamic Table Rows */}
  <div className="mt-[20px] flex flex-col gap-3">

    {modules.map((mod, idx) => (
      <div
        key={mod.id}
        className="w-full h-[53px] bg-[#FAFAFA] rounded-[10px] flex items-center px-[15px] gap-4"
      >
        {/* Checkbox */}
        <div className="w-[24px] h-[24px] border border-[#F58720] rounded-full"></div>

        {/* Content Row */}
        <div className="flex justify-between items-center w-full px-[20px]">
          <span className="w-[80px] text-[16px]">{mod.number.toString().padStart(2, "0")}</span>

          <span className="w-[130px] text-[16px]  italic uppercase text-[#8E8E93]">
  {maskId(mod.id)}
</span>

          <span className="w-[230px] text-[16px]">{mod.name}</span>

          <span className="w-[120px] text-[16px] italic uppercase text-[#8E8E93]">
  {maskId(mod.subjectId)}
</span>

          {/* View Details */}
          <button className="w-[116px] h-[38px] bg-[rgba(245,135,32,0.25)] rounded-[10px] flex justify-center items-center">
            <span className="text-[#F58720] text-[16px] font-semibold">
              View Details
            </span>
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
