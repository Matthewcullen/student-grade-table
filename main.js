// APIKey = xX0ypzyk
var header = document.querySelector('header');
var tableElement = document.querySelector('.table');
var pageHeader = new Pageheader(header)
var gradeTable = new GradeTable(tableElement);
var appGrades = new App(gradeTable, pageHeader);
