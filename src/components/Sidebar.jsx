import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Sidebar=()=>
{
    const selector=useSelector((store)=>store.name.isMenuOpen)
       return !selector?null:<div className="shadow-2xl h-fit sticky top-2">
    <div className="flex flex-col pt-10">
        <Link to={'/'}><div className=" text-gray-800 font-semibold p-3 mt-2  cursor-pointer pr-20 hover:bg-gray-200">Home</div></Link>  
        <div className=" text-gray-800 font-semibold p-3 cursor-pointer pr-20 hover:bg-gray-200">Shorts</div>
        <div className=" text-gray-800 font-semibold p-3 cursor-pointer pr-20 hover:bg-gray-200">Subscriptions</div>
    </div>
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
        <li className=" text-gray-800 font-semibold p-3 cursor-pointer pr-20 hover:bg-gray-200">Report</li>
        <li className=" text-gray-800 font-semibold p-3 cursor-pointer pr-20 hover:bg-gray-200">History</li>
        <li className=" text-gray-800 font-semibold p-3 cursor-pointer pr-20 hover:bg-gray-200">Help</li>
        <li className=" text-gray-800 font-semibold p-3 cursor-pointer pr-20 hover:bg-gray-200">Send </li>
        <li className=" text-gray-800 font-semibold p-3 cursor-pointer pr-20 hover:bg-gray-200">Feedback </li>
        
    </ul>
    </div>
}
export default Sidebar