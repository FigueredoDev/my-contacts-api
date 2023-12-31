const express = require('express');
require('express-async-errors');
require('dotenv').config();

const knex = require('knex');
const knexConfig = require('../knexfile');

// @ts-ignore
const db = knex(knexConfig.development);

db.migrate.latest().then(() => {
  console.log('Tabelas criadas com sucesso.');
}).catch((err) => {
  console.error('Erro ao criar tabelas:', err);
});

const routes = require('./app/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
  response.sendStatus(500);
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
