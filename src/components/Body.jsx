import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
const Body=()=>
{
    return <>
        <div className="flex">
            <Sidebar/>
            <Outlet/>
            {/* <MainContainer/>
            <Videowatch/> */}
        </div>
     </>
     
}
export default Body