"use client";

import { useState } from "react";
import { Plus, Save } from "lucide-react";

export default function DigitalActivitiesContent() {
  const [mode, setMode] = useState("list");
  const [activities, setActivities] = useState([]);

  const [form, setForm] = useState({
    subModuleId: "",
    digitalActivityId: "",
    digitalActivityNumber: 0,
    digitalActivityName: "",
    image: "",
    keyOutcome: "",
    numberOfQuestions: 0,
  });

  const handleSave = () => {
    setActivities([...activities, form]);
    setForm({
      subModuleId: "",
      digitalActivityId: "",
      digitalActivityNumber: 0,
      digitalActivityName: "",
      image: "",
      keyOutcome: "",
      numberOfQuestions: 0,
    });
    setMode("list");
  };

  /* ================= LIST MODE ================= */
  if (mode === "list") {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm">
        {/* LIST MODE HEADER */}
<div className="mb-6 space-y-5">

  {/* ROW 1 */}
  <div className="flex justify-between items-center">
    <h2 className="text-lg font-semibold text-gray-800">
      Digital List
    </h2>

    <div className="flex items-center gap-3">
      <button
        onClick={() => setMode("detail")}
        className="flex items-center gap-2 bg-[#FF8B13] text-white px-5 py-2 rounded-full"
      >
        + Add
      </button>

      <button className="px-5 py-2 rounded-full border border-[#FF8B13] text-[#FF8B13] text-sm">
        Remove
      </button>

      <button className="px-5 py-2 rounded-full border border-[#FF8B13] text-[#FF8B13] text-sm">
        Edit
      </button>
    </div>
  </div>

  {/* ROW 2 */}
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-3">
      <button className="px-4 py-2 rounded-full bg-[#FFC94A] text-sm font-medium flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-white" /> Active
      </button>

      <button className="px-4 py-2 rounded-full border border-[#FFC94A] text-sm">
        Inactive
      </button>

      <button className="px-4 py-2 rounded-full border border-[#FFC94A] text-sm">
        See All
      </button>
    </div>

    <div className="flex items-center gap-3">
      <div className="relative">
        <input
          placeholder="Search"
          className="border border-[#FF8B13] rounded-full px-4 py-2 pr-10 text-sm"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FF8B13]">
          🔍
        </span>
      </div>

      <button className="px-5 py-2 rounded-full border border-[#FF8B13] text-[#FF8B13] text-sm">
        Filter
      </button>
    </div>
  </div>

</div>


        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#FFC94A] text-left text-sm">
                <th className="p-3">Sub Module ID</th>
                <th className="p-3">Digital Activity ID</th>
                <th className="p-3">Activity No.</th>
                <th className="p-3">Activity Name</th>
                <th className="p-3">Image</th>
                <th className="p-3">Key Outcome</th>
                <th className="p-3">Questions</th>
                 <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {activities.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-6 text-center text-gray-400">
                    No digital activities added yet
                  </td>
                </tr>
              )}

              {activities.map((item, index) => (
                <tr key={index} className="border-b text-sm">
                  <td className="p-3">{item.subModuleId}</td>
                  <td className="p-3">{item.digitalActivityId}</td>
                  <td className="p-3">{item.digitalActivityNumber}</td>
                  <td className="p-3">{item.digitalActivityName}</td>
                  <td className="p-3 text-blue-600 truncate max-w-[120px]">
                    {item.image}
                  </td>
                  <td className="p-3">{item.keyOutcome}</td>
                  <td className="p-3">{item.numberOfQuestions}</td>
                  <td className="p-3">
  <button
    className="px-4 py-2 rounded-full bg-[#FFE2C6] text-[#FF8B13] text-sm font-medium"
  >
    View Details
  </button>
</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  /* ================= DETAIL MODE ================= */
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg font-semibold text-gray-800">
          Add Digital Activity
        </h2>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-[#FF8B13] text-white px-6 py-2 rounded-full"
        >
          <Save size={16} /> Save
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Input
          label="Sub Module ID"
          value={form.subModuleId}
          onChange={(v) => setForm({ ...form, subModuleId: v })}
        />
        <Input
          label="Digital Activity ID"
          value={form.digitalActivityId}
          onChange={(v) => setForm({ ...form, digitalActivityId: v })}
        />

        <NumberInput
          label="Digital Activity Number"
          value={form.digitalActivityNumber}
          onChange={(v) => setForm({ ...form, digitalActivityNumber: v })}
        />
        <Input
          label="Digital Activity Name"
          value={form.digitalActivityName}
          onChange={(v) => setForm({ ...form, digitalActivityName: v })}
        />

        <Input
          label="Image (link)"
          value={form.image}
          onChange={(v) => setForm({ ...form, image: v })}
        />
        <Textarea
          label="Key Outcome"
          value={form.keyOutcome}
          onChange={(v) => setForm({ ...form, keyOutcome: v })}
        />

        <NumberInput
          label="Number of Questions"
          value={form.numberOfQuestions}
          onChange={(v) => setForm({ ...form, numberOfQuestions: v })}
        />
      </div>
    </div>
  );
}

/* ================= SMALL UI COMPONENTS ================= */

function Input({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-sm mb-1 text-gray-600">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
  );
}

function Textarea({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-sm mb-1 text-gray-600">{label}</label>
      <textarea
        rows={3}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
  );
}

function NumberInput({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-sm mb-1 text-gray-600">{label}</label>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onChange(Math.max(0, value - 1))}
          className="px-3 py-1 bg-[#FF8B13] text-white rounded"
        >
          -
        </button>
        <span className="min-w-[40px] text-center">{value}</span>
        <button
          onClick={() => onChange(value + 1)}
          className="px-3 py-1 bg-[#FF8B13] text-white rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}
