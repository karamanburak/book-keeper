//* Book Route

const router = require("express").Router()

const { BookPostController } = require("../controllers/bookController")

router
    .route("/")
    .get(BookPostController.list)

router
    .route("/post")
    .post(BookPostController.create)

router
    .route("/:id")
    .get(BookPostController.read)

module.exports = router;
