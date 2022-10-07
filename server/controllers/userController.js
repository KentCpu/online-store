const UserService = require("../services/userService");


class UserController {
    async registration(req, res, next) {
        try {
            const { email, password, nickname } = req.body;
            const userData = await UserService.registration(email, password, nickname);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const userData = await UserService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            await UserService.logout(refreshToken);
            res.clearCookie("refreshToken");
            return res.json(200);
        } catch (e) {
            next(e);
        }
    }


    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const userData = await UserService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await UserService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL);
        } catch (e) {
            next(e);
        }
    }

    async uploadAvatar(req, res, next) {
        try {
            const id = req.body.id;
            const newAvatar = req.files.newAvatar;
            const userData = await UserService.uploadAvatar(id, newAvatar);
            return res.json(userData);
        } catch (e) {
            next(e);
        }

    }

    async deleteAvatar(req, res, next) {
        try {
            const id = req.params.id;
            const dataUser = await UserService.deleteAvatar(id);
            return res.json(dataUser);
        } catch (e) {
            next(e);
        }
    }

    async getUserData(req, res, next) {
        try {
            const id = req.params.id;
            const dataUser = await UserService.getUserData(id);
            return res.json(dataUser);
        } catch (e) {
            next(e);
        }
    }

    async saveUserData(req, next) {
        try {
            const { id, data } = req.body;
            await UserService.savePersonalUserData(id, data);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();