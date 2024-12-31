import Image from "next/image";
import { FaBell, FaRegUser } from "react-icons/fa6";
// import Logo from "@/app"
const Header = () => {
  return (
    <div className="fixed top-0 w-full flex items-center justify-between bg-white shadow-md z-50 p-3">
      <div>
        <FaRegUser className="h-7 w-7" />
      </div>
      <Image
        src="/logo.png"
        width={80}
        height={70}
        alt="App Logo"
        className=""
      />
      <div>
        <FaBell className="h-7 w-7" />
      </div>
    </div>
  );
};

export default Header;
