import React from "react";

export default function Video({ videoId }) {
  return (
    <div className="border border-solid border-white">
      <video className="w-full" controlsList="nodownload" src="" />
      비디오자리
      <div className="border border-solid border-red-300">
        <p>타이틀</p>
        <div>채널 이미지 + 채널명</div>
        <div> 설명</div>
      </div>
    </div>
  );
}
