import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard/VideoCard";

export default function RelatedVideos({ video }) {
  // const navigate = useNavigate();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related", video.id], () => youtube.relatedVideos(video.id));
  // const onClickVideo = (videoId) => {
  //   navigate(`/videos/watch/${videoId}`);
  // };
  console.log("----", videos && videos);
  return (
    <>
      {/* {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>} */}
      {/* {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )} */}
      {/* <div className="border border-solid border-white">
      RelatedVideos
      {videos &&
        videos.map((video) => (
          <div
          className="cursor-pointer w-full flex border border-solid border-white"
          key={video.id.videoId}
          onClick={() => onClickVideo(video.id.videoId)}
          >
            <img
              className="w-3/6"
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              />
            <div>
              <p>{video.snippet.title}</p>
              <p>{video.snippet.channelTitle}</p>
              <p>{formatAgo(video.snippet.publishedAt)}</p>
            </div>
          </div>
        ))}
    </div> */}
    </>
  );
}
