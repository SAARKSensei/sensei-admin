"use client";
import AddCounsellorForm from "@/components/AddCounsellorForm";
import data from "@/utils/MOCK_DATA.json";
export default function Home({ params }) {
  console.log(params.ID);
  const record = data.find((record) => record.ParenId === params.ID);
  console.log(record);
  return (
    <>
      <AddCounsellorForm data={record} className="overflow-y-auto" />
    </>
  );
}
