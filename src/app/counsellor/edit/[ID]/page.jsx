import AddCounsellorForm from "@/components/AddCounsellorForm";
import data from "@/MOCK_DATA.json";
export default function Home({ params }) {
  const record = data.find((record) => record.id === params.id);
  console.log(record);
  return (
    <>
      <AddCounsellorForm data={record} className="overflow-y-auto" />
    </>
  );
}
