class App {
  constructor(gradeTable,pageHeader,gradeForm){
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleCreateGradeError=this.handleGetGradesError.bind(this);
    this.handleCreateGradeSuccess=this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader=pageHeader;
    this.gradeForm=gradeForm;
  }
  handleCreateGradeSuccess(){
    this.getGrades();
  }
  handleCreateGradeError(error){
    console.error(error);
  }
  createGrade(name, course, grade){
    console.log(name,course,grade);
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
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade)
  }
}
