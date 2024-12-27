import { FaArrowRight, FaRegUser } from "react-icons/fa6"

const SettingsLists = () => {
    return (
        <div>
            <div className="flex">
                <FaRegUser className="h-7 w-7"/>
                <h1>Personal info</h1>
                <FaArrowRight className="h-7 w-7 ml-auto" />
            </div>
            <div className="flex">
                <FaRegUser className="h-7 w-7"/>
                <h1>Dashboard</h1>
                <FaArrowRight className="h-7 w-7 ml-auto" />
            </div>
            <div className="flex">
                <FaRegUser className="h-7 w-7"/>
                <h1>Rewards</h1>
                <FaArrowRight className="h-7 w-7 ml-auto" />
            </div>
            <div className="flex">
                <FaRegUser className="h-7 w-7"/>
                <h1>Gifts and Discount codes</h1>
                <FaArrowRight className="h-7 w-7 ml-auto" />
            </div>
            <div className="flex">
                <FaRegUser className="h-7 w-7"/>
                <h1>Payment Method</h1>
                <FaArrowRight className="h-7 w-7 ml-auto" />
            </div>
            <div className="flex">
                <FaRegUser className="h-7 w-7"/>
                <h1>Order History</h1>
                <FaArrowRight className="h-7 w-7 ml-auto" />
            </div>
        </div>
    )
}
export default SettingsLists