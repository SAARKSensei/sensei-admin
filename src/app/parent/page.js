import Image from "next/image";
import AddParentForm from "@/components/AddParentForm";
import { FaUser } from "react-icons/fa6";
import SideMenu from "@/components/SideMenu";

export default function Home() {
  return (
    <main className="flex max-h-screen min-h-screen overflow-hidden flex-col bg-white">
      <div className=" shadow-2xl w-full flex justify-between px-[50px] py-3 bg-[#2C3D68]">
        <Image
          className="w-[107px] h-[41px]"
          src={"/senseiLogo.png"}
          alt="Sensei Logo"
          width={500}
          height={500}
        />
        <FaUser className="text-[#FF8B13] bg-white rounded-full w-11 h-11 pt-3" />
      </div>
      <div className="flex flex-grow overflow-auto">
        <SideMenu />
        <div className="w-full overflow-auto p-8 lg:px-20">
          <div className="flex gap-5 items-center">
            <span className="mr-auto font-bold text-2xl text-[#2C3D68] ">
              Parent
            </span>
            <button disabled={true} className="button-action-fill">
              + Add Parent
            </button>
            <button disabled className="button-action-outline">
              Edit Parent
            </button>
          </div>
          <AddParentForm className="overflow-y-auto" />
        </div>
      </div>
    </main>
  );
}
