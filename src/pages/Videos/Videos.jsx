import React from "react";
import styles from "./Videos.module.css";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useYoutubeApi } from "../../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword), {
    staleTime: 1000 * 60 * 1,
  });

  return (
    <div className={styles.container}>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {videos && (
        <ul className={styles.videos}>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}
