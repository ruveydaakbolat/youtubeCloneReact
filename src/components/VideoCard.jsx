import millify from "millify";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, type }) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();
  return (
    <div
    onClick={() => navigate(`/watch/${video.videoId}`)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`cursor-ponter ${type && "row"}`}
    >
      <div>
        <img
          className={`rounded-lg w-full h-full`}
          src={
            isHover && video.richThumbnail
              ? video.richThumbnail[0].url
              : video.thumbnail[video.thumbnail.length - 1].url
          }
          alt=""
        />
      </div>
      <div className="flex gap-4 mt-5">
        <img
          className={`w-14 h-14 rounded-full ${type && "hidden"}`}
          src={video.channelThumbnail[0].url}
        />
        <div>
          <h4 className={`font-bold ${type && "truncate max-w-[500px]"}`}>{video.title}</h4>
          <p>{video.channelTitle}</p>
          <div className="flex gap-2">
            <p>{millify(video.viewCount)}</p>
            <p>{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
