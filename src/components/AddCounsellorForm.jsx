"use client";
import React, { useEffect, useState } from "react";
import Select from "./Select";
import { AddCounsellor } from "../app/actions";
import { useForm } from "react-hook-form";
import { FaP, FaPlus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import Image from "next/image";
const AddCounsellorForm = ({ data }) => {
  const [maritalStatus, setMaritalStatus] = useState("Married");
  const {
    register,
    reset,
    handleSubmit,

    formState: { isSubmitSuccessful, errors, isSubmitting },
  } = useForm();
  useEffect(() => {
    if (!data) return;
    const CounsellorData = {
      CounsellorId: data?.ParenId ?? "",
      MaritalStatus: data?.MartialStatus ?? "",
      FatherName: data?.CounsellorName ?? "",
      FatherPhone: data?.PhoneNo ?? "",
      FatherEmail: data?.EmailId ?? "",
      FatherOccupation: data?.Occupation ?? "",
      isFatherWorking: data?.Working ?? "",
      FatherDob: data?.CounsellorDob ?? "",
      MotherName: data?.CounsellorName ?? "",
      MotherPhone: data?.PhoneNo ?? "",
      MotherEmail: data?.EmailId ?? "",
      MotherOccupation: data?.Occupation ?? "",
      isMotherWorking: data?.Working ?? "",
      MotherDob: data?.CounsellorDob ?? "",
      CounsellorName: data?.CounsellorName ?? "",
      CounsellorPhone: data?.PhoneNo ?? "",
      CounsellorEmail: data?.EmailId ?? "",
      CounsellorOccupation: data?.Occupation ?? "",
      isCounsellorWorking: data?.Working ?? "",
      CounsellorDob: data?.FatherDob ?? "",
    };
    console.log(CounsellorData);
    reset(CounsellorData);
  }, [data, reset]);
  const maritalStatusChangeHandler = async (value) => {
    setMaritalStatus(value);
  };
  const submitHandler = async (formData) => {
    const res = await AddCounsellor(formData);
    console.log(res);

    if (isSubmitSuccessful) reset();
  };
  useEffect(() => {
    console.log(isSubmitting);

    if (isSubmitSuccessful) {
      console.log("Counsellor Added Successfully");
    }
  }, [isSubmitting, isSubmitSuccessful]);
  return (
    <>
      <form
        className="flex p-10 flex-wrap gap-8  max-h-[calc(100vh-130px)] overflow-auto w-full"
        onSubmit={handleSubmit(submitHandler)}
        //action={submitHandler}
      >
        <div className="flex items-end">
          <ImageUpload register={register} />
          <label className="pt-5 mb-2 text-sm" htmlFor="CounsellorId">
            <p>Counsellor ID :</p>
            <input
              required
              className=" mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
              type="text"
              placeholder="Type here"
              {...register("CounsellorId")}
              name="CounsellorId"
            />
          </label>
        </div>
        <PersonalDetailsForm register={register} />
        <EducationDetailsForm register={register} />
        <WorkDetailsForm register={register} />
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
const ImageUpload = ({ register }) => {
  const [image, setImage] = useState(null);
  function handleImage(e) {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className=" relative h-28 mx-5">
      <label className=" pt-5 text-sm" htmlFor={`ProfileImage`}>
        <FaPlus className="z-10 text-white absolute rounded-full w-7 h-7 bg-[#FF8B13] p-1 text-2xl " />
        <input
          className="hidden"
          type="file"
          {...register(`ProfileImage`)}
          name={`ProfileImage`}
          id="ProfileImage"
          onChange={handleImage}
          accept="image/png, image/jpeg, image/jpg, image/gif"
          required
        />
      </label>
      {image ? (
        <Image
          src={image}
          className=" object-cover w-full h-full drop-shadow bg-white rounded-full"
          fill
          alt="Profile Image"
        />
      ) : (
        <FaUser className="text-[#FF8B13] w-full h-full drop-shadow bg-white rounded-full " />
      )}
    </div>
  );
};
const PersonalDetailsForm = ({ register }) => {
  return (
    <div className="flex  p-6 bg-[#fef3e9] rounded-xl mt-10 flex-wrap gap-8">
      <label className="pt-5 text-sm" htmlFor={`FullName`}>
        <p>Full Name :</p>
        <input
          className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`FullName`)}
          name={`FullName`}
          required
        />
      </label>
      <label className="pt-5 text-sm" htmlFor={`FatherName`}>
        <p>Father Name :</p>
        <input
          className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`FatherName`)}
          name={`FatherName`}
          required
        />
      </label>
      <label className="pt-5 text-sm" htmlFor={`MotherName`}>
        <p>Mother Name :</p>
        <input
          className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`MotherName`)}
          name={`MotherName`}
          required
        />
      </label>{" "}
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
      </label>
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
      <label className=" pb-[10px] pt-5 text-sm" htmlFor={`${"A"}Dob`}>
        <p>Date of Birth :</p>
        <input
          required
          className=" mt-2 drop-shadow max-w-fit  px-6 py-3 rounded-lg outline-none"
          type="date"
          {...register(`${"A"}Dob`)}
          name={`${"A"}Dob`}
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
    </div>
  );
};
const EducationDetailsForm = ({ register }) => {
  return (
    <div className="flex rounded-xl mt-10 p-6 bg-[#fef3e9] flex-wrap gap-8">
      <label className="pt-5 text-sm" htmlFor={`HSCSchoolName`}>
        <p>HSC School Name :</p>
        <input
          className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`HSCSchoolName`)}
          name={`HSCSchoolName`}
          required
        />
      </label>
      <label className="pt-5  w-32 text-sm" htmlFor={`HSCGrade`}>
        <p>HSC (Grade / %) :</p>
        <input
          className="mt-2 drop-shadow  w-full px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`HSCGrade`)}
          name={`HSCGrade`}
          required
        />
      </label>
      <label className="pt-5  w-[150px] text-sm" htmlFor={`HSCYearOfPassing`}>
        <p>HSC Year of Passing :</p>
        <input
          className="mt-2 drop-shadow  w-full px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`HSCYearOfPassing`)}
          name={`HSCYearOfPassing`}
          required
        />
      </label>
      <label className="pt-5 text-sm" htmlFor={`SSCSchoolName`}>
        <p>SSC School Name :</p>
        <input
          className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`SSCSchoolName`)}
          name={`SSCSchoolName`}
          required
        />
      </label>
      <label className="pt-5  w-32 text-sm" htmlFor={`SSCGrade`}>
        <p>SSC (Grade / %) :</p>
        <input
          className="mt-2 drop-shadow  w-full px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`SSCGrade`)}
          name={`SSCGrade`}
          required
        />
      </label>
      <label className="pt-5  w-[150px] text-sm" htmlFor={`SSCYearOfPassing`}>
        <p>SSC Year of Passing :</p>
        <input
          className="mt-2 drop-shadow  w-full px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`SSCYearOfPassing`)}
          name={`SSCYearOfPassing`}
          required
        />
      </label>
      <label className="pt-5 text-sm" htmlFor={`UGCollageName`}>
        <p>UG Collage Name :</p>
        <input
          className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`UGCollageName`)}
          name={`UGCollageName`}
          required
        />
      </label>
      <label className="pt-5 w-32  text-sm" htmlFor={`UGGrade`}>
        <p>UG (Grade / %) :</p>
        <input
          className="mt-2 drop-shadow w-full  px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`UGGrade`)}
          name={`UGGrade`}
          required
        />
      </label>
      <label className="pt-5 w-[150px]  text-sm" htmlFor={`UGYearOfPassing`}>
        <p>UG Year of Passing :</p>
        <input
          className="mt-2 drop-shadow w-full  px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`UGYearOfPassing`)}
          name={`UGYearOfPassing`}
          required
        />
      </label>
      <label className="pt-5 text-sm" htmlFor={`PGCollageName`}>
        <p>PG Collage Name :</p>
        <input
          className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`PGCollageName`)}
          name={`PGCollageName`}
          required
        />
      </label>
      <label className="pt-5 w-32  text-sm" htmlFor={`PGGrade`}>
        <p>PG (Grade / %) :</p>
        <input
          className="mt-2 drop-shadow w-full  px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`PGGrade`)}
          name={`PGGrade`}
          required
        />
      </label>
      <label className="pt-5 w-[150px]  text-sm" htmlFor={`PGYearOfPassing`}>
        <p>PG Year of Passing :</p>
        <input
          className="mt-2 drop-shadow w-full  px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`PGYearOfPassing`)}
          name={`PGYearOfPassing`}
          required
        />
      </label>
    </div>
  );
};
const WorkDetailsForm = ({ register }) => {
  return (
    <div className="flex p-6 rounded-xl bg-[#fef3e9] mt-10 flex-wrap gap-8">
      <label className="pt-5 text-sm" htmlFor={`workExp`}>
        <p>Work Exp. (0 if Fresher) :</p>
        <input
          className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`workExp`)}
          name={`workExp`}
          required
        />
      </label>
      <label className="pt-5 text-sm" htmlFor={`otherCertification`}>
        <p>Other Certification :</p>
        <input
          className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`otherCertification`)}
          name={`otherCertification`}
          required
        />
      </label>
      <label className="pt-5 text-sm" htmlFor={`workPreference`}>
        <p>Willing to work Full/Part Time :</p>
        <input
          className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`workPreference`)}
          name={`workPreference`}
          required
        />
      </label>
      <label className="pt-5 text-sm" htmlFor={`partTimeWorkHours`}>
        <p>if Part Time mention work hours (min 3hrs) :</p>
        <input
          className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`partTimeWorkHours`)}
          name={`partTimeWorkHours`}
        />
      </label>
      <label className="pt-5 text-sm" htmlFor={`takeSession`}>
        <p>Wiling to take 1-1 session :</p>
        <input
          className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`takeSession`)}
          name={`takeSession`}
        />
      </label>
      <label className="pt-5 text-sm" htmlFor={`sessionCharges`}>
        <p>1-1 session if yes, Mention Charges(Rs./Hrs) :</p>
        <input
          className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`sessionCharges`)}
          name={`sessionCharges`}
        />
      </label>
    </div>
  );
};
export default AddCounsellorForm;
