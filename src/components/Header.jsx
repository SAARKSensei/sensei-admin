"use client";
import Image from "next/image";
import { Bell } from "lucide-react";
import logo from "@/assets/logo.svg?url";
import photoicon from "@/assets/photoicon.svg?url";

export default function AdminHeader() {
  return (
    <header className="w-full h-[68px] bg-[#2C3D68] shadow-md  
                       flex items-center justify-between px-20">
      
      {/* ---- Left Logo ---- */}
      <div className="flex flex-col items-center">
        <div className="relative w-[110px] h-[42px]">
          {/* Replace this with your real SVG */}
          <Image
            src={logo}
            alt="Sensei Logo"
            fill
            className="object-contain"
          />
        </div>

        <p className="text-white text-[8px] uppercase tracking-widest mt-[-4px]">
          Life-Skills Education
        </p>
      </div>

      {/* ---- Right Section (Bell + Avatar) ---- */}
      <div className="flex items-center gap-6">
        
        {/* Notification Bell */}
        <div className="relative">
          <Bell className="text-white" size={32} />

          {/* Orange Badge */}
          <span className="absolute -top-1.5 -right-1 bg-[#FF8B13] text-white 
                           text-[10px] font-bold rounded-full w-5 h-5 flex 
                           items-center justify-center">
            9+
          </span>
        </div>

        {/* User Avatar */}
        <div className="relative w-[44px] h-[44px]">
          <Image
            src={photoicon}
            alt="User"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
