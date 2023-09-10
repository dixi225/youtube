import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { closeMenu } from "../Constants/Utills/Appslice";
import { useSearchParams } from "react-router-dom";
import Commentcontainer from "./Commentcontainer";
const Videowatch=()=>
{
    const [searchparams]=useSearchParams()
    console.log(searchparams.get('v'));
    const dispatch=useDispatch();
    useEffect(()=>
    {
        dispatch(closeMenu())
    },[])
    return<div>
    <div className="flex items-center justify-center">
            <iframe className="m-10" width="700" height="500" src={'https://www.youtube.com/embed/'+searchparams.get('v')} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            
            </iframe>
    </div>
    <Commentcontainer/>

    </div>
}
export default Videowatch