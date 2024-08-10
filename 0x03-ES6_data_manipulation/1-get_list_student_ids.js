export default function getListStudentIds(ListStudents) {
  if (ListStudents instanceof Array) {
    return [ListStudents.map((student) => student.id)];
  }
  return [];
}
