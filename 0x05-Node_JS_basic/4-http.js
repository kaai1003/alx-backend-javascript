const http = require('http');

const app = http.createServer();
app.on('request', (_, response) => {
  const outPut = 'Hello Holberton School!';
  response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Content-Length', outPut.length);
  response.statusCode = 200;
  response.write(Buffer.from(outPut));
});

app.listen(1234, 'localhost', () => {
  console.log('Server is listening on port 1234');
});

module.exports = app;
