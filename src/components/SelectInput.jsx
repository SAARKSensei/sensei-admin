export default function SelectInput({ label }) {
  return (
    <div className="flex flex-col gap-1">

      {/* Label */}
      <label className="text-[14px] font-medium text-[#1E1E1E]">
        {label}
      </label>

      {/* Select Box */}
      <div className="relative">
        <select
          className="
            w-full
            px-4 py-3
            rounded-[12px]
            bg-white
            border border-[#E5E7EB]
            shadow-[0px_4px_30px_rgba(0,0,0,0.05)]
            appearance-none
            text-[#1E1E1E]
            placeholder:text-[#9CA3AF]
            outline-none
            focus:border-[#FF8B13]
          "
        >
          <option value="" className="text-[#9CA3AF]">Select</option>
        </select>

        {/* ORANGE FIGMA ARROW SVG */}
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7 10l5 5 5-5"
            stroke="#FF8B13"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
