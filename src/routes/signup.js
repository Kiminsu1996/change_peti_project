const signupRouter = require('express').Router();
const controller = require('../../controller/controller');

signupRouter.post(
    '/',
    controller(async (req, res) => {})
);

module.exports = signupRouter;
