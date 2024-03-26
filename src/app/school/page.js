import data from "@/MOCK_DATA.json";
import { SchoolTable } from "@/components/columnDef";
export default function Home() {
  return (
    <>
      <SchoolTable data={data} />
    </>
  );
}
