const express = require("express"),
  routeUser = require("./routes/user"),
  routeToken = require("./routes/token"),
  app = express();

app.use(express.json());
app.use(routeUser);
app.use(routeToken);

app.listen(3000, () => {
  console.log("servidor iniciado");
});
