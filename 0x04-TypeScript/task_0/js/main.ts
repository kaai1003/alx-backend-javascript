interface Student {
  firstName: String;
  lastName: String;
  age: Number;
  location: String;
}

const student1: Student = {
  firstName: 'aimad',
  lastName: 'kacem',
  age: 34,
  location: 'Morocco',
};

const student2: Student = {
  firstName: 'adam',
  lastName: 'alouani',
  age: 13,
  location: 'USA',
};

const studentsList: Array<Student> = [student1, student2];

