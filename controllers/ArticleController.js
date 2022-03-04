// IMPORT MODEL
const {
  getAllArticleModal,
  getSingleArticleModal,
  insertArticleModal,
  updateArticleModal,
  deleteArticleModal,
} = require("../models/ArticleModel");

const showAllArticleController = (req, res) => {
  getAllArticleModal((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

const showSingleArticleController = (req, res) => {
  getSingleArticleModal(req.params.slug, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

const createArticleController = (req, res) => {
  insertArticleModal((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

const updateArticleController = (req, res) => {
  updateArticleModal((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

const deleteOneArticle = (req, res) => {
  deleteArticleModal((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

module.exports = {
  showAllArticleController,
  showSingleArticleController,
  createArticleController,
  updateArticleController,
  deleteOneArticle
};
