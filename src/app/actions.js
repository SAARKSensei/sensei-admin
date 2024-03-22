"use server";
import data from "@/MOCK_DATA.json";
export const AddParent = async (Data) => {
  try {
    await new Promise((resolve) => {
      setTimeout(() => {
        const addedData = {
          parentId: formData.ParentId,
          parentName:
            formData.MaritalStatus === "Single"
              ? +formData.ParentName
              : +formData.FatherName + "/" + formData.MotherName,
          phoneNo:
            formData.MaritalStatus === "Single"
              ? +formData.ParentPhone
              : +formData.FatherPhone + "/" + formData.MotherPhone,
          emailId:
            formData.MaritalStatus === "Single"
              ? +formData.ParentEmail
              : +formData.FatherEmail + "/" + formData.MotherEmail,
          working:
            formData.MaritalStatus === "Single"
              ? +formData.isParentWorking
              : +formData.isFatherWorking + "/" + formData.isMotherWorking,
          occupation:
            formData.MaritalStatus === "Single"
              ? +formData.ParentOccupation
              : +formData.FatherOccupation + "/" + formData.MotherOccupation,
          maritalStatus: formData.MaritalStatus,
        };
        console.log(addedData);
        resolve("Parent Added Successfully");
      }, 2000);
    });
  } catch (err) {
    console.log(err);
  }
};
export const UpdateParent = async ({ Data, role }) => {
  try {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(Data, role);
        resolve(Data);
      }, 2000);
    });
  } catch (err) {
    console.log(err);
  }
};
export const DeleteParents = async ({ Data, role }) => {
  try {
    await new Promise((resolve) => {
      // const updatedData = data.filter((item) => !Data.includes(item.id));
      // console.log(updatedData);
      console.log(Data, role);
      resolve(Data);
      setTimeout(() => {
        resolve("Parent Deleted Successfully");
      }, 2000);
    });
  } catch (err) {
    console.log(err);
  }
};
