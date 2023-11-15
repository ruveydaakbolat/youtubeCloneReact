import { useContext } from "react";
import SideBar from "../components/SideBar";
import { YoutubeContext } from "../context/youtubeContext";
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);
  console.log(videos);
  return (
    <div className="flex gap-3">
      <SideBar />
        <div className="videos">
          {!videos ? (
            <Loading />
          ) : (
            videos.map((item) => (
              item.type === "video" && <VideoCard video={item} key={item.videoId} />
            ))
          )}
      </div>
    </div>
  );
};

export default Feed;
