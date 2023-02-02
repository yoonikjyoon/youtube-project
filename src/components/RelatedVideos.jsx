import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { formatAgo } from "../utils/date";

export default function RelatedVideos({ videoId }) {
  const navigate = useNavigate();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: relatedVideo,
  } = useQuery(["relatedVideo", videoId], () => youtube.related(videoId));
  const onClickVideo = (videoId) => {
    navigate(`/videos/watch/${videoId}`);
  };
  return (
    <div className="border border-solid border-white">
      RelatedVideos
      {relatedVideo &&
        relatedVideo.map((video) => (
          <div
            className="cursor-pointer w-full flex border border-solid border-white"
            key={video.id.videoId}
            onClick={() => onClickVideo(video.id.videoId)}
          >
            {/* {video.snippet.title} */}
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
    </div>
  );
}
