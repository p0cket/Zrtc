const express= require("express");
// const socketIo = require("socket.io");
// const { createServer } = require("http");

const PORT = 8000;

function startSever () {
    return new Promise((resolve) => {
        const app = express();
         
        app.get("/", (req, res) => {
            res.send({ foo: 'bar' }); 
        });

        app.listen(PORT, () => {
            resolve({
                port: PORT
            })
        });
    })
    
}

// function startSocket () {
//     return new Promise((resove) => {
//         const httpServer = createServer(app);
//         const io = socketIo(httpServer);
//         io.on("connection", socket => {
//             resolve({ socket });
//         });
//     })
// }

module.exports = {
    startSever,
    // startSocket,
}
