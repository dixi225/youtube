import { useSelector } from "react-redux"

const Sidebar=()=>
{
    const selector=useSelector((store)=>store.name.isMenuOpen)
       return !selector?null:<div className="shadow-xl">
    <ul className="pt-10">
        <li className=" text-gray-800 font-semibold p-3 cursor-pointer pr-20 hover:bg-gray-200">Home</li>
        <li className=" text-gray-800 font-semibold p-3 cursor-pointer pr-20 hover:bg-gray-200">Shorts</li>
        <li className=" text-gray-800 font-semibold p-3 cursor-pointer pr-20 hover:bg-gray-200">Subscriptions</li>
    </ul>
    <span className="">
    </span>
    <ul className="pt-10">
        <li className=" text-gray-800 font-semibold p-3 cursor-pointer pr-20 hover:bg-gray-200">Library</li>
        <li className=" text-gray-800 font-semibold p-3 cursor-pointer pr-20 hover:bg-gray-200">History</li>
        <li className=" text-gray-800 font-semibold p-3 cursor-pointer pr-20 hover:bg-gray-200">Your Videos</li>
        <li className=" text-gray-800 font-semibold p-3 cursor-pointer pr-20 hover:bg-gray-200">Liked Videos</li>
    </ul>
    <ul className="pt-10">
        <li className=" text-gray-800 font-semibold p-3 cursor-pointer pr-20 hover:bg-gray-200">Settings</li>
        <li className=" text-gray-800 font-semibold p-3 cursor-pointer pr-20 hover:bg-gray-200">Report History</li>
        <li className=" text-gray-800 font-semibold p-3 cursor-pointer pr-20 hover:bg-gray-200">Help</li>
        <li className=" text-gray-800 font-semibold p-3 cursor-pointer pr-20 hover:bg-gray-200">Send Feedback</li>
    </ul>
    </div>
}
export default Sidebar