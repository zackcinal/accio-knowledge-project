import React from "react";
import video from "./backgroundvideo.mp4"

function VideoBackground() {

  return (
    <div className="bgContainer">
      <video autoPlay loop muted poster="poster.jpg">
        <source src={video} autoPlay muted/>
      </video>
    </div>
  );
};

export default VideoBackground;
