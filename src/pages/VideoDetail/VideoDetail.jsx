import React from "react";
import { useParams } from "react-router-dom";
import styles from "./VideoDetail.module.css";

export default function VideoDetail() {
  const { videoId } = useParams();
  return <div>VideoDetail : {videoId}</div>;
}
