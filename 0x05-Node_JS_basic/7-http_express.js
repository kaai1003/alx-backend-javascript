const express = require('express');
const fs = require('fs');

const PATH = process.argv.length > 2 ? process.argv[2] : '';
const port = 1245;
const app = express();

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

app.get('/', (_, response) => {
  response.set('Content-type', 'text/plain');
  response.send('Hello Holberton School!');
});

app.get('/students', (_, response) => {
  const resContent = ['This is the list of our students'];
  countStudents(PATH).then((report) => {
    resContent.push(report);
    response.set('Content-type', 'text/plain');
    response.send(resContent.join('\n'));
  })
    .catch((error) => {
      resContent.push(error instanceof Error ? error.message : error.toString());
      response.set('Content-type', 'text/plain');
      response.send(resContent.join('\n'));
    });
});

app.listen(port, () => {
  console.log('Server listening on PORT 1245');
});

module.exports = app;
