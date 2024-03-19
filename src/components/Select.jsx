"use client";
import React, { useState } from "react";

const Select = ({ name, initial, options, action, register }) => {
  //console.log(initial);
  const [active, setActive] = useState(false);
  const changeHandler = (value) => {
    //console.log(value);
    setActive((pre) => !pre);
    if (initial !== value) action(value);
  };
  return (
    <div className="w-44 relative">
      <div
        onClick={() => {
          setActive((pre) => !pre);
        }}
        className={`${
          active ? "activeArrow " : ""
        } selectAfter  relative shadow-sm px-6 py-3 rounded-xl cursor-pointer w-44"
     `}
      >
        {initial}
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
              onClick={() => changeHandler(option)}
              value={option}
              checked={initial === option}
              {...register(name, { required: true })}
            />
            <label
              className={`${
                initial === option ? "bg-[#FF8B13]" : ""
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
