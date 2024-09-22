const http = require('http');
const fs = require('fs');

const port = 1245;
const PATH = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, dt) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const report = [];
    const lines = dt.split(/\r?\n/).filter((line) => line.trim() !== '');
    const students = lines.slice(1);
    report.push(`Number of students: ${students.length}`);
    const studentFields = {};
    for (const student of students) {
      const details = student.split(',');
      const firstName = details[0];
      const field = details[3];

      if (!studentFields[field]) {
        studentFields[field] = [];
      }
      studentFields[field].push(firstName);
    }
    for (const [f, sl] of Object.entries(studentFields)) {
      report.push(`Number of students in ${f}: ${sl.length}. List: ${sl.join(', ')}`);
    }
    resolve(report.join('\n'));
  });
});

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    const respContent = 'Hello Holberton School!';
    res.statusCode = 200;
    res.end(respContent);
  } else if (req.url === '/students') {
    const respContent = ['This is the list of our students'];

    countStudents(PATH).then((report) => {
      respContent.push(report);
      res.statusCode = 200;
      res.end(respContent.join('\n'));
    })
      .catch((error) => {
        respContent.push(error instanceof Error ? error.message : error.toString());
        res.statusCode = 200;
        res.end(respContent.join('\n'));
      });
  }
});

app.listen(port, () => {
  console.log();
});

module.exports = app;
