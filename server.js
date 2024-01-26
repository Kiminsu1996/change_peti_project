const express = require('express');
const http = require('http');
const app = express();
const port = 1000;
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`${port}번에서 http 웹서버 실행`);
});
