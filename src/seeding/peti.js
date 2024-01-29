const petiRouter = require('express').Router();
const controller = require('../../controller/controller');
const peti = require('../../peti.json');
const { pgPool } = require('../config/pgConfig');

petiRouter.post(
    '/',
    controller(async (req, res) => {
        for (let i = 0; i < peti.length; i++) {
            await pgPool.query(
                `INSERT INTO
                    peti
                        (idx, good_peti_idx, bad_peti_idx, type_en, type_kr, summary, description)
                    VALUES
                        ($1,$2,$3,$4,$5,$6,$7)`,
                [
                    peti[i].idx,
                    peti[i].good_peti_idx,
                    peti[i].bad_peti_idx,
                    peti[i].type_en,
                    peti[i].type_kr,
                    peti[i].summary,
                    peti[i].description,
                ]
            );
        }
        res.send('성공');
    })
);

module.exports = petiRouter;
