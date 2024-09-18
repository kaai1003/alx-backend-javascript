const express = require('express');

const app = express();

app.get('/', (_, response) => {
  response.send('Hello Holberton School!');
});

app.listen(1234, () => {
  console.log('Server listening on PORT 1234');
});

module.exports = app
