export default function ActionButton({ label, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 rounded-md bg-orange-500 text-white text-sm shadow-sm"
    >
      {label}
    </button>
  );
}
