class GradeTable{
  constructor(tableElement){
    this.tableElement = tableElement;


  }
  updateGrades(grades){
    console.log(grades);
    var tbody = this.tableElement.querySelector('tbody');
    tbody.textcontent = "";
    for(var i = 0;i<grades.length;i++){
      var newRow = document.createElement('tr');
      var name = document.createElement('td');
      var course= document.createElement('td');
      var grade= document.createElement('td');
      name.textContent = grades[i].name;
      course.textContent = grades[i].course;
      grade.textContent = grades[i].grade;
      newRow.append(name, course, grade);
      tbody.append(newRow);
    }
  }
}
