const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile) {
    throw new Error('Cannot load the database');
  }
  const dt = fs.readFileSync(path, 'utf-8');
  const lines = dt.split(/\r?\n/)
    .filter((line) => line.trim() !== '');
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
};

module.exports = countStudents;
