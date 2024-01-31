const { BadRequestError } = require('../../exception/exception');
const { length, regex } = require('../module/validate');

const validators = {
    id: length(5),
    pw: regex(/^[a-z0-9]{10}$/),
};

const validateSignUp = (req, res, next) => {
    for (const [key, validator] of Object.entries(validators)) {
        if (!validator(req.body[key])) {
            throw new BadRequestError();
        }
    }
    next();
};

module.exports = { validateSignUp };
