const ApiError = require("../error/ApiError");
const userModel = require("../models/User");
const bcrypt = require("bcrypt");
const mailService = require("./mailService");
const tokenService = require("./tokenService");
const UserDto = require("../dtos/user-dto");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");


class UserService {
    async registration(email, password, nickname) {
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();
        const user = await userModel.create({ email, nickname, password: hashPassword, activationLink });
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveRefreshToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto };
    }

    async login(email) {
        const user = await userModel.findOne({ email: email });
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveRefreshToken(userDto.id, tokens.refreshToken);
        return { user: userDto, ...tokens };

    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.unauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData && !tokenFromDb) {
            throw ApiError.unauthorizedError();
        }
        const user = await userModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });

        await tokenService.saveRefreshToken(userDto.id, tokens.refreshToken);
        return { user: userDto, ...tokens };
    }

    async activate(activationLink) {
        const user = await userModel.findOne({ activationLink });
        if (!user) {
            throw ApiError.badRequest(`Неккоректная ссылка активации`);
        }
        user.isActivated = true;
        await user.save();
    }

    async uploadAvatar(id, newAvatar) {
        const user = await userModel.findById(id);
        if (!user) {
            throw ApiError.badRequest(`Пользователь не найден`);
        }

        if (!newAvatar) {
            throw ApiError.badRequest(`Изображение аватара не поступило на сервер`);
        }

        if (user.avatar) {
            fs.unlink(path.resolve(__dirname, "..", "static", user.avatar), function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Старый аватар удален");
                }
            });
        }

        let fileNameAvatar = uuid.v4();
        user.avatar = fileNameAvatar;
        newAvatar.mv(path.resolve(__dirname, "..", "static", fileNameAvatar));
        await user.save();

        return new UserDto(user);
    }

    async deleteAvatar(id) {
        const user = await userModel.findById(id);
        if (!user) {
            throw ApiError.badRequest(`Пользователь не найден`);
        }

        if (user.avatar) {
            fs.unlink(path.resolve(__dirname, "..", "static", user.avatar), function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Старый аватар удален");
                }
            });
            user.avatar = undefined;
        }

        await user.save();
        return new UserDto(user);
    }

    async getUserData(id) {
        const user = await userModel.findById(id);
        const { name, surname, patronymic, dateBirth } = user;
        return { name, surname, patronymic, dateBirth };
    }

    async savePersonalUserData(id, data) {
        const { name, surname, patronymic, dateBirth } = data;
        const user = await userModel.findById(id);
        if (!user) {
            throw ApiError.badRequest(`Пользователь не найден`);
        }

        user.name = name;
        user.surname = surname;
        user.patronymic = patronymic;
        user.dateBirth = dateBirth;
        await user.save();
    }
}

module.exports = new UserService();