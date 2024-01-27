const elementRouter = require('express').Router();
const controller = require('../../controller/controller');
const element = require('../../element.json');
const { pgPool } = require('../config/pgConfig');

elementRouter.post(
    '/',
    controller(async (req, res) => {
        for (let i = 0; i < element.length; i++) {
            await pgPool.query(
                `INSERT INTO
                    element
                        (name_en, name_kr)
                    VALUES
                        ($1,$2)`,
                [element[i].name_en, element[i].name_kr]
            );
        }
        res.send('성공');
    })
);
module.exports = elementRouter;
