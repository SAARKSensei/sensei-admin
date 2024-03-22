"use client";

export default function SubmitButton({ isSubmitting }) {
  return (
    <div className="flex mt-10 flex-row-reverse w-full">
      <button className="button--submit" type="submit" disabled={isSubmitting}>
        Save
      </button>
    </div>
  );
}
