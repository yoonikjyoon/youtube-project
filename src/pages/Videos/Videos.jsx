import React, { useEffect, useState } from "react";
import styles from "./Videos.module.css";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getDateDiff } from "../../utils/date";
import { useParams, useNavigate } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams();
  const client = useQueryClient();
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => {
    return fetch(
      `data/${keyword ? "list_by_keyword" : "list_by_most_popular_videos"}.json`
    )
      .then((res) => res.json())
      .then((data) => data.items);
    // } = useQuery(["videos"], async () => {
    //   console.log("fetching");
    //////////////////
    // return keyword
    //   ? fetch("data/list_by_keyword.json").then((res) => res.json())
    //   : fetch("data/list_by_most_popular_videos.json").then((res) =>
    //       res.json()
    //     );
    //////////////////
    // return fetch("data/list_by_most_popular_videos.json").then((res) =>
    //   res.json()
    // );
  });
  // useEffect(() => {
  //   client.invalidateQueries(["videos"]);
  // }, [keyword, client]);
  const onClickVideo = (videoId) => {
    console.log(videoId);
    navigate(`/videos/watch/${videoId}`);
  };
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className={styles.container}>
      <ul className={styles.videos}>
        {videos.map((item) => (
          <li
            key={item.id}
            className={styles.video}
            onClick={() => onClickVideo(item.id)} // 그냥 onClickVideo하면 모든 li에 동작!! () => 기억 🔥
          >
            <img
              src={item.snippet.thumbnails.medium.url}
              alt={`${item.snippet.title}`}
            />
            <p className={styles.title}>{item.snippet.title}</p>
            <p className={styles.channelTitle}>{item.snippet.channelTitle}</p>
            <p className={styles.publishedAt}>
              {getDateDiff(item.snippet.publishedAt)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
