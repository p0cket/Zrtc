import React from "react";
import "./App.css";
import initiateConnection from "./initiate-connection";
import recieveConnection from "./recieve-connection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Stir Cray? Video Call with Half Decent People
        </h1>
        <a href="https://github.com/AngularBuddies/Zrtc">
          Check out the source on Github.
        </a>
        <div className="buttons">
          <button onClick={initiateConnection}>
            SendOffer
          </button>
          <button onClick={recieveConnection}>
            GetOffer
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
