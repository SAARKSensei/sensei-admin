"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div className="flex mt-10 flex-row-reverse w-full">
      <button className="button--submit" type="submit" aria-disabled={pending}>
        Save
      </button>
    </div>
  );
}
