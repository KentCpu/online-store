const Router = require("express");
const router = new Router();

const bookController = require("../controllers/bookController");

router.get("/getBooks/:name/:startIndex", bookController.getBooks);
router.get("/getBooks/:id", bookController.getBook);

module.exports = router;