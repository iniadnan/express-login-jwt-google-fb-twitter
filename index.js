const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors')

// USE CORS
app.use(cors())

// BODY-PARSER
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTER
const AuthenticationRoute = require("./routes/AuthenticationRoute");
const ArticleRoute = require("./routes/ArticleRoute");

app.use("/api/auth/", AuthenticationRoute);
app.use("/api/article/", ArticleRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
