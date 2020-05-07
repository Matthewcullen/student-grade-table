class App {
  constructor(gradeTable,pageHeader){
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.gradeTable = gradeTable;
    this.pageHeader=pageHeader;
  }
  handleGetGradesError(error){
    console.log(error);
  }
  handleGetGradesSuccess(grades){
    console.log(grades);
    this.gradeTable.updateGrades(grades);
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
  }
}
