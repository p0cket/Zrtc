import axios from 'axios';
import Peer from 'simple-peer';
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  const sendOffer = () => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
    });

    peer.on('error', console.error.bind(console, 'error'));
    peer.on('signal', (offer) => {
      console.log('signal', offer);
      axios.post('/offer', offer)
        .then(console.log.bind(console, 'offer success'))
        .catch(console.error.bind(console, 'offer error'))
    });
    peer.on('connect', console.log.bind(console, 'connect'));
    peer.on('data', console.log.bind(console, 'data'));
  }

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
        <button onClick={sendOffer} >SendOffer</button>
      </header>
    </div>
  );
}

export default App;
