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

const updateArticleModal = (data, result) => {
  connection.query(
    "UPDATE articles SET title = ?, slug = ?, author = ?, description = ? WHERE id = ?",
    [
      data.title,
      data.slug,
      data.author,
      data.description,
      data.id,
    ],
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

const deleteArticleModal = (id, result) => {
  connection.query(
    "DELETE FROM articles WHERE id = ?",
    [id],
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

module.exports = {
  getAllArticleModal,
  getSingleArticleModal,
  insertArticleModal,
  updateArticleModal,
  deleteArticleModal,
};
