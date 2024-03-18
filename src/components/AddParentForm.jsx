import React from "react";
import AddParentSubmitButton from "./AddParentSubmitButton";
const AddParentForm = () => {
  async function AddParent(formData) {
    "use server";

    const rawFormData = {
      parentId: formData.get("parentId"),
      maritalStatus: formData.get("maritalStatus"),
      motherName: formData.get("motherName"),
      motherPhone: formData.get("motherPhone"),
      motherEmail: formData.get("motherEmail"),
      motherOccupation: formData.get("motherOccupation"),
      motherDob: formData.get("motherDob"),
      isMotherWorking: formData.get("isMotherWorking"),
      fatherName: formData.get("fatherName"),
      fatherPhone: formData.get("fatherPhone"),
      fatherEmail: formData.get("fatherEmail"),
      fatherOccupation: formData.get("fatherOccupation"),
      fatherDob: formData.get("fatherDob"),
      isFatherWorking: formData.get("isFatherWorking"),
    };
    console.log(rawFormData);
  }
  return (
    <>
      <form
        className="mt-8 flex flex-wrap justify-between gap-4 w-full "
        action={AddParent}
      >
        <div className="flex  flex-col">
          <label className=" pb-[10px] pt-5 text-sm" htmlFor="parentId">
            Parent ID
          </label>{" "}
          <input
            className=" shadow-sm px-6 py-3 rounded-xl outline-none"
            type="text"
            placeholder="Type here"
            id="parentId"
            name="parentId"
          />
          <label className=" pb-[10px] pt-5 text-sm" htmlFor="maritalStatus">
            Marital Status
          </label>{" "}
          <select
            className="outline-none max-w-fit px-6 py-3 rounded-xl"
            id="maritalStatus"
            name="maritalStatus"
          >
            <option className=" p-[10px]" value="">
              Select
            </option>
            <option className=" p-[10px]" value="married">
              Married
            </option>
            <option className=" p-[10px]" value="single">
              Single
            </option>
            <option className=" p-[10px]" value="separated">
              Separated
            </option>
            <option className=" p-[10px]" value="divorced">
              Divorced
            </option>
          </select>
        </div>
        <div className="flex  flex-wrap justify-between w-full gap-5  min-[1200px]:w-2/3">
          <div className="flex  flex-col ">
            <label className=" pb-[10px] pt-5 text-sm" htmlFor="motherName">
              Mother&apos;s Name
            </label>{" "}
            <input
              className=" shadow-sm px-6 py-3 rounded-xl outline-none"
              type="text"
              placeholder="Type here"
              id="motherName"
              name="motherName"
            />
            <label className=" pb-[10px] pt-5 text-sm" htmlFor="motherPhone">
              Mother&apos;s Phone No.
            </label>{" "}
            <input
              className=" shadow-sm px-6 py-3 rounded-xl outline-none"
              type="text"
              placeholder="Type here"
              id="motherPhone"
              name="motherPhone"
            />
            <label className=" pb-[10px] pt-5 text-sm" htmlFor="motherEmail">
              Mother&apos;s Email ID
            </label>{" "}
            <input
              className=" shadow-sm px-6 py-3 rounded-xl outline-none"
              type="email"
              placeholder="Type here"
              id="motherEmail"
              name="motherEmail"
            />
            <div className="flex max-w-[300px] gap-2">
              <div className="flex flex-col">
                <label
                  className=" pb-[10px] pt-5 text-sm"
                  htmlFor="fatherOccupation"
                >
                  Mother&apos;s Occupation
                </label>{" "}
                <input
                  className="max-w-[220px] px-6 py-3 rounded-xl outline-none"
                  type="text"
                  placeholder="Type here"
                  id="motherOccupation"
                  name="motherOccupation"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className=" pb-[10px] pt-5 text-sm"
                  htmlFor="isFatherWorking"
                >
                  Working
                </label>{" "}
                <label className="switch mt-[5px]">
                  <input
                    className=" px-6 py-3 rounded-xl outline-none"
                    type="checkbox"
                    id="isMotherWorking"
                    name="isMotherWorking"
                  />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <label className=" pb-[10px] pt-5 text-sm" htmlFor="motherDob">
              Mother&apos;s Date of Birth
            </label>{" "}
            <input
              className=" shadow-sm max-w-fit  px-6 py-3 rounded-xl outline-none"
              type="date"
              id="motherDob"
              name="motherDob"
              required
            />
          </div>
          <div className="flex  flex-col">
            <label className=" pb-[10px] pt-5 text-sm" htmlFor="fatherName">
              Father&apos;s Name
            </label>{" "}
            <input
              className=" shadow-sm px-6 py-3 rounded-xl outline-none"
              type="text"
              placeholder="Type here"
              id="fatherName"
              name="fatherName"
            />
            <label className=" pb-[10px] pt-5 text-sm" htmlFor="fatherPhone">
              Father&apos;s Phone No.
            </label>{" "}
            <input
              className=" shadow-sm px-6 py-3 rounded-xl outline-none"
              type="text"
              placeholder="Type here"
              id="fatherPhone"
              name="fatherPhone"
            />
            <label className=" pb-[10px] pt-5 text-sm" htmlFor="fatherEmail">
              Father&apos;s Email ID
            </label>{" "}
            <input
              className=" shadow-sm px-6 py-3 rounded-xl outline-none"
              type="email"
              placeholder="Type here"
              id="fatherEmail"
              name="fatherEmail"
            />
            <div className="flex max-w-[300px] gap-2">
              <div className="flex flex-col">
                <label
                  className=" pb-[10px] pt-5 text-sm"
                  htmlFor="fatherOccupation"
                >
                  Father&apos;s Occupation
                </label>{" "}
                <input
                  className=" max-w-[220px] px-6 py-3 rounded-xl outline-none"
                  type="text"
                  placeholder="Type here"
                  id="fatherOccupation"
                  name="fatherOccupation"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className=" pb-[10px] pt-5 text-sm"
                  htmlFor="isFatherWorking"
                >
                  Working
                </label>{" "}
                <label className="switch mt-[5px]">
                  <input
                    className=" px-6 py-3 rounded-xl outline-none"
                    type="checkbox"
                    id="isFatherWorking"
                    name="isFatherWorking"
                  />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <label className=" pb-[10px] pt-5 text-sm" htmlFor="fatherDob">
              Father&apos;s Date of Birth
            </label>{" "}
            <input
              className=" shadow-sm max-w-fit  px-6 py-3 rounded-xl outline-none"
              type="date"
              id="fatherDob"
              name="fatherDob"
              required
            />
          </div>
        </div>
        <AddParentSubmitButton />
      </form>
    </>
  );
};

export default AddParentForm;
