import React from "react";
import { useParams } from "react-router-dom";
import styles from "./VideoDetail.module.css";
import Video from "../../components/Video";
import RelatedVideos from "../../components/RelatedVideos";

export default function VideoDetail({ video }) {
  const { videoId } = useParams();
  return (
    <div className={styles.container}>
      <Video videoId={videoId} />
      <RelatedVideos videoId={videoId} />
    </div>
  );
}
