import Comment from "./Comment"
const Commentlist=({data})=>
{
    return <div className="ml-10">  
        <h1 className="mb-10 font-bold text-3xl">Comments:-</h1>
       {
            data.map((data)=> <Comment data={data}/>)    
       }
        {/* console.log({data.replies[0]}) */}
    </div>
}
export default Commentlist