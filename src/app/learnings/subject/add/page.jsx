import SubmitButton from "@/components/learnings/submitButton";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
export default function Home() {
  const addSubject = async (formData) => {
    "use server";
    // e.preventDefault();
    const data = {
      name: formData.get("name"),
      time: formData.get("time"),
    };
    // console.log(data);
    const res = await fetch(
      "https://sensei-app-c8da1e59e645.herokuapp.com/sensei/api/v1/subject/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.text())
      .then((text) => {
        return text;
      })
      .catch((error) => console.log(error));
    if (res) {
      revalidateTag("subject");
      redirect("/learnings/module/" + res);
    }
  };
  return (
    <form
      action={addSubject}
      className="flex w-fit flex-col container gap-4 mx-auto mt-10 p-4"
    >
      <label className="pt-5 text-sm" htmlFor={`FirstName`}>
        <p>Subject Name :</p>
        <input
          className="mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
          type="text"
          placeholder="Type here"
          name={`name`}
          required
        />
      </label>
      <label className="pt-5 w-fit text-sm" htmlFor={`FirstName`}>
        <p>Time Duration (month) :</p>
        <input
          className="w-[100px] mt-2 drop-shadow px-6 py-3 rounded-lg outline-none"
          type="Number"
          placeholder="Type here"
          name={`time`}
          required
        />
      </label>
      <SubmitButton />
    </form>
  );
}
