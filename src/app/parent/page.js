import Image from "next/image";
import AddParentForm from "@/components/AddParentForm";
import { FaUser } from "react-icons/fa6";
import SideMenu from "@/components/SideMenu";

export default function Home() {
  return (
    <>
      <div className="flex gap-5 items-center">
        <span className="mr-auto font-bold text-2xl text-[#2C3D68] ">
          Parent
        </span>
        <button className="relative button-action-fill">
          <span className="text-xl">+</span> Add Parent
        </button>
        <button className="flex relative gap-2 pr-6 button-action-outline ">
          Edit Parent{" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 12.5C19.5 12.3011 19.579 12.1103 19.7197 11.9697C19.8603 11.829 20.0511 11.75 20.25 11.75C20.4489 11.75 20.6397 11.829 20.7803 11.9697C20.921 12.1103 21 12.3011 21 12.5V20.75C21 20.9489 20.921 21.1397 20.7803 21.2803C20.6397 21.421 20.4489 21.5 20.25 21.5H3.75C3.55109 21.5 3.36032 21.421 3.21967 21.2803C3.07902 21.1397 3 20.9489 3 20.75V4.25C3 4.05109 3.07902 3.86032 3.21967 3.71967C3.36032 3.57902 3.55109 3.5 3.75 3.5H12C12.1989 3.5 12.3897 3.57902 12.5303 3.71967C12.671 3.86032 12.75 4.05109 12.75 4.25C12.75 4.44891 12.671 4.63968 12.5303 4.78033C12.3897 4.92098 12.1989 5 12 5H4.5V20H19.5V12.5Z"
              fill="currentColor"
            />
            <path
              d="M11.0145 13.49L12.252 13.313L19.854 5.71251C19.9256 5.64332 19.9827 5.56056 20.0221 5.46906C20.0614 5.37756 20.082 5.27914 20.0829 5.17956C20.0838 5.07998 20.0648 4.98122 20.0271 4.88904C19.9894 4.79687 19.9337 4.71313 19.8633 4.64271C19.7929 4.57229 19.7091 4.5166 19.6169 4.47889C19.5248 4.44118 19.426 4.42221 19.3264 4.42307C19.2268 4.42394 19.1284 4.44463 19.0369 4.48393C18.9454 4.52324 18.8627 4.58038 18.7935 4.65201L11.19 12.2525L11.013 13.49H11.0145ZM20.9145 3.59001C21.1236 3.79896 21.2894 4.04706 21.4026 4.32014C21.5158 4.59321 21.574 4.88591 21.574 5.18151C21.574 5.4771 21.5158 5.7698 21.4026 6.04288C21.2894 6.31596 21.1236 6.56406 20.9145 6.77301L13.137 14.5505C13.0223 14.6656 12.8733 14.7404 12.7125 14.7635L10.2375 15.1175C10.1221 15.1341 10.0045 15.1235 9.89395 15.0867C9.78339 15.0499 9.68293 14.9879 9.60053 14.9055C9.51813 14.8231 9.45607 14.7226 9.41926 14.612C9.38245 14.5015 9.37191 14.3839 9.38848 14.2685L9.74248 11.7935C9.7652 11.6329 9.83942 11.4839 9.95398 11.369L17.733 3.59151C18.1549 3.1697 18.7271 2.93274 19.3237 2.93274C19.9203 2.93274 20.4925 3.1697 20.9145 3.59151V3.59001Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button className="flex relative gap-2 pr-6 button-action-outline ">
          Remove{" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 22 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4999 5.5L16.4999 9.5M16.4999 5.5L12.4999 9.5M18.5949 14H8.2979C7.7763 13.9999 7.27536 13.7961 6.9019 13.432L1.5519 8.216C1.45635 8.12284 1.38041 8.01149 1.32856 7.88852C1.27671 7.76555 1.25 7.63345 1.25 7.5C1.25 7.36655 1.27671 7.23445 1.32856 7.11148C1.38041 6.98851 1.45635 6.87716 1.5519 6.784L6.9019 1.568C7.27536 1.20387 7.7763 1.00005 8.2979 1H18.5949C19.5449 1 20.8179 1.541 20.8179 2.625V12.375C20.8179 13.459 19.5449 14 18.5949 14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <AddParentForm className="overflow-y-auto" />
    </>
  );
}
