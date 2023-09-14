import { useEffect } from "react"
import Chatmessege from "./Chatmessege"
import { useDispatch, useSelector } from "react-redux"
import { addMessege } from "../Constants/Utills/Chatslice"
const Livechat=()=>
{
    const dispatch=useDispatch()
    const chatmsg=useSelector((store)=>store.chat.messeges)
    useEffect(()=>
    {
       const i= setInterval(()=>{
        dispatch(addMessege({
            name:"Harsh Dixit",
            messege:"Lorem invisv sbudfa afnsib"
        }))
       },2000)
       return ()=> clearInterval(i)
    },[])
    return <>
        <div className="p-2 flex flex-col-reverse  border border-black w-full h-[500px] overflow-scroll bg-slate-100 rounded-lg">
            {
                chatmsg.map((msg)=><Chatmessege name={msg.name} messege={msg.messege}/>)
            }
            <Chatmessege name={'Harsh Dixit'} messege={'What should I do'}/>

        </div>
    </>
}
export default Livechat