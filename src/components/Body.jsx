import { Outlet } from "react-router-dom"
import MainContainer from "./Maincontainer"
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