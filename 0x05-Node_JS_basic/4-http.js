const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');

  app.listen(1234, () => {
    console.log('Server is listening on port 1234');
  });
});

module.exports = app;
