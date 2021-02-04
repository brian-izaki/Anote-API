const express = require("express"),
  routes = require('./routes'),
  app = express();

app.use(express.json());
app.use(routes)

app.listen(3000, () => {
  console.log("servidor iniciado");
});
