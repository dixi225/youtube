import { User_Icon_Logo } from "../Constants/defaults"
const Comment=({data})=>
{
    return <div className=" mb-10 bg-gray-100 shadow-lg p-2">
        <div className="flex gap-x-5">
            <div>
                <img className="w-10" src={User_Icon_Logo} alt="Icon" />    
            </div>   
            
             <div className=" font-semibold text-xl">
               {data?.name}
            </div>                
        </div>
        <div className=" max-w-xl ml-16 mt-2 font-medium">
                    <p className=" text-gray-700">{data?.text}</p>
        </div>
        {/* {data?.replies?.length && <Comment data={data?.replies[0]}/>} */}

    </div>
}
export default Comment 