const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 7865;

app.use(bodyParser.json());

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

app.get('/available_payments', (req, res) => {
  return res.status(200).send({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  const userName = req.body.userName;
  if (userName) {
    return res.status(200).send(`Welcome ${userName}`);
  }
  return res.status(400).send('Username Missing!!');
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
