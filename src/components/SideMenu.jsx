"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
const SideMenu = () => {
  const path = usePathname();
  return (
    <div className="pt-7 flex text-base text-white bg-[#2C3D68] flex-col ">
      <div className="group/dropdown">
        <Link
          className={`flex items-center justify-between  hover:bg-[#FF8B13] px-10 py-4 ${
            path === "/dashboard" ? "bg-[#FF8B13]" : ""
          }`}
          href="/dashboard"
        >
          Dashboard <IoIosArrowDown />
        </Link>
        <div className="h-0 overflow-hidden group-hover/dropdown:h-[176px] flex flex-col text-sm transition-[height] duration-300">
          <Link className="hover:bg-[#FF8B13] px-14 py-3" href="/units">
            Units
          </Link>
          <Link className="hover:bg-[#FF8B13] px-14 py-3" href="/modules">
            Modules
          </Link>
          <Link className="hover:bg-[#FF8B13] px-14 py-3" href="/activities">
            Activities
          </Link>
          <Link className="hover:bg-[#FF8B13] px-14 py-3" href="/feedback">
            Feedback
          </Link>
        </div>
      </div>
      <Link
        className={`hover:bg-[#FF8B13] px-10 py-4 ${
          path === "/curriculum" ? "bg-[#FF8B13]" : ""
        }`}
        href="/curriculum"
      >
        Curriculum
      </Link>
      <Link
        className={`hover:bg-[#FF8B13] px-10 py-4 ${
          path === "/student" ? "bg-[#FF8B13]" : ""
        }`}
        href="/student"
      >
        Student
      </Link>
      <Link
        className={`hover:bg-[#FF8B13] px-10 py-4 ${
          path === "/parent" ? "bg-[#FF8B13]" : ""
        }`}
        href="/parent"
      >
        Parent
      </Link>
      <Link
        className={`hover:bg-[#FF8B13] px-10 py-4 ${
          path === "/counsellor" ? "bg-[#FF8B13]" : ""
        }`}
        href="/counsellor"
      >
        Counsellor
      </Link>
      <Link
        className={`hover:bg-[#FF8B13] px-10 py-4 ${
          path === "/schools" ? "bg-[#FF8B13]" : ""
        }`}
        href="/schools"
      >
        Schools
      </Link>
      <Link
        className={`hover:bg-[#FF8B13] px-10 py-4 ${
          path === "/announcements" ? "bg-[#FF8B13]" : ""
        }`}
        href="/announcements"
      >
        Announcements
      </Link>
    </div>
  );
};

export default SideMenu;
