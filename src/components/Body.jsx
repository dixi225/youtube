import MainContainer from "./Maincontainer"
import Sidebar from "./Sidebar"

const Body=()=>
{
    return <>
        <div className="flex">
            <Sidebar/>
            <MainContainer/>
        </div>
     </>
}
export default Body