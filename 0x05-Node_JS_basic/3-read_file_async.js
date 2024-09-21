const fs = require('fs');

const countStudents = (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, dt) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = dt.split(/\r?\n/).filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      console.log(`Number of students: ${students.length}`);
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
        console.log(`Number of students in ${f}: ${sl.length}. List: ${sl.join(', ')}`);
      }
      resolve();
    });
  });

module.exports = countStudents;
