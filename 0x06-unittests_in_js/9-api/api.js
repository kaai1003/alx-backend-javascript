const express = require('express');
const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;

  return res.status(200).send(`Payment methods for cart ${cartId}`);
});

app.get('/cart/:id', (req, res) => {
  return res.status(404).send();
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
