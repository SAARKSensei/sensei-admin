"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { select, unselect } from "@/lib/features/subject/subjectSlice";
import { useRouter } from "next/navigation";
const Subject = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const rowSelection = useSelector((state) => state.subject.rowSelection);
  const hadleClick = () => {
    if (rowSelection[data.id]) dispatch(unselect(data.id));
    else dispatch(select(data.id));
  };
  return (
    <div className="flex flex-col gap-4 p-6 rounded-lg w-fit font-Nunito border border-[#F58720]">
      <div onClick={hadleClick} className="flex items-center gap-2">
        <span
          className={`border outline outline-1 outline-[#F58720] ${
            rowSelection[data.id] ? "bg-gradient-radial" : ""
          } from-blue-700 to-blue-400 p-2  rounded-full w-[30px] h-[30px]`}
        />
        <h1 className=" text-2xl font-semibold ">{data.name}</h1>
      </div>
      <div className="flex gap-4 text-base">
        <div className="flex flex-col gap-2">
          <h1 className="text-gray-600">Modules</h1>
          <h1 className="text-lg font-medium text-[#F58720]">00</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-gray-600">Sub-Modules</h1>
          <h1 className="text-lg font-medium text-[#F58720]">00</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-gray-600">Activities</h1>
          <h1 className="text-lg font-medium text-[#F58720]">00</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-gray-600">Time</h1>
          <h1 className="text-lg font-medium text-[#F58720]">3 Mounths</h1>
        </div>
      </div>
      <button
        onClick={() => router.push("/lernings/subject/" + data.id)}
        className="w-fit text-[#F58720] text-base"
      >
        View details&nbsp;&rarr;
      </button>
    </div>
  );
};

export default Subject;
