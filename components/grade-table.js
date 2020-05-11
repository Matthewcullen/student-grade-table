
class GradeTable{
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement=noGradesElement;

  }
  updateGrades(grades){
    var tbody = this.tableElement.querySelector('tbody');
    console.log(grades);
    if (grades.length === 0) {
      this.noGradesElement.classList.remove("d-none");
    }
    tbody.textContent = "";
    for(var i=0;i<grades.length;i++){
    this.renderGradeRow(grades[i], this.deleteGrade)
    }
  }
  renderGradeRow(data, deleteGrade){
    var tbody = this.tableElement.querySelector('tbody');
      var newRow = document.createElement('tr');
      var name = document.createElement('td');
      var course = document.createElement('td');
      var grade = document.createElement('td');
      var deleteData = document.createElement('td');
      var deleteButton = document.createElement('button');
      deleteButton.textContent="Delete";
      deleteButton.classList.add('btn', 'btn-danager')
      name.textContent = data.name;
      course.textContent = data.course;
      grade.textContent = data.grade;
      deleteData.append(deleteButton);
      newRow.append(name, course, grade, deleteData);
      tbody.append(newRow)
      deleteButton.addEventListener("click", function() {
        console.log(data.id);
        deleteGrade(data.id)})
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade= deleteGrade;
  }
}
