"use client";

import TabButton from "@/components/TabButton";
import ActionButton from "@/components/ActionButton";

export default function SchoolList({ onAdd }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full">

      <h1 className="text-[24px] font-semibold mb-6">SCHOOL LIST</h1>

      <div className="flex justify-between items-center mb-6">
        {/* Tabs */}
        <div className="flex gap-3">
          <TabButton active label="Active" />
          <TabButton label="Inactive" />
          <TabButton label="See All" />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <ActionButton label="Add" onClick={onAdd} />
          <ActionButton label="Edit" />
          <ActionButton label="Remove" />
          <ActionButton label="Filter" />
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-left border-collapse shadow-sm">
        <thead>
          <tr className="bg-yellow-400">
            {[
              "School ID", "School Name", "Phone No.", "Email ID", "City",
              "Affiliation", "Grade", "Type", "Strength", "Compensation"
            ].map((h) => (
              <th key={h} className="px-3 py-3 text-sm font-semibold">{h}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan="10" className="text-center py-8 text-gray-500">
              No Data Available
            </td>
          </tr>
        </tbody>
      </table>

      <button className="mt-8 bg-[#0A3060] text-white px-6 py-3 rounded-md float-right">
        View Details
      </button>
    </div>
  );
}
