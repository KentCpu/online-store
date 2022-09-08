const {body} = require("express-validator");
const userModel = require("../models/User");
const {validationResult} = require("express-validator");
const ApiError = require("../error/ApiError");

const customValidation = (key, value, errorMessage) => {
    return userModel.findOne({[key]: value})
        .then(user => {
            if (user) {
                return Promise.reject(errorMessage);
            }
        });
}

const registration = [
    body("nickname")
        .exists({checkFalsy: true})
        .withMessage("Required field")
        .bail()
        .custom(nicknameValue => customValidation("nickname", nicknameValue, "This nickname is already registered")),
    body('email')
        .exists({checkFalsy: true})
        .withMessage("Required field")
        .bail()
        .isEmail()
        .withMessage("Incorrect e-mail")
        .bail()
        .custom(email => customValidation("email", email, "This e-mail is already registered")),
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

const registrationHandler = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.badRequest("Некорректные данные при регистрации", errors.array()));
        }
        next();
    } catch (e) {
        next(e);
    }
}

module.exports.registrationSchema = registration;
module.exports.registrationHandler = registrationHandler;