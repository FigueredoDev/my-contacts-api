const express = require('express');

const router = require('./app/routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(router);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
