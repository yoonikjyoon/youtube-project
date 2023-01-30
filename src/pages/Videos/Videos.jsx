import React, { useEffect, useState } from "react";
import styles from "./Videos.module.css";
import { useQuery } from "@tanstack/react-query";
import { getDateDiff } from "../../utils/date";

export default function Videos() {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos"], async () => {
    console.log("fetching");
    return fetch("data/list_by_most_popular_videos.json").then((res) =>
      res.json()
    );
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className={styles.container}>
      <ul className={styles.videos}>
        {videos.items.map((item) => (
          <li key={item.id} className={styles.video}>
            <img
              src={item.snippet.thumbnails.medium.url}
              alt={`${item.snippet.title}`}
            />
            <p>{item.snippet.title}</p>
            <p>{getDateDiff(item.snippet.publishedAt)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
