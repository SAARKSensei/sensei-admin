"use client";
import React, { useEffect, useState } from "react";
import AddParentSubmitButton from "./AddParentSubmitButton";
import Select from "./Select";
import { AddParent } from "../app/actions";
import { useForm } from "react-hook-form";
const AddParentForm = ({ data }) => {
  const [maritalStatus, setMaritalStatus] = useState("Married");
  const {
    register,
    reset,
    handleSubmit,

    formState: { isSubmitSuccessful, errors, isSubmitting },
  } = useForm();
  useEffect(() => {
    if (!data) return;
    const parentData = {
      ParentId: data?.ParenId ?? "",
      MaritalStatus: data?.MartialStatus ?? "",
      FatherName: data?.ParentName ?? "",
      FatherPhone: data?.PhoneNo ?? "",
      FatherEmail: data?.EmailId ?? "",
      FatherOccupation: data?.Occupation ?? "",
      isFatherWorking: data?.Working ?? "",
      FatherDob: data?.ParentDob ?? "",
      MotherName: data?.ParentName ?? "",
      MotherPhone: data?.PhoneNo ?? "",
      MotherEmail: data?.EmailId ?? "",
      MotherOccupation: data?.Occupation ?? "",
      isMotherWorking: data?.Working ?? "",
      MotherDob: data?.ParentDob ?? "",
      ParentName: data?.ParentName ?? "",
      ParentPhone: data?.PhoneNo ?? "",
      ParentEmail: data?.EmailId ?? "",
      ParentOccupation: data?.Occupation ?? "",
      isParentWorking: data?.Working ?? "",
      ParentDob: data?.FatherDob ?? "",
    };
    console.log(parentData);
    reset(parentData);
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
      console.log("Parent Added Successfully");
    }
  }, [isSubmitting, isSubmitSuccessful]);
  return (
    <>
      <form
        className="flex p-10 flex-wrap gap-8  max-h-[calc(100vh-130px)] overflow-auto w-full "
        onSubmit={handleSubmit(submitHandler)}
        //action={submitHandler}
      >
        <div className="flex  flex-col">
          <label className=" pb-[10px] pt-5 text-sm" htmlFor="ParentId">
            Parent ID
          </label>{" "}
          <input
            required
            className=" shadow px-6 py-3 rounded-xl outline-none"
            type="text"
            placeholder="Type here"
            {...register("ParentId")}
            name="ParentId"
          />
          <label className=" pb-[10px] pt-5 text-sm" htmlFor="maritalStatus">
            Marital Status
          </label>{" "}
          <Select
            name={"MaritalStatus"}
            initial={maritalStatus}
            register={register}
            action={maritalStatusChangeHandler}
            options={["Married", "Single", "Separated", "Divorced"]}
          />
        </div>
        <div className="flex  flex-wrap justify-between w-full gap-5  min-[1200px]:w-2/3">
          {maritalStatus === "Single" ? (
            <ParentForm key={1} register={register} parentName="Parent" />
          ) : (
            <>
              <ParentForm key={2} register={register} parentName="Father" />
              <ParentForm key={3} register={register} parentName="Mother" />
            </>
          )}
        </div>
        <AddParentSubmitButton isSubmitting={isSubmitting} />
      </form>
    </>
  );
};
const ParentForm = ({ parentName, register, control }) => {
  return (
    <div className="flex  flex-col ">
      <label className=" pb-[10px] pt-5 text-sm" htmlFor={`${parentName}Name`}>
        {parentName}&apos;s Name
      </label>{" "}
      <input
        required
        className=" shadow px-6 py-3 rounded-xl outline-none"
        type="text"
        placeholder="Type here"
        {...register(`${parentName}Name`)}
        name={`${parentName}Name`}
      />
      <label className=" pb-[10px] pt-5 text-sm" htmlFor={`${parentName}Phone`}>
        {parentName}&apos;s Phone No.
      </label>{" "}
      <input
        required
        className=" shadow px-6 py-3 rounded-xl outline-none"
        type="text"
        placeholder="Type here"
        {...register(`${parentName}Phone`)}
        name={`${parentName}Phone`}
      />
      <label className=" pb-[10px] pt-5 text-sm" htmlFor={`${parentName}Email`}>
        {parentName}&apos;s Email ID
      </label>{" "}
      <input
        required
        className=" shadow px-6 py-3 rounded-xl outline-none"
        type="email"
        placeholder="Type here"
        {...register(`${parentName}Email`)}
        name={`${parentName}Email`}
      />
      <div className="flex max-w-[300px] gap-2">
        <div className="flex flex-col">
          <label
            className=" pb-[10px] pt-5 text-sm"
            htmlFor={`${parentName}Occupation`}
          >
            {parentName}&apos;s Occupation
          </label>{" "}
          <input
            required
            className="max-w-[220px] px-6 py-3 rounded-xl outline-none"
            type="text"
            placeholder="Type here"
            {...register(`${parentName}Occupation`)}
            name={`${parentName}Occupation`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            className=" pb-[10px] pt-5 text-sm"
            htmlFor={`is${parentName}Working`}
          >
            Working
          </label>{" "}
          <label className="switch mt-[5px]">
            <input
              className=" px-6 py-3 rounded-xl outline-none"
              type="checkbox"
              {...register(`is${parentName}Working`)}
              name={`is${parentName}Working`}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <label className=" pb-[10px] pt-5 text-sm" htmlFor={`${parentName}Dob`}>
        {parentName}&apos;s Date of Birth
      </label>{" "}
      <input
        required
        className=" shadow max-w-fit  px-6 py-3 rounded-xl outline-none"
        type="date"
        {...register(`${parentName}Dob`)}
        name={`${parentName}Dob`}
      />
    </div>
  );
};
export default AddParentForm;
