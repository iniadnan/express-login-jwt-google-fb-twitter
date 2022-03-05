// IMPORT DATABASE
const connection = require("../configs/database");

const getAllArticleModal = (result) => {
  connection.query(
    "SELECT * FROM articles ORDER BY date DESC",
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

const getSingleArticleModal = (slug, result) => {
  connection.query(
    "SELECT * FROM articles WHERE slug = ?",
    [slug],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

const insertArticleModal = (data, result) => {
  connection.query(
    "INSERT INTO articles (id, title, slug, author, description, date) VALUES (?, ?, ?, ?, ?, ?)",
    [data.id, data.title, data.slug, data.author, data.description, data.date],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

const updateArticleModal = (data, result) => {};

const deleteArticleModal = (id, result) => {};

module.exports = {
  getAllArticleModal,
  getSingleArticleModal,
  insertArticleModal,
  updateArticleModal,
  deleteArticleModal,
};
