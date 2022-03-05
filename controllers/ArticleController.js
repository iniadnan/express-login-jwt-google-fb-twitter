const { validationResult } = require("express-validator");
const { v4: uuidv4 } = require("uuid");
const getDateNow = require("../helpers/dateNow");

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
  // CHECK VALIDATION
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array(),
    });
  }

  const dataToInsert = {
    id: uuidv4(),
    title: req.body.title.trim(),
    slug: req.body.slug.toLowerCase().trim(),
    author: req.body.author.trim(),
    description: req.body.description.trim(),
    date: getDateNow(),
  };

  insertArticleModal(dataToInsert, (err, results) => {
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
  deleteOneArticle,
};
