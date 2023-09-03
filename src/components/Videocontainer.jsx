import { useEffect,useState } from "react"
import { Youtube_API } from "../Constants/defaults"
import Videocard from "./Videocards"

const Videocontainer=()=>
{
    const[videoList,setVideoList]=useState([])
    useEffect(()=>
    {
        fetchData()
    },[])
    const fetchData=async()=>
    {
        const data= await fetch(Youtube_API)
        const json=await data.json()
        setVideoList(json.items)
    }
    return videoList.length===0?<h1>Page is loading</h1>:<>
    <div className=" flex flex-wrap">
    {
        videoList.map( (video)=><Videocard key={video.id} info={video}/>)
    }    
    </div>
    </>
}
export default Videocontainer