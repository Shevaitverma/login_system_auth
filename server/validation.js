const Joi = require('@hapi/joi');

//------ regester validation------
const regesterValidation = data => {
    const schema = Joi.object({
        registerName: Joi.string().min(5).required(),
        registerEmail: Joi.string().min(6).required().email(),
        registerPassword: Joi.string().min(6).required()
    });
    return schema.validate(data);
}

//-------login validation-------ug
const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
}

module.exports.regesterValidation = regesterValidation;
module.exports.loginValidation = loginValidation;