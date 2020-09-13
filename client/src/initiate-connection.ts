import axios from "axios";
import Peer from "simple-peer";

let peer: any;

export default function initiateConnection() {
  peer = new Peer({
    initiator: true,
    trickle: false,
  });
  peer.on("error", handleError);
  peer.on("signal", handleSignal);
  peer.on("connect", handleConnection);
  peer.on("data", handleData);
}

function handleError(err: Error) {
  console.error("error", err);
}

function handleSignal(offer: any) {
  console.log("signal", offer);
  axios
    .post("/offer", offer)
    .then((data) => {
      console.log("offer success", data);
    })
    .catch((err) => {
      console.error("offer error", err);
    });
}

function handleConnection(connection: any) {
  console.log("connect", connection);
  peer.send("hi");
}

function handleData(data: any) {
  console.log("data", data);
}
