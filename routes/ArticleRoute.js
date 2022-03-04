const express = require("express");
const router = express.Router();

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
router.post("/create", createArticleController);
router.put("/update", updateArticleController);
router.delete("/:id", deleteOneArticle);

module.exports = router;
