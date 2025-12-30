"use client";

import { useState } from "react";
import SchoolAdd from "@/components/SchoolAdd";
import SchoolList from "@/components/SchoolList";

export default function SchoolsPage() {
  const [mode, setMode] = useState("add"); // "add" or "list"

  return (
    <div className="w-full min-h-screen flex ">
      {mode === "add" ? (
        <SchoolAdd onSave={() => setMode("list")} />
      ) : (
        <SchoolList onAdd={() => setMode("add")} />
      )}
    </div>
  );
}
