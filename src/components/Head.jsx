import { useDispatch, useSelector } from "react-redux"
import { HamBurugur_URL ,Youtube_Logo, User_Icon_Logo ,Search_Icon_Logo, YOUTUBE_SEARCH_API} from "../Constants/defaults"
import { toggleMenu } from "../Constants/Utills/Appslice"
import { useEffect, useState } from "react"
import { loadInCache } from "../Constants/Utills/CacheSlice"
const Head=()=>
{
    const searchCache=useSelector((store)=>store.search)
    const[searchVisible,setSearchVisible]=useState(false)
    const [searchQuery,setSearchQuery]=useState("")
    const [searchList,setSearchList]=useState([]);
    const dispatch=useDispatch()
    useEffect(
        ()=>{
        const timer=setTimeout(()=>
        {
            
         
            if(searchCache[searchQuery]!==undefined)
            setSearchList(searchCache[searchQuery])
            else
            fetchSearchApi()
        },
        200)
        return ()=>{
           clearTimeout(timer)
        }
    },[searchQuery])
    
    const fetchSearchApi=async()=>{
        const data=await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json=await data.json()
        setSearchList(json[1])
        dispatch(loadInCache({
            [searchQuery]: json[1],
            }))
    }
    const toggleHandler=()=>
    {
        dispatch(toggleMenu())
    }
    return <>
    <div className="flex justify-between  p-2 shadow-lg sticky top-0 z-40 bg-white">
            <div className="flex items-center">
                <img onClick={()=>toggleHandler()} className=" hover:bg-gray-100 cursor-pointer w-10"src={HamBurugur_URL} alt="" />
                <img className="cursor-pointer ml-6 w-20"src={Youtube_Logo} alt=""/>
            </div>
            <div>
                <input className=" focus:outline focus:outline-1 focus:outline-blue-200 py-1 border border-gray-400  px-3 hover:drop-shadow-md cursor-pointer rounded-2xl w-96 mr-3 bg-gray-100"
                value={searchQuery}
                onFocus={()=>setSearchVisible(true)}
                onBlur={()=>setSearchVisible(false)}
                onChange={(e)=>{
                    setSearchQuery(e.target.value)
                }}/>
                <button className=" w-10 p-3 hover:bg-gray-300 rounded-lg">
                    <img src={Search_Icon_Logo} alt="" />
                </button>
                {searchVisible&&<ul className=" shadow-xl bg-white w-96 fixed pt-2 rounded-md">
                    {
                        searchList.map((item)=><li className="px-5 py-3 font-semibold hover:bg-gray-300">🔍 {item}</li>)
                    }
                </ul>}
            </div>
            <div>
                <img className="w-10" src={User_Icon_Logo} alt="" />
            </div>
    </div>

    </>
}
export default Head
