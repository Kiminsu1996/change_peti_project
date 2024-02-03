const signupRouter = require('express').Router();
const controller = require('../../controller/controller');
const { validateSignUp } = require('../middleware/requestValidate');

signupRouter.post(
    '/',
    validateSignUp,
    controller(async (req, res) => {
        const { id, pw } = req.body;
        res.status(200).send('성공');
    })
);
module.exports = signupRouter;
