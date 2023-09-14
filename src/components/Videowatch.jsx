import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { closeMenu } from "../Constants/Utills/Appslice";
import { useSearchParams } from "react-router-dom";
import Commentcontainer from "./Commentcontainer";
import Livechat from "./Livechat";
const Videowatch=()=>
{
    const [searchparams]=useSearchParams()
    const dispatch=useDispatch();
    useEffect(()=>
    {
        dispatch(closeMenu())
    },[])
    return<div className="w-full">
    <div className="flex items-center justify-center">
            <div>
                <iframe className="m-10" width="700" height="500" src={'https://www.youtube.com/embed/'+searchparams.get('v')} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                </iframe>
            </div>
            <div className="w-full mr-10">
                <Livechat/>
            </div>
    </div>
    <Commentcontainer/>

    </div>
}
export default Videowatch