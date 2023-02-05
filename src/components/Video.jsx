import React from "react";
import ChannelInfo from "./ChannelInfo";

export default function Video({ video }) {
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <div className="">
      <section>
        <iframe
          id="player"
          title={title}
          type="text/html"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
        ></iframe>
      </section>
      <div className="p-8">
        <p className="text-xl font-bold">{title}</p>
        <ChannelInfo id={channelId} name={channelTitle} />
        <pre className="whitespace-pre-wrap break-all overflow-y-auto">
          {description}
        </pre>
      </div>
    </div>
  );
}
