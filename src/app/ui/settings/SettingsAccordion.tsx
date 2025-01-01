import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
const SettingsAccordion = () => {
    return (
        <div >
            <div className="my-6 bg-[#ffffff]">
                <div className="flex items-center p-3">
                    <h1>FAQs</h1>
                    <IoIosArrowForward className="h-9 w-9 ml-auto" />
                </div>
                <Link href="/settings/contact" className="flex items-center p-3">
                    <h1>Contact Us</h1>
                    <IoIosArrowForward className="h-9 w-9 ml-auto" />
                </Link>
                <Link href="/settings/feedback" className="flex items-center p-3">
                    <h1>Give us Feedback</h1>
                    <IoIosArrowForward className="h-9 w-9 ml-auto" />
                </Link>
            </div>
            <div className="flex flex-col my-5 bg-[#ffffff]">
                <h3 className="p-3">Terms & Condition</h3>
                <h3 className="p-3">Privacy Policy</h3>
            </div>
            <div className="flex flex-col bg-[#ffffff]">
                <h3 className="p-3">Change Language</h3>
                <h3 className="p-3">Sync with calendar</h3>
                <h3 className="p-3">Data Tracking</h3>
            </div>
        </div>
    )
}
export default SettingsAccordion