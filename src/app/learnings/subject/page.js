import data from "@/utils/MOCK_DATA.json";
import Subject from "@/components/learnings/subject";
export default async function Home() {
  const record = await fetch(
    "https://sensei-app-c8da1e59e645.herokuapp.com/sensei/api/v1/subject",
    { next: { tags: ["subject"] } }
  );
  const data = await record.json();
  // console.log(data);
  return (
    <div className="flex gap-4 overflow-auto max-h-[calc(100vh-200px)] flex-wrap container mx-auto p-4 mt-10">
      {data.map((item, index) => (
        <Subject key={index} data={item} />
      ))}
    </div>
  );
}
