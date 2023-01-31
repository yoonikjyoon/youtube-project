import React from "react";
import styles from "./VideoCard.module.css";
import { useNavigate } from "react-router-dom";
import { getDateDiff } from "../../utils/date";

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const onClickVideo = (videoId) => {
    navigate(`/videos/watch/${videoId}`);
  };
  return (
    //  그냥 onClickVideo하면 모든 자식데이터에 동작!! () => 기억 🔥
    <div className={styles.video} onClick={() => onClickVideo(video.id)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={`${video.snippet.title}`}
      />
      <p className={styles.title}>{video.snippet.title}</p>
      <p className={styles.channelTitle}>{video.snippet.channelTitle}</p>
      <p className={styles.publishedAt}>
        {getDateDiff(video.snippet.publishedAt)}
      </p>
    </div>
  );
}
