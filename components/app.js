class App {
  constructor(gradeTable,pageHeader,gradeForm){
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleCreateGradeError=this.handleGetGradesError.bind(this);
    this.handleCreateGradeSuccess=this.handleGetGradesSuccess.bind(this);
    this.createGrade=this.createGrade.bind(this);
    this.handleDeleteGradeError=this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess=this.handleDeleteGradeSuccess.bind(this);
    this.deleteGrade=this.deleteGrade.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader=pageHeader;
    this.gradeForm=gradeForm;
  }
  handleDeleteGradeSuccess(){
    this.getGrades();
  }
  handleDeleteGradeError(error){
    console.error(error)
  }
  deleteGrade(id){
    $.ajax({
      method: "DELETE",
      url: `https://sgt.lfzprototypes.com/api/grades/${id}`,
      data: "none",
      headers: { "X-Access-Token": "xX0ypzyk" },
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    })

  }
  handleCreateGradeSuccess(){
    this.getGrades();
  }
  handleCreateGradeError(error){
    console.error(error);
  }
  createGrade(name, course, grade){
    $.ajax({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      headers: {
        "X-Access-Token": "xX0ypzyk"
      },
      success: this.handleCreateGradesSuccess,
      error: this.handleCreateGradesError
    })
  }
  handleGetGradesError(error){
    console.log(error);
  }
  handleGetGradesSuccess(grades){
    console.log(grades);
    this.gradeTable.updateGrades(grades);
    var sum = 0;
    for(var i=0;i<grades.length;i++){
      sum+=grades[i].grade;
    }
    var average = (sum/grades.length)
    this.pageHeader.updateAverage(average);
  }
  getGrades(){
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      data: "none",
      headers:{
        "X-Access-Token":"xX0ypzyk"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }
  start(){
    this.gradeTable.onDeleteClick(this.deleteGrade);
    this.gradeForm.onSubmit(this.createGrade);
    this.getGrades();
  }
}
