const { startSever, startSocket } = require('./server')

startSever()
    .then(({ port }) => {
        console.info(`server started at http://localhost:${port}`)
    })
    .catch((e) => {
        console.error('error starting server', e);
        process.exit(1);
    })

// startSocket()
//     .then(({ socket }) => {
//         console.info(`socket started`, socket)
//     })
//     .catch((e) => {
//         console.error('error starting server', e);
//         process.exit(2);
//     })
