import data from "@/MOCK_DATA.json";
import { CounsellorTable } from "@/components/columnDef";
export default function Home() {
  return (
    <>
      <CounsellorTable data={data} />
    </>
  );
}
