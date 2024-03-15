"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-[129px] mt-10 rounded-lg ml-auto bg-[#2C3D68] text-[#FF8B13] font-bold text-lg px-6 py-3"
      type="submit"
      aria-disabled={pending}
    >
      Save
    </button>
  );
}
