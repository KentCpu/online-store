const UserService = require("../services/userService");
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");
const jwt = require("jsonwebtoken");

const generateJwt = (id, email, role) => {
    return jwt.sing(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: "24h" }
    );
}

class UserController {
    async registration(req, res, next) {
        try {
            await UserService(req.body);
            return token.json({ token });

            // const { img } = req.files;
            // let fileName = uuid.v4() + ".jpg";
            // img.mv(path.resolve(__dirname, "..", "static", fileName));
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }

    }

    async login(req, res) {
        try {
            const user = await UserService.login(req.body);
            const token = generateJwt(user.id, user.email, user.role);
            return res.json({ token });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async check(req, res, next) {
        try {
            const token = generateJwt(req.user.id, req.user.email, req.user.role);
            return res.json({ token });
        } catch (e) {

        }
    }
}

module.exports = new UserController();