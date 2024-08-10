export default function getListStudentIds(ListStudents) {
  let listIds = [];
  if (ListStudents instanceof Array) {
    listIds = ListStudents.map((student) => student.id);
  }
  return listIds;
}
