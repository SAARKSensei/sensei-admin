"use client";
import React, { useEffect, useState } from "react";
import { AddParent } from "../app/actions";
import { useForm } from "react-hook-form";

const AddSchoolForm = ({ data }) => {
  const [maritalStatus, setMaritalStatus] = useState("Married");
  const {
    register,
    reset,
    handleSubmit,

    formState: { isSubmitSuccessful, errors, isSubmitting },
  } = useForm();
  useEffect(() => {
    if (!data) return;
    const SchoolData = {
      SchoolId: data?.ParenId ?? "",
      MaritalStatus: data?.MartialStatus ?? "",
      FatherName: data?.SchoolName ?? "",
      FatherPhone: data?.PhoneNo ?? "",
      FatherEmail: data?.EmailId ?? "",
      FatherOccupation: data?.Occupation ?? "",
      isFatherWorking: data?.Working ?? "",
      FatherDob: data?.SchoolDob ?? "",
      MotherName: data?.SchoolName ?? "",
      MotherPhone: data?.PhoneNo ?? "",
      MotherEmail: data?.EmailId ?? "",
      MotherOccupation: data?.Occupation ?? "",
      isMotherWorking: data?.Working ?? "",
      MotherDob: data?.SchoolDob ?? "",
      SchoolName: data?.SchoolName ?? "",
      SchoolPhone: data?.PhoneNo ?? "",
      SchoolEmail: data?.EmailId ?? "",
      SchoolOccupation: data?.Occupation ?? "",
      isSchoolWorking: data?.Working ?? "",
      SchoolDob: data?.FatherDob ?? "",
    };
    console.log(SchoolData);
    reset(SchoolData);
  }, [data, reset]);
  const maritalStatusChangeHandler = async (value) => {
    setMaritalStatus(value);
  };
  const submitHandler = async (formData) => {
    const res = await AddParent(formData);
    console.log(res);

    if (isSubmitSuccessful) reset();
  };
  useEffect(() => {
    console.log(isSubmitting);

    if (isSubmitSuccessful) {
      console.log("School Added Successfully");
    }
  }, [isSubmitting, isSubmitSuccessful]);
  return (
    <>
      <form
        className="flex p-10 flex-wrap gap-8  max-h-[calc(100vh-130px)] overflow-auto w-full "
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="basis-full flex flex-wrap gap-5">
          <div className="p-4 px-6 flex-grow max-w-[300px] min-w-fit custome-box-shadow rounded-lg">
            <p className=" font-bold text-[#2C3D68] text-base">
              Total Strength
            </p>
            <h2 className=" text-[54px] text-[#FF8B13]">0000</h2>
          </div>
          <div className="p-4 px-6 flex-grow max-w-[300px] min-w-fit custome-box-shadow rounded-lg">
            <p className=" font-bold text-[#2C3D68] text-base">
              Onboarded Student
            </p>
            <h2 className=" text-[54px] text-[#FF8B13]">000</h2>
          </div>
          <div className="p-4 px-6 flex-grow max-w-[300px] min-w-fit custome-box-shadow rounded-lg">
            <p className=" font-bold text-[#2C3D68] text-base">
              Student Conv. Rate
            </p>
            <h2 className=" text-[54px] text-[#FF8B13]">00%</h2>
          </div>
          <div className="p-4 px-6 flex-grow max-w-[300px] min-w-fit custome-box-shadow rounded-lg">
            <p className=" font-bold text-[#2C3D68] text-base">Compensation</p>
            <h2 className=" text-[54px] text-[#FF8B13]">00%</h2>
          </div>
        </div>
        <label className="basis-full pt-5 text-sm" htmlFor="SchoolId">
          <p>School ID :</p>
          <input
            required
            className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
            type="text"
            placeholder="Type here"
            {...register("SchoolId")}
            name="SchoolId"
          />
        </label>
        <label className="pt-5 text-sm" htmlFor={`SchoolName`}>
          <p>School Name :</p>
          <input
            className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
            type="text"
            placeholder="Type here"
            {...register(`SchoolName`)}
            name={`SchoolName`}
            required
          />
        </label>{" "}
        <label className=" pb-[10px] pt-5 text-sm" htmlFor={`${"A"}Email`}>
          <p>Email ID :</p>
          <input
            required
            className=" mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
            type="email"
            placeholder="Type here"
            {...register(`Email`)}
            name={`Email`}
          />
        </label>
        <label className=" pb-[10px] pt-5 text-sm" htmlFor={`${"A"}Phone`}>
          <p>Phone Number 1 :</p>
          <input
            required
            className=" mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
            type="text"
            placeholder="Type here"
            {...register(`PhoneNo`)}
            name={`PhoneNo`}
          />
        </label>{" "}
        <label className=" pb-[10px] pt-5 text-sm" htmlFor={`${"A"}Phone`}>
          <p>Phone Number 2 :</p>
          <input
            className=" mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
            type="text"
            placeholder="Type here"
            {...register(`PhoneNo2`)}
            name={`PhoneNo2`}
          />
        </label>
        <label className="pt-5 text-sm w-[300px]" htmlFor={`Address`}>
          <p>Addess Line 1 :</p>
          <input
            className="mt-2 w-full drop-shadow px-6 py-3 rounded-lg outline-none"
            type="text"
            placeholder="Type here"
            {...register(`Address`)}
            name={`Address`}
            required
          />
        </label>
        <label className="pt-5 text-sm w-[300px]" htmlFor={`Address2`}>
          <p>Addess Line 2 :</p>
          <input
            className="mt-2 w-full drop-shadow px-6 py-3 rounded-lg outline-none"
            type="text"
            placeholder="Type here"
            {...register(`Address2`)}
            name={`Address2`}
            required
          />
        </label>
        <label className="pt-5 text-sm" htmlFor={`City`}>
          <p>City :</p>
          <input
            className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
            type="text"
            placeholder="Type here"
            {...register(`City`)}
            name={`City`}
            required
          />
        </label>
        <label className="pt-5 text-sm" htmlFor={`Pincode`}>
          <p>Pincode :</p>
          <input
            className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
            type="text"
            placeholder="Type here"
            {...register(`Pincode`)}
            name={`Pincode`}
            required
          />
        </label>
        <label className="pt-5 text-sm" htmlFor={`State`}>
          <p>State :</p>
          <input
            className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
            type="text"
            placeholder="Type here"
            {...register(`State`)}
            name={`State`}
            required
          />
        </label>
        <label className="pt-5 text-sm" htmlFor={`Country`}>
          <p>Country :</p>
          <input
            className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
            type="text"
            placeholder="Type here"
            {...register(`Country`)}
            name={`Country`}
            required
          />
        </label>
        <label className="pt-5 text-sm" htmlFor={`SchoolAffiliaaion`}>
          <p>School Afiliation :</p>
          <input
            className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
            type="text"
            placeholder="Type here"
            {...register(`SchoolAffiliaaion`)}
            name={`SchoolAffiliaaion`}
            required
          />
        </label>
        <label className="pt-5 text-sm" htmlFor={`Type`}>
          <p>Type :</p>
          <input
            className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
            type="text"
            placeholder="Type here"
            {...register(`Type`)}
            name={`Type`}
            required
          />
        </label>
        <label className="pt-5 text-sm" htmlFor={`Grade`}>
          <p>Grade :</p>
          <input
            className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
            type="text"
            placeholder="Type here"
            {...register(`Grade`)}
            name={`Grade`}
            required
          />
        </label>
        <label className="pt-5 text-sm" htmlFor={`StudentRatio`}>
          <p>Student Ratio :</p>
          <input
            className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
            type="text"
            placeholder="Type here"
            {...register(`StudentRatio`)}
            name={`StudentRatio`}
            required
          />
        </label>
        <div className="flex mt-10 flex-row-reverse w-full">
          <button
            className="button--submit"
            type="submit"
            disabled={isSubmitting}
          >
            Save
          </button>
        </div>{" "}
      </form>
    </>
  );
};
export default AddSchoolForm;
