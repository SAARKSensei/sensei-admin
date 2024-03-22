import AddParentForm from "@/components/AddParentForm";
import data from "@/MOCK_DATA.json";
export default function Home({ params }) {
  const record = data.find((record) => record.id === params.id);
  console.log(record);
  return (
    <>
      <AddParentForm data={record} className="overflow-y-auto" />
    </>
  );
}
