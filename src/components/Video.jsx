import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Video({ videoId }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: video,
  } = useQuery(["video", videoId], () => youtube.detail(videoId));

  return (
    <div className="border border-solid border-white">
      {/* {video && video.map((item) => (
                <>
                <video className="w-full" controlsList="nodownload" src="" />
                비디오자리
                <div className="border border-solid border-red-300">
                  <p>타이틀 :</p>
                  <div>채널 이미지 + 채널명</div>
                  <div> 설명</div>
                </div>
              </>
      ))} */}
      {video && (
        <>
          <video className="w-full" controlsList="nodownload" src="" />
          비디오자리
          <div className="border border-solid border-red-300">
            <p>{video[0].snippet.title}</p>
            <div>채널 이미지 + 채널명</div>
            <div>{video[0].snippet.description}</div>
          </div>
        </>
      )}
    </div>
  );
}
