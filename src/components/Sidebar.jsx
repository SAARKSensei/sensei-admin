"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";   // <-- ADDED
import { ChevronDown } from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();  // <-- ADDED
  const [openMenu, setOpenMenu] = useState("learning");

  return (
    <div className="w-[277px] h-screen bg-[#2C3D68] flex flex-col py-8">

      {/* Dashboard */}
      <SidebarItem
        label="Dashboard"
        href="/dashboard"
        active={pathname === "/dashboard"}   // <-- ACTIVE CHECK
      />

      {/* Learning Module (Dropdown) */}
      <div>
        <button
          onClick={() => setOpenMenu(openMenu === "learning" ? "" : "learning")}
          className="w-full flex justify-between items-center px-10 py-4 text-[18px] font-semibold
                     border-r-4 border-[#FF8B13] text-[#FF8B13]"
        >
          <span>Learning Modules</span>
          <ChevronDown
            className={`w-5 h-5 text-[#FF8B13] transition-transform duration-300
              ${openMenu === "learning" ? "rotate-180" : "rotate-0"}`}
          />
        </button>

        {openMenu === "learning" && (
          <div className="flex flex-col">
            <SubItem label="Subjects" href="/subjects" active={pathname === "/subjects"} />
            <SubItem label="Modules" href="/modules" active={pathname === "/modules"} />
            <SubItem label="Sub-Modules" href="/sub-modules" active={pathname === "/sub-modules"} />
            <SubItem label="Interactive Activities" href="/interactive" active={pathname === "/interactive"} />
            <SubItem label="Digital Activities" href="/digital" active={pathname === "/digital"} />
            <SubItem label="Feedback" href="/feedback" active={pathname === "/feedback"} />
          </div>
        )}
      </div>

      {/* Other main menus */}
      <SidebarItem label="Student" href="/student" active={pathname === "/student"} />
      <SidebarItem label="Parent" href="/parent" active={pathname === "/parent"} />
      <SidebarItem label="Counsellor" href="/counsellor" active={pathname === "/counsellor"} />
      <SidebarItem label="Schools" href="/schools" active={pathname === "/schools"} />
      <SidebarItem label="Announcements" href="/announcements" active={pathname === "/announcements"} />
    </div>
  );
}

function SidebarItem({ label, href, active }) {
  return (
    <Link
      href={href}
      className={`w-full px-10 py-4 text-[18px] font-semibold 
        ${active ? "bg-[#FF8B13] text-[#333333]" : "text-white hover:bg-[#314777]"}`}
    >
      {label}
    </Link>
  );
}

function SubItem({ label, href, active = false }) {
  return (
    <Link
      href={href}
      className={`w-full px-[60px] py-3 text-[16px] font-semibold
        ${active ? "bg-[#FF8B13] text-[#333333]" : "text-white hover:bg-[#314777]"}`}
    >
      {label}
    </Link>
  );
}
