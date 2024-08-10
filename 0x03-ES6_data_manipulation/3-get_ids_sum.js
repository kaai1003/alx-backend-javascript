export default function getStudentIdsSum(ListStudents) {
  return ListStudents.reduce((sum, student) => sum + student.id, 0);
}
