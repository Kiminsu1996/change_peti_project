const express = require('express');
const http = require('http');
const app = express();
const port = 1000;
const server = http.createServer(app);

const elementRouter = require('./src/seeding/element');
app.use('/element', elementRouter);

server.listen(port, () => {
    console.log(`${port}번에서 http 웹서버 실행`);
});
