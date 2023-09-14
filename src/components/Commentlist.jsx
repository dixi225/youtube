import Comment from "./Comment"
const Commentlist=({data})=>
{
    return <div className="ml-10">  
       {
            data.map((data)=><Comment data={data}/>)    
       }
        {/* console.log({data.replies[0]}) */}
    </div>
}
export default Commentlist