"use client";
import React, { useState, useRef, useEffect } from "react";

const Select = ({ name, value, options, action, register }) => {
  //console.log(initial);
  const columnSelectRef = useRef();
  const [active, setActive] = useState(false);
  useEffect(() => {
    //console.log("rerender");
    const handler = (e) => {
      if (!columnSelectRef.current?.contains(e.target)) setActive(false);
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <div ref={columnSelectRef} className="w-44 relative">
      <div
        onClick={() => {
          setActive((pre) => !pre);
        }}
        className={`${
          active ? "activeArrow " : ""
        } selectAfter  relative shadow-sm px-6 py-3 rounded-xl cursor-pointer w-44"
     `}
      >
        {value}
      </div>
      <ul
        className={`absolute bg-white mt-1 shadow-md rounded-lg w-44 overflow-hidden ${
          active ? " activeSelect max-h-30 " : "h-0"
        }`}
      >
        {options.map((option, index) => (
          <li key={index} className={` flex  `}>
            <input
              className=" appearance-none"
              type="radio"
              id={option}
              value={option}
              onClick={() => action(option)}
              {...register(name)}
              checked={value === option}
              required
            />
            <label
              className={`${
                value === option ? "bg-[#FF8B13]" : ""
              } hover:bg-[#FF8B13] rounded-lg w-44 px-6 py-[10px]  cursor-pointer`}
              htmlFor={option}
            >
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
