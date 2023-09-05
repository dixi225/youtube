import { useEffect,useState } from "react"
import { Youtube_API } from "../Constants/defaults"
import Videocard from "./Videocards"
import { Link } from "react-router-dom"

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
        console.log(json.items);
    }
    return videoList.length===0?<h1>Page is loading</h1>:<>
    <div className=" flex flex-wrap justify-center">
    {
     videoList.map((video)=><div><Link to={'/watch?v='+video.id}><Videocard key={video.id} info={video}/></Link></div>)
    }    
    </div>
    </>
}
export default Videocontainer