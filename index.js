const express = require("express");
const app = express();
const port = 3000;

// ROUTER
const AuthenticationRoute = require("./routes/AuthenticationRoute");

app.use("/api/auth/", AuthenticationRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
