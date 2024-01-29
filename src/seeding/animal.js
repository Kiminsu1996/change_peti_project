const animalRouter = require('express').Router();
const controller = require('../../controller/controller');
const animal = require('../../animal.json');
const { pgPool } = require('../config/pgConfig');

animalRouter.post(
    '/',
    controller(async (req, res) => {
        for (let i = 0; i < animal.length; i++) {
            await pgPool.query(
                `INSERT INTO
                    animal
                        (idx, name)
                    VALUES
                        ($1,$2)`,
                [animal[i].idx, animal[i].name]
            );
        }
        res.send('성공');
    })
);

module.exports = animalRouter;
