import MainContainer from "./Maincontainer"
import Sidebar from "./SIdebar"

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