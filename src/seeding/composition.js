const compositionRouter = require('express').Router();
const controller = require('../../controller/controller');
const composition = require('../../composition.json');
const { pgPool } = require('../config/pgConfig');

compositionRouter.post(
    '/',
    controller(async (req, res) => {
        for (let i = 0; i < composition.length; i++) {
            await pgPool.query(
                `INSERT INTO 
                    composition
                        (idx, element_idx, name_en, name_kr)
                    VALUES
                        ($1,$2,$3,$4)`,
                [composition[i].idx, composition[i].element_idx, composition[i].name_en, composition[i].name_kr]
            );
        }
        res.send('성공');
    })
);

module.exports = compositionRouter;
