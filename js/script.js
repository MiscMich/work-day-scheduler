


function getCurrentDate() { let currentDate = moment().format("dddd, MMMM Do YYYY")

console.log(currentDate)

let htmlCurrentDate = document.getElementById('currentDay')

 console.log(htmlCurrentDate)

 $(htmlCurrentDate).text(currentDate)
}

let userInput;
let hourSpan;

let hour = moment().hour();

console.log(hour)

 let nineAm = $("9am")
 let tenAm = $("10am")
 let elevenAm = $("11am")
 let twelvePm = $("12pm")
 let onePm = $("13pm")
 let twoPm = $("14pm")
 let threePm = $("15pm")
 let fourPm = $("16pm")
 let fivePm = $("17pm")



function onPageLoad() {

  var load9 = JSON.parse(localStorage.getItem("09:00 AM"));
  nineAm.val(load9);

  var load10 = JSON.parse(localStorage.getItem("10:00 AM"))
  tenAm.val(load10)
  var load11 = JSON.parse(localStorage.getItem("11:00 AM"))
  tenAm.val(load11)
  var load12 = JSON.parse(localStorage.getItem("12:00 PM"))
  tenAm.val(load12)
  var load13 = JSON.parse(localStorage.getItem("1:00 PM"))
  tenAm.val(load13)
  var load14 = JSON.parse(localStorage.getItem("2:00 PM"))
  tenAm.val(load14)
  var load15 = JSON.parse(localStorage.getItem("3:00 PM"))
  tenAm.val(load15)
  var load16 = JSON.parse(localStorage.getItem("4:00 PM"))
  tenAm.val(load16)
  var load17 = JSON.parse(localStorage.getItem("5:00 PM"))
  tenAm.val(load17)
  




}



 
 function changeBackground () {
      
  $(".form-control").each(function () {
      var timeTest = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      
//      console.log(this);
      if (hour > timeTest) {
          $(this).addClass("past");
      } else if (hour < timeTest) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}

$(document).ready(function () {
  changeBackground()
onPageLoad()
getCurrentDate()



$(".saveBtn").on("click", function(){
userInput = $(this).siblings(".form-control").val().trim();
hourSpan = $(this).siblings(".input-group-prepend").text().trim();
localStorage.setItem(hourSpan, JSON.stringify(userInput));



})




})