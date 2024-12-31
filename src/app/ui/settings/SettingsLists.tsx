import { FaRegUser } from "react-icons/fa6"
import {IoIosArrowForward } from "react-icons/io"
import { CiTrophy } from "react-icons/ci";
import { TbNotes, TbTag } from "react-icons/tb";
import { MdPayments, MdChecklist } from "react-icons/md";



const SettingsLists = () => {
    return (
      <div className="flex flex-col bg-[#FFFFFF]">
        <div className="flex gap-6 items-center p-3 border-y border-gray-100">
          <FaRegUser className="h-9 w-9 " />
          <h1>Personal info</h1>
          <IoIosArrowForward className="h-9 w-9 ml-auto" />
        </div>
        <div className="flex gap-6 border-y p-3 border-gray-200">
          <TbNotes className="h-9 w-9 " />
          <h1>Dashboard</h1>
          <IoIosArrowForward className="h-9 w-9 ml-auto" />
        </div>
        <div className="flex gap-6 p-3 border-b border-gray-200">
          <CiTrophy className="h-9 w-9 " />
          <h1>Rewards</h1>
          <IoIosArrowForward className="h-9 w-9 ml-auto" />
        </div>
        <div className="flex gap-6 p-3 border-b border-gray-200">
          <TbTag className="h-9 w-9" />
          <h1>Gifts and Discount codes</h1>
          <IoIosArrowForward className="h-9 w-9 ml-auto" />
        </div>
        <div className="flex gap-6 p-3 border-b border-gray-200">
          <MdPayments className="h-9 w-9" />
          <h1>Payment Method</h1>
          <IoIosArrowForward className="h-9 w-9 ml-auto" />
        </div>
        <div className="flex gap-6 p-3 border-b border-gray-200">
          <MdChecklist className="h-9 w-9" />
          <h1>Order History</h1>
          <IoIosArrowForward className="h-9 w-9 ml-auto" />
        </div>
      </div>
    );
}
export default SettingsLists