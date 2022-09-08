const {validationResult} = require("express-validator");
const {body} = require("express-validator");
const userModel = require("../models/User");
const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");

const login = [
    body('email')
        .exists({checkFalsy: true})
        .withMessage("Required field")
        .bail()
        .isEmail()
        .withMessage("Incorrect e-mail"),
    body('password')
        .exists({checkFalsy: true})
        .withMessage("Required field")
        .bail()
        .isLength({
            min: 6
        })
        .withMessage("Password must contain at least 6 characters")
        .bail()
        .isLength({
            max: 20
        })
        .withMessage("Password can contain max 20 characters"),
];

const loginHandler = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) {
            return next(ApiError.badRequest("Некорректные данные при авторизации", errors));
        }

        const {email, password} = req.body;
        const candidate = await userModel.findOne({email: email});
        let comparePassword = candidate ? await bcrypt.compare(password, candidate?.password) : false;
        if (!candidate || !comparePassword) {
            const error = {
                param: "incorrectData",
                msg: "Incorrect email or password",
            };
            errors.push(error);
            return next(ApiError.badRequest("Некорректные данные при авторизации", errors));
        }
        next();
    }catch (e) {
        next(e);
    }
}

module.exports.loginSchema = login;
module.exports.loginHandler = loginHandler;