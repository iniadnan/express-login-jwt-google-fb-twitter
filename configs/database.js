let mysql2 = require("mysql2");

let connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "vue_login_jwt",
});

connection.connect((error) => {
  if (!!error) {
    console.log(error);
  }
});

module.exports = connection;
