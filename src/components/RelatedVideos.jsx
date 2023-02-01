import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function RelatedVideos({ videoId }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", videoId], () => youtube.search(videoId));
  return (
    <div className="border border-solid border-white">
      RelatedVideos
      {videos.map((video) => (
        <div>{video.snippet.title}</div>
      ))}
    </div>
  );
}
