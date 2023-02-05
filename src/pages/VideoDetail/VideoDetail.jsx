import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./VideoDetail.module.css";
import Video from "../../components/Video";
import RelatedVideos from "../../components/RelatedVideos";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  return (
    <div className={styles.container}>
      <Video video={video} />
      <RelatedVideos video={video} />
    </div>
  );
}
