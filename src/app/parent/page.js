import data from "@/MOCK_DATA.json";
import { ParentTable } from "@/components/columnDef";
export default function Home() {
  return (
    <>
      <ParentTable data={data} />
    </>
  );
}
