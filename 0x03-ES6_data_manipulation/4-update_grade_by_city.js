export default function updateStudentGradeByCity(listStudents,
  city,
  newGrades) {
  const studentsByLoc = listStudents.filter((student) => student.location === city);
  const newStudentsList = studentsByLoc.map((student) => {
    const gradeFilter = newGrades.filter((stdGrade) => stdGrade.studentId === student.id);
    let newGrade = 'N/A';
    if (gradeFilter.length > 0) {
      newGrade = gradeFilter[0].grade;
    }
    return {
      ...student,
      grade: newGrade,
    };
  });
  return newStudentsList;
}
