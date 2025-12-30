export default function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      
      {/* Label */}
      <label className="text-[14px] font-medium text-[#1E1E1E]">
        {label}
      </label>

      {/* Input Box */}
      <input
        {...props}
        className="
          w-10/12 
          px-4 py-3
          rounded-[12px]
          bg-white
          placeholder:text-[#9CA3AF]
          border border-[#E5E7EB]
          shadow-[0px_4px_30px_rgba(0,0,0,0.05)]
          outline-none 
          focus:border-[#FF8B13]
        "
      />
    </div>
  );
}
