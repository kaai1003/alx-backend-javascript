const getPaymentTokenFromAPI = require('./6-payment_token');

getPaymentTokenFromAPI(true).then((result) => {
  const example = { data: 'Successful response from the API' };
  console.log(result);
  console.log(example);
});
