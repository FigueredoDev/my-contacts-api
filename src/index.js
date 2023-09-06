const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
  response.send('Hello World!');
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
