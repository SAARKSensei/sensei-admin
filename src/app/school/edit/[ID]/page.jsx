import AddSchoolForm from "@/components/AddSchoolForm";
import data from "@/MOCK_DATA.json";
export default function Home({ params }) {
  const record = data.find((record) => record.ParenId === params.ID);
  console.log(record);
  return (
    <>
      <AddSchoolForm data={record} className="overflow-y-auto" />
    </>
  );
}
