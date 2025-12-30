export default function TabButton({ label, active }) {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm border ${
        active ? "bg-yellow-400" : "bg-white"
      }`}
    >
      {label}
    </button>
  );
}
