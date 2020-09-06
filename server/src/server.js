const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const socketIo = require("socket.io");

const PORT = 8000;

let currentOffer = null;

function startServer () {
    return new Promise((resolve) => {
        const app = express();

        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())

        app.get("/", (req, res) => {
            res.send({ foo: 'bar' });
        });

        app.post("/offer", (req, res) => {
            currentOffer = req.body;
            console.info('POST /offer req', req);
            res.send({ bar: 'baz' })
        })

        app.get("/offer", (req, res) => {
            res.send(currentOffer);
        })

        const httpServer = http.createServer(app);
        const io = socketIo(httpServer);
        io.on("connection", socket => {
            console.log('socket connection established', socket);
        });

        httpServer.listen(PORT, () => {
            resolve({
                port: PORT
            })
        });
    })
}


module.exports = {
    startServer,
}
