const weightRouter = require('express').Router();
const controller = require('../../controller/controller');
const weight = require('../../weight.json');
const { pgPool } = require('../config/pgConfig');

weightRouter.post(
    '/',
    controller(async (req, res) => {
        for (let i = 0; i < weight.length; i++) {
            await pgPool.query(
                `INSERT INTO
                    weight
                        (idx, question_idx, value)
                    VALUES
                        ($1,$2,$3)`,
                [weight[i].idx, weight[i].question_idx, weight[i].value]
            );
        }
        res.send('성공');
    })
);

module.exports = weightRouter;
