const ApiError = require("../error/ApiError");
const User = require("../models/User");
const bcrypt = require("bcrypt");

class UserService {
    async registration(dataUser, next) {
        try {
            const { name, nickname, email, password, role } = dataUser;

            const candidate = await User.findOne({ email: email });
            if (candidate) {
                return next(ApiError.badRequest("Пользователь с таким email уже существует"));
            }

            const hashPassword = await bcrypt.hashPassword(password, 5);
            const user = new User({ email, hashPassword, name, nickname, role })
            return user;
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async login({ email, password }) {
        try {
            const user = await User.findOne({ email: email });
            if (!user) {
                return next(ApiError.internal("Пользователь не найден"));
            }

            let comparePassword = bcrypt.compareSync(password, user.password);
            if (!comparePassword) {
                return next(ApiError.internal("Указан неверный пароль"));
            }
            return user;
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }
}

module.exports = new UserService();