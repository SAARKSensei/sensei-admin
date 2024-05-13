"use client";

import { useFormStatus } from "react-dom";
import { useSession } from "next-auth/react";
export default function SubmitButton() {
  const { pending } = useFormStatus();
  const { data: session, status } = useSession();
  console.log("session", session, status);
  return (
    <div className="flex mt-10 flex-row-reverse w-full">
      <button className="button--submit" type="submit" aria-disabled={pending}>
        Save
      </button>
    </div>
  );
}
