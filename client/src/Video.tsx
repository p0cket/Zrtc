// import io from 'socket.io'
import React from 'react';

function Video() {
  navigator.getUserMedia(
    { video: true, audio: true },
    stream => {
      const localVideo = document.getElementById("local-video");
      if (localVideo) {
        (localVideo as any).srcObject = stream;
      }
    },
    error => {
      console.warn(error.message);
    }
  );

  return (
    <>
    <video
        autoPlay
        className="remote-video"
        id="remote-video"
    ></video>
    <video
        autoPlay
        muted
        className="local-video"
        id="local-video"
    ></video>
    </>
  );
}

export default Video;
