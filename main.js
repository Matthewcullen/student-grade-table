// APIKey = xX0ypzyk
var header = document.querySelector('header');
var tableElement = document.querySelector('.table');
var form =document.querySelector('form');
var noGrades = document.querySelector('.noGrades')
var gradeForm = new GradeForm(form);
var pageHeader = new Pageheader(header);
var gradeTable = new GradeTable(tableElement, noGrades);
var appGrades = new App(gradeTable, pageHeader, gradeForm);
appGrades.start();
