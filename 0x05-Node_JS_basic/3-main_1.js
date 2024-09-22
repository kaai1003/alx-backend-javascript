const countStudents = require('./3-read_file_async');

countStudents("database.csv")
    .then(() => {
    })
        .catch((error) => {
    });
console.log("After!");