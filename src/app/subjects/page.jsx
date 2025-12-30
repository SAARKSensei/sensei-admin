"use client";
import { useState } from "react";
import Image from "next/image";
import noDataImg from "@/assets/no-data.svg?url"; // your illustration

export default function SubjectsPage() {
  const [subjects, setSubjects] = useState([]);
  const [mode, setMode] = useState("empty"); // empty | add | list

  // Form fields
  const [subjectName, setSubjectName] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  // Save
  const handleSave = () => {
    const newSubject = {
      id: subjects.length + 1,
      subjectName,
      ageGroup,
      duration,
      progress,
    };
    setSubjects([...subjects, newSubject]);
    setMode("list");
  };

  return (
    <div className="p-6 bg-[#FFFFFF] min-h-screen font-Nunito">

      {/* ---------- TOP BAR ---------- */}
  <div className="flex justify-between items-center mb-6">
  <h1 className="text-[24px] font-bold">Subjects</h1>

  <div className="flex gap-[40px] w-[493px] justify-end">

    {/* REMOVE — always visible */}
    <button
      className="w-[145px] h-[49px] border-[2px] border-[#C7C7CC]
      text-[#C7C7CC] rounded-[10px] text-[18px] font-semibold"
    >
      Remove
    </button>

    {/* EDIT — only visible AFTER save */}
    {subjects.length > 0 && mode !== "add" && (
      <button
        className="w-[114px] h-[49px] border-[2px] border-[#FF8B13]
        text-[#FF8B13] rounded-[10px] text-[18px] font-semibold"
      >
        Edit
      </button>
    )}

    {/* ADD SUBJECT */}
    <button
      onClick={() => setMode("add")}
      className="w-[169px] h-[49px] bg-[#F58720] text-white rounded-[10px]
      text-[18px] font-semibold"
    >
      + Add Subject
    </button>

    {/* SAVE BUTTON */}
    {(mode === "add" || subjects.length === 0) && (
      <button
        onClick={() => {
          if (mode === "add") {
            handleSave();
            setMode("list");
          }
        }}
        disabled={mode !== "add"} // disabled until user clicks Add Subject
        className={`
          w-[119px] h-[49px] rounded-[50px] text-[18px] font-semibold
          ${mode === "add"
            ? "bg-[#FF8B13] text-white" // enabled
            : "bg-[#C7C7CC] text-white cursor-not-allowed" // disabled
          }
        `}
      >
        Save
      </button>
    )}

  </div>
</div>




      {/* ---------- EMPTY STATE ---------- */}
      {mode === "empty" && (
        <div className="flex flex-col items-center justify-center mt-40 opacity-70">
          <p className="text-[18px] mt-6 mb-4 font-semibold text-[#333333]">
            NO SUBJECTS FOUND
          </p>
          <p className="text-gray-500 text-sm">
            Refresh page or add new subject. still facing issue ping it to product team.
          </p>
          <Image src={noDataImg} width={500} height={500} alt="No data" />
        </div>
      )}

      {/* ---------- ADD SUBJECT FORM (Figma Version) ---------- */}
      {mode === "add" && (
        <div className="flex flex-col gap-[29px] w-[685px]">

          {/* Row 1: Subject ID + Subject Name */}
          <div className="flex flex-row items-center gap-[63px] w-full">

            {/* Subject ID */}
            <div className="flex flex-col gap-[10px] w-[191px]">
              <p className="text-[14px]">Subject ID</p>

              <div className="flex items-center px-6 py-3 bg-white shadow-[0px_2px_20px_rgba(0,0,0,0.06)] rounded-[10px]">
                <p className="italic text-[16px] opacity-25">Auto-generated</p>
              </div>
            </div>

            {/* Subject Name */}
            <div className="flex flex-col gap-[10px] w-[368px]">
              <p className="text-[14px]">Subject Name</p>

              <div className="px-6 py-3 bg-white shadow-[0px_2px_20px_rgba(0,0,0,0.06)] rounded-[10px]">
                <input
                  placeholder="Type here"
                  className="w-full outline-none text-[16px] opacity-70"
                  value={subjectName}
                  onChange={(e) => setSubjectName(e.target.value)}
                />
              </div>
            </div>

          </div>

          {/* Row 2: Age Group + Time Duration + Progress */}
          <div className="flex flex-row items-center justify-between w-full">

            {/* Age Group */}
            <div className="flex flex-col gap-[10px] w-[219px]">
              <p className="text-[14px]">Age Group</p>

              <div className="flex justify-between items-center px-6 py-3
                bg-white shadow-[0px_2px_20px_rgba(0,0,0,0.06)] rounded-[10px]">

                <select
                  className="outline-none w-full text-[16px] opacity-70"
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="5-10 yrs">5-10 yrs</option>
                  <option value="10-15 yrs">10-15 yrs</option>
                </select>

                {/* Arrow */}
                <div className="w-[5px] h-[10px] border-2 border-[#FF8B13] rotate-90" />
              </div>
            </div>

            {/* Duration */}
            <div className="flex flex-col gap-[10px] w-[146px]">
              <p className="text-[14px]">Time duration (Months)</p>

              <div className="flex items-center justify-center
                bg-white shadow-[0px_2px_20px_rgba(0,0,0,0.06)] rounded-[10px] w-[120px] h-[45px]">

                {/* Minus */}
                <button
                  onClick={() => setDuration(Math.max(0, duration - 1))}
                  className="flex items-center justify-center w-[40px] h-full bg-[#F2F2F7] rounded-l-[10px]"
                >
                  <span className="text-[18px] font-bold text-gray-500">-</span>
                </button>

                {/* Value */}
                <p className="text-[16px] font-semibold opacity-70 w-[30px] text-center">
                  {duration}
                </p>

                {/* Plus */}
                <button
                  onClick={() => setDuration(duration + 1)}
                  className="flex items-center justify-center w-[40px] h-full bg-[#F58720] rounded-r-[10px]"
                >
                  <span className="text-white text-[18px] font-bold">+</span>
                </button>
              </div>
            </div>

            {/* Progress */}
            <div className="flex flex-col gap-[11px] w-[168px]">
              <p className="text-[14px]">Progress</p>

              <div className="flex shadow-[0px_2px_20px_rgba(0,0,0,0.06)] rounded-[10px]">

                {/* Value */}
                <div className="flex items-center justify-center bg-white w-[72px] h-[45px] rounded-l-[10px]">
                  <p className="text-[16px] text-gray-500">{progress}</p>
                </div>

                {/* Fixed Box */}
                <div className="flex items-center justify-center bg-[#F58720] w-[96px] h-[45px] rounded-r-[10px]">
                  <p className="text-white font-bold text-[18px]">out of 10</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      )}

      {/* ---------- LIST MODE ---------- */}
     {/* ---------- LIST MODE ---------- */}
{mode === "list" && (
  <div className="grid grid-cols-2 gap-x-10 gap-y-10 mt-10">

    {subjects.map((sub) => (
      <div
        key={sub.id}
        className="w-[480px] h-[210px] border border-[#FF8B13] rounded-[20px] p-6 bg-white flex flex-col justify-between shadow-sm"
      >

        {/* TOP ROW - SUBJECT TITLE */}
        <div className="flex items-center gap-3">
          {/* circle */}
          <div className="w-[18px] h-[18px] border-2 border-[#FF8B13] rounded-full"></div>

          {/* title */}
          <h3 className="text-[20px] font-semibold text-[#2C3D68]">
            {sub.subjectName}
          </h3>
        </div>

        {/* MID DETAILS */}
        <div className="flex justify-between mt-4 text-[14px] text-[#333]">

          <div>
            <p className="opacity-60">Age group</p>
            <p className="font-bold text-[#FF8B13]">{sub.ageGroup}</p>
          </div>

          <div>
            <p className="opacity-60">Time duration</p>
            <p className="font-bold text-[#FF8B13]">{sub.duration} M</p>
          </div>

          <div>
            <p className="opacity-60">Subject_ID</p>
            <p className="font-bold text-[#FF8B13]">00{sub.id}</p>
          </div>

          <div>
            <p className="opacity-60">Activities</p>
            <p className="font-bold text-[#FF8B13]">00</p>
          </div>

        </div>

        {/* BUTTON */}
        <button className="mt-4 px-5 py-2 border border-[#FF8B13] text-[#FF8B13] rounded-[10px] w-[120px]">
          View Details
        </button>

      </div>
    ))}

  </div>
)}



    </div>
  );
}
