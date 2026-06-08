const joi = require("joi");

const loginSchema = joi.object({
    email: joi.string().email().trim().required().messages({
        "email" : "Enter a valid email",
        "any.required" : "Email is requried"
    }),
    password: joi.string().min(8).max(64).required().messages({
        "min" : "Password must be at least 8 charactares",
        "max" : "Password must be at most 64 charactares",
        "any.required" : "Password is required"
    })
});

module.exports = {loginSchema};