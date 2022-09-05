const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");
const registrationSchema = require("../validations/registrationSchema");

router.post("/registration", registrationSchema, userController.registration);
router.post("/login", userController.login);
router.post("/logout", userController.logout)
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
// router.get("/auth", authMiddleware, userController.check);



module.exports = router;