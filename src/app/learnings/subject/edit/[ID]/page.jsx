import AddSchoolForm from "@/components/AddSchoolForm";
import data from "@/utils/MOCK_DATA.json";
export default async function Home({ params }) {
  const record = await fetch(
    "https://sensei-app-c8da1e59e645.herokuapp.com/sensei/api/v1/subject"
  );
  const data = await record.json();
  console.log(data);
  return (
    <>
      <AddSchoolForm data={data} className="overflow-y-auto" />
    </>
  );
}
