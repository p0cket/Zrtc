const http = require("http");
const express= require("express");
const socketIo = require("socket.io");

const PORT = 8000;

function startServer () {
    return new Promise((resolve) => {
        const app = express();

        app.get("/", (req, res) => {
            res.send({ foo: 'bar' }); 
        });

        app.post("/offer", (req, res) => {
            console.info('POST /offer req', req);
            res.send({ bar: 'baz' })
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
