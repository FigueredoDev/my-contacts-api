const express = require('express');
require('express-async-errors');

const routes = require('./app/routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(routes);

// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
  response.sendStatus(500);
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
