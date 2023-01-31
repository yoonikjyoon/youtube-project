import React from "react";
import styles from "./Videos.module.css";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../../components/VideoCard/VideoCard";
import { search } from "../../api/youtube";
import FakeYoutube from "../../api/fakeYoutube";
import Youtube from "../../api/youtube";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => {
    const youtube = new FakeYoutube();
    // const youtube = new Youtube();
    return youtube.search(keyword);
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
