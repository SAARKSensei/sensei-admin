import AddParentForm from "@/components/AddParentForm";
import data from "@/utils/MOCK_DATA.json";
export default function Home({ params }) {
  const record = data.find((record) => record.ParenId === params.ID);
  console.log(record);
  return (
    <>
      <AddParentForm data={record} className="overflow-y-auto" />
    </>
  );
}
