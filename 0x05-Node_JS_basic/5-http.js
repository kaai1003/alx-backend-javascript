const http = require('http');
const countStudents = require('./3-read_file_async');
const port = 1245;

const app = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        const path = process.argv[2];
        res.statusCode = 200;
        res.end(`This is the list of our students\n${countStudents(path)}`);
    }
});

app.listen(port, () => {
    console.log()
})

module.exports = app;
