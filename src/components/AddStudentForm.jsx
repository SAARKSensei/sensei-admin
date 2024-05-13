"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import Image from "next/image";
const AddStudentForm = ({ data }) => {
  const [maritalStatus, setMaritalStatus] = useState("Married");
  const {
    register,
    reset,
    handleSubmit,

    formState: { isSubmitSuccessful, errors, isSubmitting },
  } = useForm();
  useEffect(() => {
    if (!data) return;
    const StudentData = {
      StudentId: data?.ParenId ?? "",
      MaritalStatus: data?.MartialStatus ?? "",
      FatherName: data?.StudentName ?? "",
      FatherPhone: data?.PhoneNo ?? "",
      FatherEmail: data?.EmailId ?? "",
      FatherOccupation: data?.Occupation ?? "",
      isFatherWorking: data?.Working ?? "",
      FatherDob: data?.StudentDob ?? "",
      MotherName: data?.StudentName ?? "",
      MotherPhone: data?.PhoneNo ?? "",
      MotherEmail: data?.EmailId ?? "",
      MotherOccupation: data?.Occupation ?? "",
      isMotherWorking: data?.Working ?? "",
      MotherDob: data?.StudentDob ?? "",
      StudentName: data?.StudentName ?? "",
      StudentPhone: data?.PhoneNo ?? "",
      StudentEmail: data?.EmailId ?? "",
      StudentOccupation: data?.Occupation ?? "",
      isStudentWorking: data?.Working ?? "",
      StudentDob: data?.FatherDob ?? "",
    };
    console.log(StudentData);
    reset(StudentData);
  }, [data, reset]);
  const maritalStatusChangeHandler = async (value) => {
    setMaritalStatus(value);
  };
  const submitHandler = async (formData) => {
    // const res = await AddStudent(formData);
    // console.log(res);

    if (isSubmitSuccessful) reset();
  };
  useEffect(() => {
    console.log(isSubmitting);

    if (isSubmitSuccessful) {
      console.log("Student Added Successfully");
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
          <label className="pt-5 mb-2 text-sm" htmlFor="StudentId">
            <p>Student ID :</p>
            <input
              required
              className=" mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
              type="text"
              placeholder="Type here"
              {...register("StudentId")}
              name="StudentId"
            />
          </label>
        </div>
        <PersonalDetailsForm register={register} />
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
    <div className="flex  p-6  rounded-xl flex-wrap gap-8">
      <label className="pt-5 text-sm" htmlFor={`FirstName`}>
        <p>First Name :</p>
        <input
          className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`FirstName`)}
          name={`FirstName`}
          required
        />
      </label>
      <label className="pt-5 text-sm" htmlFor={`MiddleName`}>
        <p>Middle Name :</p>
        <input
          className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`MiddleName`)}
          name={`MiddleName`}
          required
        />
      </label>
      <label className="pt-5 text-sm" htmlFor={`LastName`}>
        <p>Last Name :</p>
        <input
          className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`LastName`)}
          name={`LastName`}
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
      <label className="pt-5 text-sm" htmlFor={`BloodGroup`}>
        <p>Blood Group :</p>
        <input
          className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`BloodGroup`)}
          name={`BloodGroup`}
          required
        />
      </label>
      <div>
        <p className=" pb-[10px] pt-5 text-sm" htmlFor={`CounsellorVisited`}>
          Visited Any Counsellor :
        </p>{" "}
        <label className="switch mt-[5px]">
          <input
            className=" px-6 py-3 rounded-xl outline-none"
            type="checkbox"
            {...register(`CounsellorVisited`)}
            name={`CounsellorVisited`}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div>
        <p className=" pb-[10px] pt-5 text-sm" htmlFor={`AnyMedicalHistory`}>
          Any Medical History :
        </p>{" "}
        <label className="switch mt-[5px]">
          <input
            className=" px-6 py-3 rounded-xl outline-none"
            type="checkbox"
            {...register(`AnyMedicalHistory`)}
            name={`AnyMedicalHistory`}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <label className="pt-5 text-sm" htmlFor={`BrifMedicalHistory`}>
        <p>if any meducal history? Please brif :</p>
        <input
          className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          {...register(`BrifMedicalHistory`)}
          name={`BrifMedicalHistory`}
          required
        />
      </label>
    </div>
  );
};

export default AddStudentForm;
