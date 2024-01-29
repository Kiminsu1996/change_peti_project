require('dotenv').config();
const express = require('express');
const http = require('http');
const app = express();
const port = 1000;
const server = http.createServer(app);

app.use(express.json());

//seeding
const animalRouter = require('./src/seeding/animal');
app.use('/animal', animalRouter);

const compositionRouter = require('./src/seeding/composition');
app.use('/composition', compositionRouter);

const elementRouter = require('./src/seeding/element');
app.use('/element', elementRouter);

const petiRouter = require('./src/seeding/peti');
app.use('/peti', petiRouter);

// const questionRouter = require('./src/seeding/question');
// app.use('/question', questionRouter);

// const weightRouter = require('./src/seeding/weight');
// app.use('/weight', weightRouter);

server.listen(port, () => {
    console.log(`${port}번에서 http 웹서버 실행`);
});
