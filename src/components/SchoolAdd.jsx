"use client";

import Input from "@/components/Input";
import SelectInput from "@/components/SelectInput";

export default function SchoolAdd({ onSave }) {
  return (
    <div className="w-full bg-white rounded-[8px] px-6 shadow-sm">

      {/* Header Row (already present above in your file) */}
      <div className="w-full flex justify-between items-center mt-6 mb-6">
        <h1 className="text-[24px] font-extrabold font-Nunito text-[#2C3D68] uppercase">
          School
        </h1>

        <div className="flex items-center gap-4">
          <button className="h-[49px] w-[103px] bg-[#FF8B13] rounded-[10px] flex items-center justify-center">
            <span className="text-[18px] font-semibold text-[#1C1C1C]">Add</span>
          </button>

          <button className="h-[49px] w-[115px] border-2 border-[#FF8B13] rounded-[10px] flex items-center justify-center bg-white">
            <span className="text-[18px] font-semibold text-[#FF8B13]">Edit</span>
          </button>

          <button className="h-[49px] w-[145px] border-2 border-[#FF8B13] rounded-[10px] flex items-center justify-center bg-white">
            <span className="text-[18px] font-semibold text-[#FF8B13]">Remove</span>
          </button>
        </div>
      </div>

      {/* Stats */}
       <div
        className="flex justify-between gap-10 px-8  mb-10"
        style={{ width: "1350px", height: "130px" }}
      >
        {[
          { label: "Total Strength", value: "0000" },
          { label: "Onboarded Student", value: "000" },
          { label: "Student Conv. Rate", value: "00%" },
          { label: "Compensation", value: "00%" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-[10px] w-[200px] h-[130px] px-5 py-5"
          >
            <p className="text-[16px] font-bold text-[#2C3D68] leading-[22px]">
              {item.label}
            </p>

            <p className="text-[54px] font-bold text-[#FF8B13] leading-[74px] mt-1">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* ===== BLUE HIGHLIGHTED FORM AREA (centered max width 990px) ===== */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1290px]">
          {/* Row: School ID | Email ID | Phone Number 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mb-4">
            <Input  label="School ID" placeholder="Type here" />
            <Input label="Email ID" placeholder="Type here" />
            <Input label="Phone Number 1" placeholder="+91" />
          </div>

          {/* Row: School Name | Address Lane 1 | Address Lane 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mb-4">
            <Input label="School Name" placeholder="Type here" />
            <Input label="Address Lane 1" placeholder="Type here" />
            <Input label="Address Lane 2" placeholder="Type here" />
          </div>

          {/* Row: Phone Number 2 | (empty) | (empty) - keep layout spacing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            <Input label="Phone Number 2" placeholder="+91" />
            {/* filler columns on smaller screens will stack; on larger they stay empty to keep grid aligned */}
            <div />
            <div />
          </div>

          {/* Row: City | Pincode | State | Country  (4 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-4">
            <SelectInput label="City" />
            <SelectInput label="Pincode" />
            <SelectInput label="State" />
            <SelectInput label="Country" />
          </div>

          {/* Row: School Affiliation | Type | Grade */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            <Input label="School Affiliation" placeholder="Type here" />
            <Input label="Type" placeholder="Type here" />
            <SelectInput label="Grade" />
          </div>

          {/* Row: Student Ratio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <Input label="Student Ratio" placeholder="Type here" />
            {/* keep a second column placeholder so spacing aligns on larger screens */}
            <div />
          </div>
        </div>
      </div>
      {/* ===== end blue area ===== */}

      {/* Save Button */}
      <div className="w-full flex justify-end mt-6">
        <button
          onClick={onSave}
          className="bg-[#0A3060] text-white px-8 py-3 rounded-md"
        >
          Save
        </button>
      </div>
    </div>
  );
}
