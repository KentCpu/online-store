const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");
const registration = require("../validations/registration");
const login = require("../validations/login");



router.post("/registration", registration.registrationSchema, registration.registrationHandler, userController.registration);
router.post("/login", login.loginSchema, login.loginHandler, userController.login);
router.post("/logout", userController.logout)
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
// router.get("/auth", authMiddleware, userController.check);


module.exports = router;