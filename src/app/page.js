import Image from "next/image";
import AddParentForm from "@/components/AddParentForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-20 justify-between  bg-gray-50">
      <AddParentForm />
    </main>
  );
}
