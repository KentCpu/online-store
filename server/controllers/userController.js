
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

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
            const { name, nickname, email, password, role } = req.body;

            const candidate = await User.findOne({ email: email });
            if (candidate) {
                return next(ApiError.badRequest("Пользователь с таким email уже существует"));
            }

            const hashPassword = await bcrypt.hashPassword(password, 5);
            const user = new User({ email, hashPassword, name, nickname, role })
            const token = generateJwt(user.id, user.email, user.role);

            return token.json({ token });

            // const { img } = req.files;
            // let fileName = uuid.v4() + ".jpg";
            // img.mv(path.resolve(__dirname, "..", "static", fileName));
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }

    }

    async login(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return next(ApiError.internal("Пользователь не найден"));
        }

        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal("Указан неверный пароль"));
        }

        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token });
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({ token });
    }
}

module.exports = new UserController();