const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

// IMPORT CONTROLLER
const {
  showAllArticleController,
  showSingleArticleController,
  createArticleController,
  updateArticleController,
  deleteOneArticle,
} = require("../controllers/ArticleController");

router.get("/", showAllArticleController);
router.get("/:slug", showSingleArticleController);
router.post(
  "/create",
  [
    body("title").notEmpty(),
    body("slug").notEmpty(),
    body("author").notEmpty(),
    body("description").notEmpty(),
  ],
  createArticleController
);
router.patch(
  "/update/:id",
  [
    body("title").notEmpty(),
    body("slug").notEmpty(),
    body("author").notEmpty(),
    body("description").notEmpty(),
  ],
  updateArticleController
);
router.delete("/delete/:id", deleteOneArticle);

module.exports = router;
