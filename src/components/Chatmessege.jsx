import { User_Icon_Logo } from "../Constants/defaults"

const Chatmessege=({name,messege})=>
{
    return <>
        <div className="flex items-center shadow-sm px-2 py-4 w-fit">
            <div>
                <img className="w-8" src={User_Icon_Logo} alt="#" />
            </div>
            <div>
                <span className="px-3 font-bold">{name}</span>
                <span>{messege}</span>
            </div>
        </div>
    </>
}
export default Chatmessege
