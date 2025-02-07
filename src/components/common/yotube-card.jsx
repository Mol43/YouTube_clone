
export const Card = ({ video }) => {
    return (
        <section className=" flex justify-center ">
        <div className="  w-[288px]  overflow-hidden mb-10">
          <a href="#">
            <img src={video.thumbnail} alt="Video Thumbnail" className="w-[288px] h-[160px] object-cover" />
          </a>
          <div className="p-2 flex gap-2">
            <img src={video.avatar} alt="Channel Avatar" className="w-10 h-10 " />
            <div>
              <h3 className="text-white text-sm font-bold leading-tight">{video.title}</h3>
              <p className="text-gray-400 text-xs">{video.channel}</p>
              <p className="text-gray-400 text-xs">{video.views} views • {video.time}</p>
            </div>
          </div>
        </div>
        </section>
      );
}
