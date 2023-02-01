import React from "react";
import styles from "./VideoCard.module.css";
import { useNavigate } from "react-router-dom";
import { formatAgo, getDateDiff } from "../../utils/date";

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const onClickVideo = (videoId) => {
    navigate(`/videos/watch/${videoId}`);
  };
  return (
    //  그냥 onClickVideo하면 모든 자식데이터에 동작!! () => 기억 🔥
    <li className={styles.video} onClick={() => onClickVideo(video.id)}>
      <img className="w-full" src={thumbnails.medium.url} alt={`${title}`} />
      <div className="my-3">
        <p className={styles.title}>{title}</p>
        <p className="text-sm text-gray-400">{channelTitle}</p>
        <p className="text-sm text-gray-400">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
