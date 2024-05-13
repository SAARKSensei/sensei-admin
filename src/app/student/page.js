import data from "@/utils/MOCK_DATA.json";
import { StudentTable } from "@/components/columnDef";
export default function Home() {
  return (
    <>
      <StudentTable data={data} />
    </>
  );
}
