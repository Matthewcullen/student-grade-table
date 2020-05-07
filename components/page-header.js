class Pageheader{
  constructor(headerElement){
    this.headerElement=headerElement;

  }
  updateAverage(newAverage){
    var averageNumber = document.querySelector('.badge');
    averageNumber.textContent=newAverage;
    console.log(newAverage)
  }
}
