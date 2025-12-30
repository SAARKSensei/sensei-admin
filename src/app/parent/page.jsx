"use client";

import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";

// Your existing helper components...
function Label({ children }) {
  return <div className="text-sm font-normal text-[#000] mb-2">{children}</div>;
}

function InputWrapper({ children, className = "" }) {
  return <div className={`bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-[10px] ${className}`}>{children}</div>;
}

function TextInput({ value, onChange, placeholder = "Type here", autoComplete = "on" }) {
  return (
    <InputWrapper>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full px-6 py-3 text-[16px] font-semibold leading-5 placeholder:opacity-30 placeholder:text-[#1A1A1A] bg-transparent outline-none rounded-[10px]"
      />
    </InputWrapper>
  );
}

function SelectBox({ value, onClick }) {
  return (
    <div onClick={onClick} className="flex items-center justify-between px-6 py-3 rounded-[10px] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] cursor-pointer">
      <div className="font-semibold text-[16px] opacity-50">{value}</div>
      <div className="text-[#FF8B13] text-sm">▾</div>
    </div>
  );
}

function DropdownPanel({ open, items = [], activeIndex = -1, onSelect }) {
  if (!open) return null;
  return (
    <div className="absolute left-0 top-[56px] z-40 w-[180px] bg-white rounded-[10px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden">
      {items.map((it, i) => (
        <div
          key={it}
          onClick={() => onSelect(it)}
          className={`px-4 py-3 font-semibold text-[16px] cursor-pointer ${
            i === activeIndex ? "bg-[#FF8B13] text-black" : "text-black"
          }`}
        >
          {it}
        </div>
      ))}
    </div>
  );
}

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className="relative w-[64px] h-[34px] rounded-[30px] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] flex items-center px-2"
      aria-pressed={checked}
    >
      <div
        className={`w-[30px] h-[30px] rounded-full transition-all ${
          checked ? "translate-x-[30px] bg-[#FF8B13]" : "translate-x-[2px] bg-[#E8E8E8]"
        }`}
      ></div>
    </button>
  );
}

export default function ParentPage() {
  // Mode state — form or list
  const [mode, setMode] = useState("form");

  // Data
  const [parentList, setParentList] = useState([]);

  // Dropdown refs & open states (as before)
  const maritalRef = useRef(null);
  const childRef = useRef(null);
  const spouseGenderRef = useRef(null);
  const occupationRef = useRef(null);
  const spouseOccupationRef = useRef(null);
  const spouseRelationRef = useRef(null);

  const [maritalOpen, setMaritalOpen] = useState(false);
  const [childOpen, setChildOpen] = useState(false);
  const [spouseGenderOpen, setSpouseGenderOpen] = useState(false);
  const [parentOccupationOpen, setParentOccupationOpen] = useState(false);
  const [spouseOccupationOpen, setSpouseOccupationOpen] = useState(false);
  const [spouseRelationOpen, setSpouseRelationOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [editData, setEditData] = useState(null);


  // Selected & input fields
  const [marital, setMarital] = useState("Select");
  const [childName, setChildName] = useState("Select");
  const [spouseGender, setSpouseGender] = useState("Select");
  const [parentOccupation, setParentOccupation] = useState("Select");
  const [spouseRelation, setSpouseRelation] = useState("Select");

  const [parentId, setParentId] = useState(editData?.parentId ||"");
  const [password, setPassword] = useState("");
  const [parentName, setParentName] = useState(editData?.parentName ||"");
  const [parentPhone, setParentPhone] = useState(editData?.parentPhone ||"");
  const [parentEmail, setParentEmail] = useState(editData?.parentEmail ||"");

  const [spouseName, setSpouseName] = useState("");
  const [spousePhone, setSpousePhone] = useState("");
  const [spouseEmail, setSpouseEmail] = useState("");
  const [spouseOccupation, setSpouseOccupation] = useState("");

  const [workingParent, setWorkingParent] = useState(true);
  const [workingSpouse, setWorkingSpouse] = useState(false);

  const [parentDOB, setParentDOB] = useState(null);
  const [spouseDOB, setSpouseDOB] = useState(null);

  const maritalItems = ["Married", "Single", "Separated", "Divorced"];
  const childItems = ["Child 1", "Child 2", "Child 3", "Child 4"];
  const occupationItems = ["Teacher", "Engineer", "Doctor", "Other"];
  const spouseRelationItems = ["Father", "Mother", "Guardian", "Other"];

  useEffect(() => {
    function handleClickOutside(e) {
      if (maritalRef.current && !maritalRef.current.contains(e.target)) setMaritalOpen(false);
      if (childRef.current && !childRef.current.contains(e.target)) setChildOpen(false);
      if (spouseGenderRef.current && !spouseGenderRef.current.contains(e.target)) setSpouseGenderOpen(false);
      if (occupationRef.current && !occupationRef.current.contains(e.target)) setParentOccupationOpen(false);
      if (spouseOccupationRef.current && !spouseOccupationRef.current.contains(e.target)) setSpouseOccupationOpen(false);
      if (spouseRelationRef.current && !spouseRelationRef.current.contains(e.target)) setSpouseRelationOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const DateInput = ({ selected, onChange }) => (
  <div className="relative w-[137px]">
    <DatePicker
      selected={selected}
      onChange={onChange}
      dateFormat="dd/MM/yyyy"
      placeholderText="Select "
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      scrollableYearDropdown
      yearDropdownItemNumber={80}  // shows 80 years dropdown
      maxDate={new Date()}         // cannot pick future date
      className="w-full px-4 py-3 rounded-[10px] text-[16px] font-semibold 
                 shadow-[0_2px_20px_rgba(0,0,0,0.06)] outline-none bg-white"
    />

    {/* Calendar Icon */}
    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded bg-[#FF8B13] 
                    flex items-center justify-center text-white text-sm">
      📅
    </div>
  </div>
);

  const handleSubmit = () => {
  if (editData) {
    // Update existing
    const updated = [...parentList];
    updated[selectedIndex] = {
      parentId: editData.parentId,
      parentName,
      parentPhone,
      parentEmail,
      childName,
      workingParent,
      parentOccupation,
      marital
    };
    setParentList(updated);
  } else {
    // Add new
    setParentList([
      ...parentList,
      {
        parentId: parentList.length + 1,
        parentName,
        parentPhone,
        parentEmail,
        childName,
        workingParent,
        parentOccupation,
        marital
      }
    ]);
  }

  setMode("list");
  setEditData(null);
  setSelectedIndex(null);
};



  return (
    <div className="w-full min-h-screen flex ">
      <div className="w-[1410px] bg-white rounded-[8px] px-0">

        {/* Top bar */}
        <div className="flex items-center justify-between px-10 pt-8 pb-2">
          <h1 className="text-[24px] font-extrabold font-Nunito uppercase text-[#2C3D68]">
            {mode === "form" ? "PARENT" : "PARENT LIST"}
          </h1>

          <div className="flex items-center gap-4">
            {mode === "list" && (
              <button
                type="button"
                onClick={() => setMode("form")}
                className="flex items-center gap-2 px-6 py-3 rounded-[10px] border border-[#C7C7CC] text-[#C7C7CC] text-[18px] font-semibold"
              >
                + Add parent
              </button>
            )}
             <button
    disabled={selectedIndex === null}
    className={`px-5 py-3 rounded-lg border font-semibold flex items-center gap-2
      ${selectedIndex === null ? "border-gray-300 text-gray-300" : "border-[#FF8B13] text-[#FF8B13]"}
    `}
    onClick={() => {
      if (selectedIndex !== null) {
        const updatedList = parentList.filter((_, idx) => idx !== selectedIndex);
        setParentList(updatedList);
        setSelectedIndex(null);

      }
    }}
  >
    Remove 
  </button>
  {mode === "list" && (
   <button
    disabled={selectedIndex === null}
    className={`px-6 py-3 rounded-lg border font-semibold flex items-center gap-2
      ${selectedIndex === null ? "border-gray-300 text-gray-300" : "border-[#FF8B13] text-[#FF8B13]"}
    `}
    onClick={() => {
      if (selectedIndex !== null) {
        setEditData(parentList[selectedIndex]);
        setMode("form");
      }
    }}
  >
    Edit 
  </button>
  )}

            {mode === "form" && (
              <button
                type="button"
                onClick={ handleSubmit}
                className="px-6 py-3 rounded-[50px] bg-[#F58720] text-white font-bold text-[18px]"
              >
                Save
              </button>
            )}
          </div>
        </div>

        {/* CONTENT */}
        <div className="px-10 pb-10">
          {mode === "form" ? (
            <>
              {/* ======== FORM UI (your existing form) ======== */}
              <div className="grid" style={{ gridTemplateColumns: "300px 301px 337px", columnGap: "122px", alignItems: "start" }}>
                {/* LEFT COLUMN */}
                <div>
                  <div style={{ position: "relative", marginBottom: 24 }}>
                    <Label>Parent ID</Label>
                    <TextInput
                      value={parentId}
                      onChange={(e) => setParentId(e.target.value)}
                      placeholder="Type here"
                      autoComplete="off"
                    />
                  </div>

                  <div ref={maritalRef} className="relative" style={{ marginBottom: 24 }}>
                    <Label>Marital Status</Label>
                    <div onClick={() => setMaritalOpen((s) => !s)}>
                      <SelectBox value={marital} />
                    </div>
                    <DropdownPanel
                      open={maritalOpen}
                      items={maritalItems}
                      activeIndex={maritalItems.indexOf(marital)}
                      onSelect={(v) => {
                        setMarital(v);
                        setMaritalOpen(false);
                      }}
                    />
                  </div>

                  <div ref={childRef} className="relative" style={{ marginBottom: 24 }}>
                    <Label>Child name</Label>
                    <div onClick={() => setChildOpen((s) => !s)}>
                      <SelectBox value={childName} />
                    </div>
                    <DropdownPanel
                      open={childOpen}
                      items={childItems}
                      activeIndex={childItems.indexOf(childName)}
                      onSelect={(v) => {
                        setChildName(v);
                        setChildOpen(false);
                      }}
                    />
                  </div>

                  <div style={{ marginTop: 32, width: 300 }}>
                    <Label>Password</Label>
                    <InputWrapper>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="********"
                        className="w-full px-6 py-3 text-[16px] font-semibold leading-5 placeholder:opacity-30 placeholder:text-[#1A1A1A] bg-transparent outline-none rounded-[10px]"
                      />
                    </InputWrapper>
                  </div>
                </div>

                {/* MIDDLE COLUMN */}
                <div>
                  <div style={{ marginBottom: 24 }}>
                    <Label>Parent Name</Label>
                    <TextInput value={parentName} onChange={(e) => setParentName(e.target.value)} />
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <Label>Parent Phone No.</Label>
                    <TextInput value={parentPhone} onChange={(e) => setParentPhone(e.target.value)} placeholder="Type here" />
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <Label>Parent Email ID</Label>
                    <TextInput value={parentEmail} onChange={(e) => setParentEmail(e.target.value)} placeholder="Type here" />
                  </div>

                  <div style={{ display: "flex", gap: 20, alignItems: "center", marginBottom: 20 }}>
                    <div style={{ width: 180 }} ref={occupationRef} className="relative">
                      <Label>Parent Occupation</Label>
                      <div onClick={() => setParentOccupationOpen((s) => !s)}>
                        <SelectBox value={parentOccupation} />
                      </div>
                      <DropdownPanel
                        open={parentOccupationOpen}
                        items={occupationItems}
                        activeIndex={occupationItems.indexOf(parentOccupation)}
                        onSelect={(v) => {
                          setParentOccupation(v);
                          setParentOccupationOpen(false);
                        }}
                      />
                    </div>

                    <div style={{ width: 64 }}>
                      <Label>Working</Label>
                      <div style={{ marginTop: 6 }}>
                        <Toggle checked={workingParent} onChange={setWorkingParent} />
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <Label>Parent DOB</Label>
                    <DateInput
                      selected={parentDOB}
                      onChange={(date) => setParentDOB(date)}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Select"
                      className="w-full px-4 py-3 rounded-[10px] text-[16px] font-semibold shadow-[0_2px_20px_rgba(0,0,0,0.06)] outline-none"
                    />
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div>
                  <div style={{ marginBottom: 24 }}>
                    <Label>Spouse Name</Label>
                    <TextInput value={spouseName} onChange={(e) => setSpouseName(e.target.value)} />
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <Label>Spouse Phone No.</Label>
                    <TextInput value={spousePhone} onChange={(e) => setSpousePhone(e.target.value)} />
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <Label>Spouse Email ID</Label>
                    <TextInput value={spouseEmail} onChange={(e) => setSpouseEmail(e.target.value)} />
                  </div>

                  <div style={{ display: "flex", gap: 20, alignItems: "center", marginBottom: 20 }}>
                    <div style={{ width: 180 }} ref={spouseOccupationRef} className="relative">
                      <Label>Spouse Occupation</Label>
                      <div onClick={() => setSpouseOccupationOpen((s) => !s)}>
                        <SelectBox value={spouseOccupation || "Select"} />
                      </div>
                      <DropdownPanel
                        open={spouseOccupationOpen}
                        items={occupationItems}
                        activeIndex={occupationItems.indexOf(spouseOccupation)}
                        onSelect={(v) => {
                          setSpouseOccupation(v);
                          setSpouseOccupationOpen(false);
                        }}
                      />
                    </div>

                    <div style={{ width: 64 }}>
                      <Label>Working</Label>
                      <div style={{ marginTop: 6 }}>
                        <Toggle checked={workingSpouse} onChange={setWorkingSpouse} />
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 20 }}>
                    <div style={{ width: 137 }}>
                      <Label>Spouse DOB</Label>
                      <DateInput selected={spouseDOB} onChange={setSpouseDOB} />
                    </div>

                    <div ref={spouseGenderRef} style={{ width: 180 }} className="relative">
                      <Label>Spouse gender</Label>
                      <div onClick={() => setSpouseGenderOpen((s) => !s)}>
                        <SelectBox value={spouseGender} />
                      </div>
                      <DropdownPanel
                        open={spouseGenderOpen}
                        items={["Male", "Female", "Other"]}
                        activeIndex={["Male", "Female", "Other"].indexOf(spouseGender)}
                        onSelect={(v) => {
                          setSpouseGender(v);
                          setSpouseGenderOpen(false);
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: 6 }}>
                    <Label>Spouse relation with child</Label>
                    <div ref={spouseRelationRef} className="relative">
                      <div onClick={() => setSpouseRelationOpen((s) => !s)}>
                        <SelectBox value={spouseRelation} />
                      </div>
                      <DropdownPanel
                        open={spouseRelationOpen}
                        items={spouseRelationItems}
                        activeIndex={spouseRelationItems.indexOf(spouseRelation)}
                        onSelect={(v) => {
                          setSpouseRelation(v);
                          setSpouseRelationOpen(false);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            // ======== LIST MODE ========
           <div className="w-full px-6 py-4">

    {/* ----------------- TOP FILTER TABS ----------------- */}
    <div className="flex justify-between items-center mb-6">

      {/* Left Tabs */}
      <div className="flex gap-4">
        {/* Active */}
        <button className="flex items-center gap-2 bg-[#F8BF3B] px-6 py-3 rounded-full">
          <span className="font-semibold text-[18px]">Active</span>
        </button>

        {/* Inactive */}
        <button className="flex items-center gap-2 border border-[#F8BF3B] px-6 py-3 rounded-full">
          <span className="font-semibold text-[18px]">Inactive</span>
        </button>

        {/* See All */}
        <button className="flex items-center gap-2 border border-[#F8BF3B] px-6 py-3 rounded-full">
          <span className="font-semibold text-[18px]">See All</span>
        </button>
      </div>

      {/* Right Filter Button */}
      <button className="border-2 border-[#FF8B13] px-6 py-3 rounded-lg font-semibold text-[#FF8B13]">
        Filter
      </button>
    </div>

    {/* ----------------- HEADER BAR ----------------- */}
    <div className="grid grid-cols-8 bg-[#F8BF3B] text-black px-6 py-3 rounded-lg mb-4 text-[16px] font-normal">
      <div>Parent ID</div>
      <div>Parent name</div>
      <div>Phone No.</div>
      <div>Email ID</div>
      <div>Children Name</div>
      <div>Working</div>
      <div>Occupation</div>
      <div>Marital Status</div>
    </div>

    {/* ----------------- ROWS ----------------- */}
    <div className="max-h-[500px] overflow-y-auto pr-3">

      {parentList.map((item, index) => (
        <div
          key={index}
          className={`grid grid-cols-8 px-6 py-4 mb-2 rounded-lg cursor-pointer shadow-sm border
            ${selectedIndex === index ? "bg-[#FFE9C7] border-[#F8BF3B]" : "bg-white"}
          `}
          onClick={() => setSelectedIndex(index)}
        >
          <div>{item.parentId}</div>
          <div>{item.parentName}</div>
          <div>{item.parentPhone}</div>
          <div>{item.parentEmail}</div>
          <div>{item.childName}</div>
          <div>{item.workingParent ? "Yes" : "No"}</div>
          <div>{item.parentOccupation}</div>
          <div className="flex justify-start">
            <button
              className="px-4 py-1 bg-[#F587203d] text-[#F58720] rounded-md text-[14px] font-semibold"
              onClick={(e) => {
                e.stopPropagation();
                alert("View details coming soon");
              }}
            >
              View Details
            </button>
          </div>
        </div>
      ))}

    </div>

  </div>
          )}
        </div>
      </div>
    </div>
  );
}
