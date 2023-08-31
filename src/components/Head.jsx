import { HamBurugur_URL ,Youtube_Logo, User_Icon_Logo ,Search_Icon_Logo} from "../Constants/defaults"
const Head=()=>
{
    return <>
    <div className="flex justify-around items-center p-6 shadow-lg">
            <div className="flex space-x-8 items-center">
                <img className=" w-10"src={HamBurugur_URL} alt="" />
                <img className=" w-32"src={Youtube_Logo} alt=""/>
            </div>
            <div>
                <input className=" hover:drop-shadow-md cursor-pointer rounded-2xl w-80 mr-3 bg-gray-100"/>
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