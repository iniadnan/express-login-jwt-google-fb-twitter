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
const insertArticleModal = (data, result) => {};
const updateArticleModal = (data, result) => {};
const deleteArticleModal = (id, result) => {};

module.exports = {
  getAllArticleModal,
  getSingleArticleModal,
  insertArticleModal,
  updateArticleModal,
  deleteArticleModal,
};
