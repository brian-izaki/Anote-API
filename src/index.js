const express = require("express"),
  routeUser = require("./routes/user"),
  app = express();

app.use(express.json())
app.use(routeUser);

app.listen(3000, () => {
  console.log("servidor iniciado")
});