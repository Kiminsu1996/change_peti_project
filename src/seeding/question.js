const questionRouter = require('express').Router();
const controller = require('../../controller/controller');
const question = require('../../question.json');
const { pgPool } = require('../config/pgConfig');

questionRouter.post(
    '/',
    controller(async (req, res) => {
        for (let i = 0; i < question.length; i++) {
            await pgPool.query(
                `INSERT INTO
                    question
                        (idx, animal_idx, content, left_option, right_option)
                    VALUES
                        ($1,$2,$3,$4,$5)`,
                [question[i].idx, question[i].animal_idx, question[i].content, question[i].left_option, question[i].right_option]
            );
        }
        res.send('성공');
    })
);

module.exports = questionRouter;
