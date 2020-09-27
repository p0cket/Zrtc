const { startServer } = require('./server');

startServer()
    .then(({ port }) => {
        console.info(`server started at http://localhost:${port}`);
    })
    .catch((e) => {
        console.error('error starting server', e);
        process.exit(1);
    })
