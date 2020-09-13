import axios from "axios";
import Peer from "simple-peer";

let peer: any;

export default function recieveConnection() {
  peer = new Peer({ trickle: false });
  console.log("peer", peer);
  peer.on("error", handleError);
  peer.on("signal", handleSignal);
  peer.on("connect", handleConnection);
  peer.on("data", handleData);

  axios
    .get("/offer")
    .then(({ data }) => {
      console.log("GET offer success", data);
      console.log("sending signal");
      peer.signal(data);
    })
    .catch((err) => {
      console.error("GET offer error", err);
    });
}

function handleError(err: Error) {
  console.error("error", err);
}

function handleSignal(signal: any) {
  console.log("peer signal", signal);
}

function handleConnection(connection: any) {
  console.log("peer connect", connection);
  peer.send("hey buddy, how is it going?");
}

function handleData(data: any) {
  console.log("peer data", data);
}
