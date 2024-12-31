"use client";
import { FaShoppingBag } from "react-icons/fa";
import { TbSmartHome, TbSettings2 } from "react-icons/tb";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const Footer = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 flex w-full items-center justify-between bg-white p-4">
      <Link
        key="home"
        href="/home"
        className={clsx("text-[#383838] flex flex-col items-center", {
          "text-[#E23E3E]": pathname === "/home",
        })}
      >
        <TbSmartHome className="h-6 w-6 " />
        <h1>Home</h1>
      </Link>
      <Link
        key="menu"
        href="/menu"
        className={clsx("text-[#383838] flex flex-col items-center", {
          "text-[#E23E3E]": pathname === "/menu",
        })}
      >
        <MdOutlineRestaurantMenu className="h-6 w-6 " />
        <h1>Menu</h1>
      </Link>
      <Link
        key="cart"
        href="/cart"
        className={clsx("flex flex-col items-center text-[#383838]", {
          "text-[#E23E3E]": pathname === "/cart",
        })}
      >
        <FaShoppingBag className="h-6 w-6 " />
        <h1>Cart</h1>
      </Link>
      
      <Link
        key="settings"
        href="/settings"
        className={clsx("text-[#383838] flex flex-col items-center", {
          "text-[#E23E3E]": pathname === "/settings",
        })}
      >
        <TbSettings2 className="h-6 w-6" />
        <h1>Settings</h1>
      </Link>
    </div>
  );
};
export default Footer;
