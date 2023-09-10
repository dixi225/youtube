const Videocard=({info})=>
{
    return<>
   <div className="flex flex-col border border-gray-400 p-2 m-3 max-w-min shadow-xl rounded-lg cursor-pointer hover:scale-110 transition-transform ">
            <div className="w-64" ><img className='pb-4 m-0  rounded-xl' src={info?.snippet?.thumbnails?.medium?.url} alt="" /></div>
            <div> <h1 className="pb-8 font-semibold">{info.snippet.title}</h1></div>
            <div ><h2 className=" text-gray-800 text-sm">{info.snippet.channelTitle}</h2></div>
            <div ><h2 className="text-gray-800 text-sm">{info.statistics.viewCount} views</h2></div>           
        </div>
    </>
}
export default Videocard