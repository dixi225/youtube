import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { closeMenu } from "../Constants/Utills/Appslice";
const Videowatch=()=>
{
    const dispatch=useDispatch();
    useEffect(()=>
    {
        dispatch(closeMenu())
    },[])
    return<>
    <div className="flex items-center justify-center">
            <iframe width="700" height="500" src="https://www.youtube.com/embed/COv52Qyctws?si=1vgClvMaxaDSFjc5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            
            </iframe>
    </div>

    </>
}
export default Videowatch