const Router = require("express");
const router = new Router();

const bookController = require("../controllers/bookController");

router.get("/getBooks/:name/:startIndex", bookController.getBooks);

module.exports = router;