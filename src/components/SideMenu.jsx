"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
const SideMenu = () => {
  const path = usePathname();
  const dropdown =
    path.startsWith("/unit") ||
    path.startsWith("/module") ||
    path.startsWith("/activit") ||
    path.startsWith("/feedback");
  return (
    <div className="pt-7 flex text-base text-white bg-[#2C3D68] flex-col ">
      <div className="group/dropdown">
        <Link
          className={`flex items-center justify-between  hover:bg-[#FF8B13] px-10 py-4 ${
            path === "/" ? "bg-[#FF8B13]" : ""
          }`}
          href="/"
        >
          Dashboard <IoIosArrowDown />
        </Link>
        <div
          className={`${
            dropdown ? "h-[176px]" : ""
          } h-0 overflow-hidden group-hover/dropdown:h-[176px] flex flex-col text-sm transition-[height] duration-300`}
        >
          <Link
            className={`hover:bg-[#FF8B13] px-14 py-3 ${
              path.startsWith("/unit") ? "bg-[#FF8B13]" : ""
            }`}
            href="/units"
          >
            Units
          </Link>
          <Link
            className={`hover:bg-[#FF8B13] px-14 py-3 ${
              path.startsWith("/module") ? "bg-[#FF8B13]" : ""
            }`}
            href="/modules"
          >
            Modules
          </Link>
          <Link
            className={`hover:bg-[#FF8B13] px-14 py-3 ${
              path.startsWith("/activitie") ? "bg-[#FF8B13]" : ""
            }`}
            href="/activities"
          >
            Activities
          </Link>
          <Link
            className={`hover:bg-[#FF8B13] px-14 py-3 ${
              path.startsWith("/feedback") ? "bg-[#FF8B13]" : ""
            }`}
            href="/feedback"
          >
            Feedback
          </Link>
        </div>
      </div>
      <Link
        className={`hover:bg-[#FF8B13] px-10 py-4 ${
          path.startsWith("/curriculum") ? "bg-[#FF8B13]" : ""
        }`}
        href="/curriculum"
      >
        Curriculum
      </Link>
      <Link
        className={`hover:bg-[#FF8B13] px-10 py-4 ${
          path.startsWith("/student") ? "bg-[#FF8B13]" : ""
        }`}
        href="/student"
      >
        Student
      </Link>
      <Link
        className={`hover:bg-[#FF8B13] px-10 py-4 ${
          path.startsWith("/parent") ? "bg-[#FF8B13]" : ""
        }`}
        href="/parent"
      >
        Parent
      </Link>
      <Link
        className={`hover:bg-[#FF8B13] px-10 py-4 ${
          path.startsWith("/counsellor") ? "bg-[#FF8B13]" : ""
        }`}
        href="/counsellor"
      >
        Counsellor
      </Link>
      <Link
        className={`hover:bg-[#FF8B13] px-10 py-4 ${
          path.startsWith("/school") ? "bg-[#FF8B13]" : ""
        }`}
        href="/school"
      >
        Schools
      </Link>
      <Link
        className={`hover:bg-[#FF8B13] px-10 py-4 ${
          path.startsWith("/announcements") ? "bg-[#FF8B13]" : ""
        }`}
        href="/announcements"
      >
        Announcements
      </Link>
    </div>
  );
};

export default SideMenu;
