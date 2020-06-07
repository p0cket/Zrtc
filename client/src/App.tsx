// import io from 'socket.io'
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn RTS
        </a>
      </header>
      <div>
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
      </div>
    </div>
  );
}

export default App;
