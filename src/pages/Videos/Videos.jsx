import React from "react";
import styles from "./Videos.module.css";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../../components/VideoCard/VideoCard";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
    // 두가지 필요한것 : []안에 캐시key, 어떻게 가지고올 것인지 함수
  } = useQuery(["videos", keyword], async () => {
    return fetch(
      `/data/${
        keyword ? "list_by_keyword" : "list_by_most_popular_videos"
      }.json`
    )
      .then((res) => res.json())
      .then((data) => data.items);
  });

  return (
    <div className={styles.container}>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {videos && (
        <ul className={styles.videos}>
          {videos.map((video) => (
            <VideoCard
              key={keyword ? video.id.videoId : video.id}
              video={video}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
