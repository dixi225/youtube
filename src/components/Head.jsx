import { useDispatch } from "react-redux"
import { HamBurugur_URL ,Youtube_Logo, User_Icon_Logo ,Search_Icon_Logo} from "../Constants/defaults"
import { toggleMenu } from "../Constants/Utills/Appslice"
const Head=()=>
{
    const dispatch=useDispatch()
    const toggleHandler=()=>
    {
        dispatch(toggleMenu())
    }
    return <>
    <div className="flex justify-between items-center p-6 shadow-lg sticky top-0 z-40 bg-white">
            <div className="flex items-center">
                <img onClick={toggleHandler} className=" hover:bg-gray-100 cursor-pointer  w-10"src={HamBurugur_URL} alt="" />
                <img className="ml-6 w-32"src={Youtube_Logo} alt=""/>
            </div>
            <div>
                <input className="py-1 border border-gray-400  px-3 hover:drop-shadow-md cursor-pointer rounded-2xl w-80 mr-3 bg-gray-100"/>
                <button className=" w-10 p-3 hover:bg-gray-300 rounded-lg">
                    <img src={Search_Icon_Logo} alt="" />
                </button>
            </div>
            <div>
                <img className="w-10" src={User_Icon_Logo} alt="" />
            </div>
    </div>
    </>
}
export default Head