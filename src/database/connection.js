const { Client } = require('pg');
require('dotenv').config();

const PORT = parseInt(process.env.DB_PORT || '5432', 10);

const client = new Client({
  host: process.env.DB_HOST,
  port: PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
