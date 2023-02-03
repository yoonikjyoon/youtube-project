import React from "react";
import ChannelInfo from "./ChannelInfo";

export default function Video({ video }) {
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <div className="border border-solid border-white">
      <section>
        <iframe
          id="player"
          title={video.id}
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
        ></iframe>
      </section>
      <div className="border border-solid border-red-300">
        <p>{title}</p>
        <ChannelInfo id={channelId} name={channelTitle} />
        <pre>{description}</pre>
      </div>
    </div>
  );
}
