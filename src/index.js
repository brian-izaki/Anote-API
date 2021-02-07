const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('servidor iniciado');
});
