"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "counsellor_data_v1";

export default function CounsellorPage() {
  const [mode, setMode] = useState("list"); // "list" | "detail"
  const [list, setList] = useState([]);

  // Counsellor form state
  const [form, setForm] = useState({
    id: "",
    fullName: "",
    fatherName: "",
    motherName: "",
    phone1: "",
    phone2: "",
    email: "",
    dob: "",
    address1: "",
    address2: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
    hscSchool: "",
    hscRoll: "",
    hscYear: "",
    sscSchool: "",
    sscRoll: "",
    sscYear: "",
    ugCollege: "",
    ugBranch: "",
    ugYear: "",
    pgCollege: "",
    pgBranch: "",
    pgYear: "",
    expMonths: "",
    certificate: "",
    workType: "",
    willingPartOrFull: "",
    description: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setList(JSON.parse(saved));
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const handleSubmit = () => {
    if (!form.fullName) {
      alert("Please fill counsellor name");
      return;
    }

    const newList = [...list, { ...form, id: Date.now().toString() }];
    setList(newList);
    saveToLocalStorage(newList);

    alert("Counsellor Saved!");
    setMode("list");
    resetForm();
  };

  const resetForm = () => {
    setForm({
      id: "",
      fullName: "",
      fatherName: "",
      motherName: "",
      phone1: "",
      phone2: "",
      email: "",
      dob: "",
      address1: "",
      address2: "",
      city: "",
      pincode: "",
      state: "",
      country: "",
      hscSchool: "",
      hscRoll: "",
      hscYear: "",
      sscSchool: "",
      sscRoll: "",
      sscYear: "",
      ugCollege: "",
      ugBranch: "",
      ugYear: "",
      pgCollege: "",
      pgBranch: "",
      pgYear: "",
      expMonths: "",
      certificate: "",
      workType: "",
      willingPartOrFull: "",
      description: "",
    });
  };

  const updateForm = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // ----------------------------------------
  // List view (keeps the same logic)
  // ----------------------------------------
  const ListView = () => (
    <div className="p-6 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h2 className="text-[24px] font-Nunito font-extrabold text-[#2C3D68] uppercase">
          Counsellor List
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => setMode("detail")}
            className="flex items-center gap-2 bg-[#FF8B13] text-[#1C1C1C] px-4 md:px-6 py-2 rounded-[10px] font-semibold"
          >
            <span className="w-3 h-3 border-2 border-black border-t-0 border-l-0 rotate-45" />
            Add
          </button>

          <button className="flex items-center gap-2 border-2 border-[#FF8B13] text-[#FF8B13] px-4 md:px-6 py-2 rounded-[10px] font-semibold">
            Edit
          </button>

          <button className="flex items-center gap-2 border-2 border-[#FF8B13] text-[#FF8B13] px-4 md:px-6 py-2 rounded-[10px] font-semibold">
            Remove
          </button>
        </div>
      </div>

      {/* Filters row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-[#F8BF3B] px-4 py-2 rounded-[30px] font-semibold">
            Active
          </button>
          <button className="flex items-center gap-2 border border-[#F8BF3B] px-4 py-2 rounded-[30px] font-semibold">
            Inactive
          </button>
          <button className="flex items-center gap-2 border border-[#F8BF3B] px-4 py-2 rounded-[30px] font-semibold">
            See All
          </button>
        </div>

        <button className="border-2 border-[#FF8B13] text-[#FF8B13] px-4 py-2 rounded-[10px] font-semibold">
          Filter
        </button>
      </div>

      {/* Table header */}
      <div className="w-full bg-[#F8BF3B] p-3 rounded-[10px] mt-2">
        <div className="grid grid-cols-8 text-black font-normal text-[16px] px-2">
          <div>Counsellor Id.</div>
          <div>Counsellor name</div>
          <div>Phone No.</div>
          <div>Email ID</div>
          <div>City</div>
          <div>Working(Full/part)</div>
          <div>RCI approve</div>
          <div>Description</div>
        </div>
      </div>

      {/* Table body */}
      <div className="mt-2 bg-[#FAFAFA] rounded-[10px]">
        {list.length === 0 ? (
          <div className="text-center py-16 text-gray-500">No Counsellor Added Yet</div>
        ) : (
          list.map((c, i) => (
            <div key={c.id || i} className="grid grid-cols-8 px-6 py-4 border-b text-[15px]">
              <div>{i + 1}</div>
              <div>{c.fullName}</div>
              <div>{c.phone1}</div>
              <div>{c.email}</div>
              <div>{c.city}</div>
              <div>{c.willingPartOrFull}</div>
              <div>{c.certificate}</div>
              <div className="truncate">{c.description}</div>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-end mt-6">
        <button className="px-8 py-3 bg-[#2C3D68] text-[#FF8B13] font-bold rounded-[10px]">View details</button>
      </div>
    </div>
  );

  // ----------------------------------------
  // Detail view — responsive Flex/Grid
  // ----------------------------------------
  const DetailView = () => (
    <div className="p-6 w-full">
      {/* Header row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[20px] font-bold">COUNSELLOR</h2>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMode("list")}
            className="border border-gray-300 px-4 py-2 rounded-md"
          >
            Back
          </button>
          <button className="flex items-center gap-2 bg-[#FF8B13] text-[#1C1C1C] px-4 py-2 rounded-[10px] font-semibold">
            + Add Counsellor
          </button>
          <button className="border-2 border-[#FF8B13] text-[#FF8B13] px-3 py-2 rounded-[10px]">
            Edit
          </button>
          <button className="border-2 border-[#FF8B13] text-[#FF8B13] px-3 py-2 rounded-[10px]">
            Remove
          </button>
        </div>
      </div>

      {/* Top profile + ID row */}
      <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
        {/* Avatar + add */}
        <div className="flex-shrink-0 relative w-[104px] h-[104px]">
          <div className="w-full h-full bg-[#F0F0F0] rounded-full flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="w-[33px] h-[33px] bg-[#FF8B13] rounded-full" />
              <div className="w-[61px] h-[61px] bg-[#FF8B13] rounded-full mt-1" />
            </div>
          </div>

          <button
            onClick={() => alert("Upload avatar (not implemented)") }
            className="absolute -top-2 -left-2 w-[28px] h-[28px] bg-[#FF8B13] rounded-full flex items-center justify-center text-white shadow"
            title="Add avatar"
          >
            +
          </button>
        </div>

        {/* Counsellor ID input */}
        <div className="flex-1 max-w-xl">
          <label className="block text-sm text-black mb-2">Counsellor ID</label>
          <div className="w-full">
            <div className="w-full bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] rounded-[10px] px-4 py-3">
              <input
                type="text"
                placeholder="Type here"
                value={form.id}
                onChange={(e) => updateForm("id", e.target.value)}
                className="w-full outline-none placeholder:text-black/30 text-[16px] italic"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main form container (peach background block) */}
      <div className=" p-6 rounded-lg shadow-sm">
        {/* Row structure: 3 columns of 300px inputs on wide screen, wrap on small */}
        <div className="flex flex-wrap bg-[#FFF6EE] gap-6">

          {/* Full Name */}
          <FormField label="Full Name" width="300px">
            <TextInput value={form.fullName} onChange={(v) => updateForm("fullName", v)} />
          </FormField>

          {/* Father Name */}
          <FormField label="Father Name" width="300px">
            <TextInput value={form.fatherName} onChange={(v) => updateForm("fatherName", v)} />
          </FormField>

          {/* Mother Name */}
          <FormField label="Mother Name" width="300px">
            <TextInput value={form.motherName} onChange={(v) => updateForm("motherName", v)} />
          </FormField>

          {/* Phone Number 1 */}
          <FormField label="Phone Number 1" width="300px">
            <PhoneInput value={form.phone1} onChange={(v) => updateForm("phone1", v)} />
          </FormField>

          {/* Email ID */}
          <FormField label="Email ID" width="300px">
            <TextInput value={form.email} onChange={(v) => updateForm("email", v)} />
          </FormField>

          {/* DOB (137px) */}
          <FormField label="DOB" width="137px">
            <DateInput value={form.dob} onChange={(v) => updateForm("dob", v)} />
          </FormField>

          {/* Phone Number 2 */}
          <FormField label="Phone Number 2" width="300px">
            <PhoneInput value={form.phone2} onChange={(v) => updateForm("phone2", v)} />
          </FormField>

          {/* Address Lane 1 */}
          <FormField label="Address Lane 1" width="300px">
            <TextInput value={form.address1} onChange={(v) => updateForm("address1", v)} />
          </FormField>

          {/* Address Lane 2 */}
          <FormField label="Address Lane 2" width="300px">
            <TextInput value={form.address2} onChange={(v) => updateForm("address2", v)} />
          </FormField>

          {/* City (select - 180px) */}
          <FormField label="City" width="180px">
            <SelectInput value={form.city} onChange={(v) => updateForm("city", v)} />
          </FormField>

          {/* Pincode (select width style) */}
          <FormField label="Pincode" width="180px">
            <SelectInput value={form.pincode} onChange={(v) => updateForm("pincode", v)} />
          </FormField>

          {/* State (180px) */}
          <FormField label="State" width="180px">
            <SelectInput value={form.state} onChange={(v) => updateForm("state", v)} />
          </FormField>

          {/* Country (180px) */}
          <FormField label="Country" width="180px">
            <SelectInput value={form.country} onChange={(v) => updateForm("country", v)} />
          </FormField>
        </div>

        {/* Small spacer */}
        <div className="h-6" />

        {/* Education block (two-column-ish). We'll follow the same widths */}
        <div className="bg-[#fff5ee] p-5  rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <FormField label="HSC School Name" width="100%">
                <TextInput value={form.hscSchool} onChange={(v) => updateForm("hscSchool", v)} />
              </FormField>
              <FormField label="SSC School Name" width="100%">
                <TextInput value={form.sscSchool} onChange={(v) => updateForm("sscSchool", v)} />
              </FormField>
              <FormField label="UG College Name" width="100%">
                <TextInput value={form.ugCollege} onChange={(v) => updateForm("ugCollege", v)} />
              </FormField>
              <FormField label="PG College Name" width="100%">
                <TextInput value={form.pgCollege} onChange={(v) => updateForm("pgCollege", v)} />
              </FormField>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <FormField label="HSC (Grade / %)" width="100%">
                <TextInput value={form.hscRoll} onChange={(v) => updateForm("hscRoll", v)} />
              </FormField>

              <FormField label="SSC (Grade / %)" width="100%">
                <TextInput value={form.sscRoll} onChange={(v) => updateForm("sscRoll", v)} />
              </FormField>

              <FormField label="UG College (Grade / %)" width="100%">
                <TextInput value={form.ugBranch} onChange={(v) => updateForm("ugBranch", v)} />
              </FormField>

              <FormField label="PG College (Grade / %)" width="100%">
                <TextInput value={form.pgBranch} onChange={(v) => updateForm("pgBranch", v)} />
              </FormField>
            </div>

            {/* Column 3: Years / selects */}
            <div className="flex flex-col gap-4">
              <FormField label="HSC Year of Passing" width="100%">
                <SelectInput value={form.hscYear} onChange={(v) => updateForm("hscYear", v)} />
              </FormField>

              <FormField label="SSC Year of Passing" width="100%">
                <SelectInput value={form.sscYear} onChange={(v) => updateForm("sscYear", v)} />
              </FormField>

              <FormField label="UG Year of Passing" width="100%">
                <SelectInput value={form.ugYear} onChange={(v) => updateForm("ugYear", v)} />
              </FormField>

              <FormField label="PG Year of Passing" width="100%">
                <SelectInput value={form.pgYear} onChange={(v) => updateForm("pgYear", v)} />
              </FormField>
            </div>
          </div>
        </div>

        {/* Work / certification row */}
        <div className="h-6" />
        <div className="bg-[#fff5ee] p-5 rounded-lg">
          <div className="flex flex-wrap gap-6">
            <FormField label="Work Exp. (If Fresher)" width="180px">
              <SelectInput value={form.workType} onChange={(v) => updateForm("workType", v)} />
            </FormField>

            <FormField label="Other Certification" width="300px">
              <TextInput value={form.certificate} onChange={(v) => updateForm("certificate", v)} />
            </FormField>

            <FormField label="Willing to work Full / Part Time" width="180px">
              <SelectInput value={form.willingPartOrFull} onChange={(v) => updateForm("willingPartOrFull", v)} />
            </FormField>
          </div>

          {/* extra small fields row */}
          <div className="mt-4 flex flex-wrap gap-4">
            <FormField label="If Part Time mention work hours (min. 3hrs)" width="300px">
              <TextInput value={form.expMonths} onChange={(v) => updateForm("expMonths", v)} />
            </FormField>

            <div className="flex items-center gap-4">
              <div className="text-sm font-medium">Willing to take 1-1 session</div>
              <label className="inline-flex relative items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={!!form.takeOneToOne}
                  onChange={(e) => updateForm("takeOneToOne", e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-[#FF8B13] peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all relative"></div>
              </label>
            </div>

            <FormField label="1-1 session if yes: Mention Charges (Rs/Hrs)" width="300px">
              <TextInput value={form.description} onChange={(v) => updateForm("description", v)} />
            </FormField>
          </div>
        </div>

        {/* Save button */}
        <div className="mt-6 flex justify-end">
          <button onClick={handleSubmit} className="bg-[#1B2B65] text-white px-6 py-2 rounded-[8px]">
            Save
          </button>
        </div>
      </div>
    </div>
  );

  return <div className="w-full">{mode === "list" ? <ListView /> : <DetailView />}</div>;
}

/* -------------------------
   Reusable small components
   ------------------------- */

function FormField({ children, label, width = "300px" }) {
  // width accepts px or % or full
  const style = { minWidth: width, width: width === "100%" ? "100%" : width };
  return (
    <div style={style} className="flex flex-col">
      <label className="text-sm text-black mb-2">{label}</label>
      {children}
    </div>
  );
}

function TextInput({ value, onChange }) {
  return (
    <input
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type here"
      className="w-full bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-[10px] px-4 py-3 outline-none"
    />
  );
}

function PhoneInput({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-[10px] px-3 py-3 min-w-[48px]">
        <span className="text-sm text-black/60">+91</span>
      </div>
      <input
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Phone"
        className="flex-1 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-[10px] px-4 py-3 outline-none"
      />
    </div>
  );
}

function SelectInput({ value, onChange }) {
  // simple styled select with placeholder entries, replace with real options as needed
  return (
    <select
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-[10px] px-4 py-3 outline-none appearance-none"
    >
      <option value="">Select</option>
      <option value="opt1">Option 1</option>
      <option value="opt2">Option 2</option>
    </select>
  );
}

function DateInput({ value, onChange }) {
  return (
    <input
      type="date"
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-[10px] px-3 py-3 outline-none"
    />
  );
}
