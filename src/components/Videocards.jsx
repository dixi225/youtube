const Videocard=({info})=>
{
    return<>
        <div className="flex flex-col border border-gray-400 p-2 m-3 w-1/5 shadow-xl rounded-lg">
            <img className='pb-4  rounded-xl' src={info?.snippet?.thumbnails?.medium?.url} alt="" />
            <h1 className="pb-8 font-semibold">{info.snippet.title}</h1>
            <h2 className=" text-gray-800 text-sm">{info.snippet.channelTitle}</h2>
            <h2 className=" text-gray-800 text-sm">{info.statistics.viewCount} views</h2>
        </div>
    </>
}
export default Videocard