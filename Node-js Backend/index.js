const express = require("express");
const app = express();
const routes = require("./routes/route");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(routes);

app.listen(3000, function () {
  console.log("Port çalışıyor");
});