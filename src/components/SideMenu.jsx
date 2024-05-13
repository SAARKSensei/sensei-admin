"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
const SideMenu = () => {
  const path = usePathname();
  const dropdown = path.startsWith("/learning");
  return (
    <div className="pt-7 flex text-base text-white bg-[#2C3D68] flex-col ">
      <Link
        className={`flex items-center justify-between  hover:bg-[#FF8B13] px-10 py-4 ${
          path === "/" ? "bg-[#FF8B13]" : ""
        }`}
        href="/"
      >
        Dashboard
      </Link>
      <div className="group/dropdown">
        <div
          className={`flex whitespace-nowrap gap-2 items-center justify-between group-hover/dropdown:bg-[#FF8B13] px-10 py-4 ${
            path.startsWith("/learning") ? "bg-[#FF8B13]" : ""
          }`}
          // href={"/learnings"}
        >
          Learning Modules{" "}
          <IoIosArrowDown
            className={`${
              dropdown ? "rotate-180" : ""
            } group-hover/dropdown:rotate-180 transition-all`}
          />
        </div>
        <div
          className={`${
            dropdown ? "h-[220px]" : ""
          } h-0 overflow-hidden group-hover/dropdown:h-[220px] flex flex-col text-sm transition-[height] duration-300`}
        >
          <Link
            className={`hover:text-[#FF8B13] px-14 py-3 ${
              path.startsWith("/learnings/subject") ? "text-[#FF8B13]" : ""
            }`}
            href="/learnings/subject"
          >
            Subjects
          </Link>
          <Link
            className={`hover:text-[#FF8B13] px-14 py-3 ${
              path.startsWith("/learnings/module") ? "text-[#FF8B13]" : ""
            }`}
            href="/learnings/module"
          >
            Modules
          </Link>
          <Link
            className={`hover:text-[#FF8B13] px-14 py-3 ${
              path.startsWith("/learnings/submodule") ? "text-[#FF8B13]" : ""
            }`}
            href="/learnings/submodule"
          >
            Sub Modules
          </Link>
          <Link
            className={`hover:text-[#FF8B13] px-14 py-3 ${
              path.startsWith("/learnings/activitie") ? "text-[#FF8B13]" : ""
            }`}
            href="/learnings/activitie"
          >
            Activities
          </Link>
          <Link
            className={`hover:text-[#FF8B13] px-14 py-3 ${
              path.startsWith("/learnings/feedback") ? "text-[#FF8B13]" : ""
            }`}
            href="/learnings/feedback"
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
