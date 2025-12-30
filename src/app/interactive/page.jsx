"use client";

import React, { useEffect, useState } from "react";

/**
 * Interactive Activities — Page Content
 * - Place inside your app's page (no layout wrapper)
 * - Tailwind required in the project
 */

const STORAGE_KEY = "interactive_activities_v1";

export default function InteractiveActivitiesContent() {
  // mode: "form" | "list"
  const [mode, setMode] = useState("form");

  // activities list
  const [activities, setActivities] = useState([]);

  // form state
  const [activityNumber, setActivityNumber] = useState(0);
  const [activityName, setActivityName] = useState("");
  const [materialsRequired, setMaterialsRequired] = useState("");
  const [objectives, setObjectives] = useState("");
  const [keyMessage, setKeyMessage] = useState("");
  const [processText, setProcessText] = useState("");
  const [submissionRequired, setSubmissionRequired] = useState(false);
  const [submissionTask, setSubmissionTask] = useState("");

  // load saved activities
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      setActivities(parsed);
      // show form if no activities, else show form by requirement (Option A default form)
      // We keep default to form per Option A
    } catch (e) {
      console.error("Failed to load activities", e);
    }
  }, []);

  // persist activities
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(activities));
    } catch (e) {
      console.error("Failed to persist activities", e);
    }
  }, [activities]);

  const resetForm = () => {
    setActivityNumber(0);
    setActivityName("");
    setMaterialsRequired("");
    setObjectives("");
    setKeyMessage("");
    setProcessText("");
    setSubmissionRequired(false);
    setSubmissionTask("");
  };

  const handleSave = () => {
    if (!activityName.trim()) {
      alert("Please enter Activity Name");
      return;
    }

    const newAct = {
      id: Date.now(),
      activityNumber: Number(activityNumber),
      activityName: activityName.trim(),
      materialsRequired: materialsRequired.trim(),
      objectives: objectives.trim(),
      keyMessage: keyMessage.trim(),
      processText: processText.trim(),
      submissionRequired,
      submissionTask: submissionRequired ? submissionTask.trim() : "",
      createdAt: new Date().toISOString(),
    };

    setActivities((s) => [...s, newAct]);
    resetForm();
    setMode("list");
  };

  const handleRemoveAll = () => {
    if (!activities.length) return;
    if (!confirm("Remove all activities?")) return;
    setActivities([]);
    // after removing, show form per Option A (you may keep list empty or show form)
    setMode("form");
  };

  const handleAddActivity = () => {
    resetForm();
    setMode("form");
  };

  // small helpers for counter
  const decNumber = () => setActivityNumber((n) => Math.max(0, n - 1));
  const incNumber = () => setActivityNumber((n) => n + 1);

  return (
    <div className="w-full px-6 py-10 min-h-screen font-Nunito bg-white text-[#1a2230]">
      {/* Top area (breadcrumb + action buttons) - keep minimal because header exists */}
      {/* ------------------ Figma Exact Header Layout ------------------ */}
<div className="flex items-center justify-between w-full mb-20 px-2">

  {/* ---------- Left Section ---------- */}
  <div className="flex items-center gap-4">

    {/* Orange Vertical Line */}
    <div className="w-[4px] h-[40px] bg-[#FF8B13] rounded-full"></div>

    {/* Titles */}
    <div className="flex flex-col leading-tight">
      <span className="text-[14px] font-semibold text-[#263759] uppercase tracking-wide">
        Emotional Well-being | Module
      </span>
      <span className="text-[18px] font-semibold text-[#263759] tracking-wide">
        Sub-Module | Activity
      </span>
    </div>
  </div>

  {/* ---------- Right Buttons Section ---------- */}
  <div className="flex items-center gap-4">

    {/* + Add Subject */}
    <button
      onClick={() => alert("+ Add Subject clicked")}
      className="w-[169px] h-[49px] border-2 border-[#C7C7CC] rounded-[10px] text-[#C7C7CC] font-semibold text-[18px] flex items-center justify-center gap-2"
    >
      <span className="text-[22px] leading-none">+</span> Add Subject
    </button>

    {/* Remove Button */}
    <button
      onClick={handleRemoveAll}
      disabled={!activities.length}
      className={`w-[145px] h-[49px] border-2 rounded-[10px] flex items-center justify-center gap-2 font-semibold text-[18px] 
        ${activities.length ? "border-[#C7C7CC] text-[#C7C7CC]" : "border-gray-200 text-gray-300 cursor-not-allowed"}
      `}
    >
      Remove
      {/* Delete Icon */}
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
        <rect x="1" y="4" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 1H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M1 4H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </button>

    {/* Save — only visible in form mode */}
    {mode === "form" && (
      <button
        onClick={handleSave}
        className="w-[119px] h-[49px] rounded-full bg-[#F58720] text-white text-[18px] font-bold"
      >
        Save
      </button>
    )}

  </div>
</div>


      {/* ---- Mode switch buttons (Active / Inactive / See All) ---- */}
      

      {/* ------------------ FORM MODE (pixel-like layout) ------------------ */}
      {mode === "form" && (
        <div
          className="bg-white rounded-lg shadow-sm p-6"
          style={{ width: 1223 }}
        >
          <div className="flex flex-wrap -mx-4" style={{ gap: 40 }}>
            {/* Activity Number box */}
            <div style={{ width: 120 }} className="flex flex-col gap-2">
              <label className="text-sm">Activity Number</label>
              <div className="flex items-center bg-white rounded-md shadow-[0_2px_20px_rgba(0,0,0,0.06)]" style={{ height: 42, minWidth: 120 }}>
                <button
                  onClick={decNumber}
                  className="w-10 h-10 bg-[#F58720] text-white flex items-center justify-center rounded-l-md font-semibold"
                >
                  −
                </button>
                <div className="flex-1 text-center text-[16px] font-semibold text-[#1A1A1A] opacity-70">{String(activityNumber).padStart(2, "0")}</div>
                <button
                  onClick={incNumber}
                  className="w-10 h-10 bg-[#F58720] text-white flex items-center justify-center rounded-r-md font-semibold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Activity Name */}
            <div style={{ width: 310 }} className="flex flex-col gap-2">
              <label className="text-sm">Activity Name</label>
              <div className="bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-md px-4 py-3 h-[46px] flex items-center">
                <input
                  name="activityName"
                  value={activityName}
                  onChange={(e) => setActivityName(e.target.value)}
                  placeholder="Type here"
                  className="w-full outline-none text-[16px] font-semibold placeholder:opacity-30"
                />
              </div>
            </div>

            {/* Materials required */}
            <div style={{ width: 310 }} className="flex flex-col gap-2">
              <label className="text-sm">Materials required</label>
              <div className="bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-md px-4 py-3 h-[46px] flex items-center">
                <input
                  name="materialsRequired"
                  value={materialsRequired}
                  onChange={(e) => setMaterialsRequired(e.target.value)}
                  placeholder="Type here"
                  className="w-full outline-none text-[16px] font-semibold placeholder:opacity-30"
                />
              </div>
            </div>
          </div>

          {/* Objectives / Key Message row (two columns) */}
          <div className="flex justify-between gap-10 mt-8">
            <div style={{ width: 470 }} className="flex flex-col gap-2">
              <label className="text-sm">Objectives</label>
              <div className="bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-md p-3 h-[100px]">
                <textarea
                  value={objectives}
                  onChange={(e) => setObjectives(e.target.value)}
                  placeholder="Type here"
                  className="w-full h-full resize-none outline-none placeholder:opacity-30"
                />
              </div>
            </div>

            <div style={{ width: 470 }} className="flex flex-col gap-2">
              <label className="text-sm">Key Message</label>
              <div className="bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-md p-3 h-[100px]">
                <textarea
                  value={keyMessage}
                  onChange={(e) => setKeyMessage(e.target.value)}
                  placeholder="Type here"
                  className="w-full h-full resize-none outline-none placeholder:opacity-30"
                />
              </div>
            </div>
          </div>

          {/* Process (full width) */}
          <div className="mt-8">
            <label className="text-sm">Process</label>
            <div className="bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-md p-3 h-[100px]">
              <textarea
                value={processText}
                onChange={(e) => setProcessText(e.target.value)}
                placeholder="Type here"
                className="w-full h-full resize-none outline-none placeholder:opacity-30"
              />
            </div>
          </div>

          {/* Submission row */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-6">
              <div>
                <label className="text-sm block">Submission required</label>
              </div>

              {/* custom toggle */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={submissionRequired}
                  onChange={(e) => setSubmissionRequired(e.target.checked)}
                />
                <div className="w-[52px] h-[32px] bg-[#E5E7EA] rounded-full peer-checked:bg-[#FF8B13] transition" />
                <div className="absolute left-1 top-1 w-[24px] h-[24px] bg-white rounded-full shadow transition peer-checked:translate-x-[20px]" />
              </label>
            </div>

            <div style={{ width: 470 }}>
              <label className="text-sm block">Submission Task</label>
              <div className="bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-md p-3 h-[100px]">
                <textarea
                  value={submissionTask}
                  onChange={(e) => setSubmissionTask(e.target.value)}
                  placeholder="Type here"
                  className="w-full h-full resize-none outline-none placeholder:opacity-30"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------ LIST MODE ------------------ */}
     {mode === "list" && (
  <div className="mt-8 w-full bg-white p-4 rounded-lg shadow-sm">

    {/* Top controls - matches Figma exactly */}
    <div className="flex justify-between items-center mb-6">

      {/* Left filter buttons */}
      <div className="flex gap-4">
        <button className="px-6 py-3 rounded-full bg-[#F8BF3B] text-white">
          Active
        </button>
        <button className="px-6 py-3 rounded-full border">
          Inactive
        </button>
        <button className="px-6 py-3 rounded-full border">
          See All
        </button>
      </div>

      {/* Search + Add Activity */}
      <div className="flex gap-3 items-center">
        <input
          placeholder="Search"
          className="px-3 py-2 border rounded w-[220px]"
        />
        <button
          onClick={handleAddActivity}
          className="px-4 py-2 rounded border text-[#FF8B13]"
        >
          + Add Activity
        </button>
      </div>
    </div>

    {/* Table header */}
    <div className="bg-[#F8BF3B] p-3 rounded-md grid grid-cols-8 gap-4 text-sm font-medium">
      <div>Activity Number</div>
      <div>Activity Name</div>
      <div>Material Req.</div>
      <div>Objective</div>
      <div>Key Message</div>
      <div>Process</div>
      <div>Submission Req.</div>
      <div>Submission Task</div>
    </div>

    {/* Table rows */}
    <div className="flex flex-col gap-3 mt-4">
      {activities.length === 0 && (
        <div className="p-6 text-center text-gray-500">
          No activities yet — add one.
        </div>
      )}

      {activities.map((act) => (
        <div
          key={act.id}
          className="bg-[#FAFAFA] rounded-md p-3 flex items-center justify-between"
        >
          <div className="flex items-center gap-4 w-full">
            <div className="w-6 h-6 border rounded-full" />

            <div className="grid grid-cols-8 gap-4 w-full text-sm items-center">
              <div>{String(act.activityNumber).padStart(2, "0")}</div>
              <div className="truncate">{act.activityName}</div>
              <div className="truncate">{act.materialsRequired}</div>
              <div className="truncate">{act.objectives}</div>
              <div className="truncate">{act.keyMessage}</div>
              <div className="truncate">{act.processText}</div>
              <div>{act.submissionRequired ? "Yes" : "No"}</div>
              <div className="truncate">{act.submissionTask}</div>
            </div>
          </div>

          <button className="px-3 py-1 bg-[rgba(245,135,32,0.15)] rounded text-[#F58720]">
            View Details
          </button>
        </div>
      ))}
    </div>
  </div>
)}

    </div>
  );
}
