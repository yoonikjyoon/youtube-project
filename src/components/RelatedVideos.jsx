import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { formatAgo } from "../utils/date";

export default function RelatedVideos({ video }) {
  const navigate = useNavigate();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related", video.id], () => youtube.relatedVideos(video.id), {
    staleTime: 1000 * 60 * 5,
  });
  const onClickVideo = (videoId) => {
    navigate(`/videos/watch/${videoId}`);
  };
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div>
        {videos &&
          videos.map((video) => (
            <div
              className="cursor-pointer w-full flex mb-3"
              key={video.id}
              onClick={() => onClickVideo(video.id)}
            >
              <img
                className="w-3/6 mr-3"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <div>
                <p className="font-bold mb-3">{video.snippet.title}</p>
                <p className="decoration-neutral-100">
                  {video.snippet.channelTitle}
                </p>
                <p className="decoration-pink-400">
                  {formatAgo(video.snippet.publishedAt)}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
