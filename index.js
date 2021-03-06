'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
    console.info(`[${new Date()}] Request by ${req.connection.remoteAddress}`);
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });
    res.write(req.headers['user-agent']);
    res.end();
}).on('error', err => {
    console.error(`[${new Date()}] Server Error`, err);
}).on('clientError', err => {
    console.error(`[${new Date()}] Clinet Error`, err);
});

const port = 8000;
server.listen(port, () => {
    console.log('Listening on ' + port);
});
