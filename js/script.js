
//gets current date from moment and displays it at the top

function getCurrentDate() { let currentDate = moment().format("dddd, MMMM Do YYYY")

console.log(currentDate)

let htmlCurrentDate = document.getElementById('currentDay')

 console.log(htmlCurrentDate)

 $(htmlCurrentDate).text(currentDate)
}
//all variables
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


 //loads page with local storage info if available
load()

function load() {

  var load9 = JSON.parse(localStorage.getItem("9:00 AM"));
  console.log(load9)
   document.getElementById("9am").innerHTML = load9

  var load10 = JSON.parse(localStorage.getItem("10:00 AM"))
  document.getElementById("10am").innerHTML = load10
  
  var load11 = JSON.parse(localStorage.getItem("11:00 AM"))
  document.getElementById("11am").innerHTML = load11
  
  var load12 = JSON.parse(localStorage.getItem("12:00 PM"))
  document.getElementById("12pm").innerHTML = load12
  
  var load13 = JSON.parse(localStorage.getItem("1:00 PM"))
  document.getElementById("13pm").innerHTML = load13

  
  
  var load14 = JSON.parse(localStorage.getItem("2:00 PM"))
  document.getElementById("14pm").innerHTML = load14
  
 
  var load15 = JSON.parse(localStorage.getItem("3:00 PM"))
  
  document.getElementById("15pm").innerHTML = load15
  var load16 = JSON.parse(localStorage.getItem("4:00 PM"))
  
  document.getElementById("16pm").innerHTML = load16
  var load17 = JSON.parse(localStorage.getItem("5:00 PM"))
  document.getElementById("17pm").innerHTML = load17
  




}



//changes background color for time blocks depending on time of day
 
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

//on document load, runs all functions andd also adds click functionality to buttons
$(document).ready(function () {
  load()
  changeBackground()

getCurrentDate()



$(".saveBtn").on("click", function(){
userInput = $(this).siblings(".form-control").val().trim();
hourSpan = $(this).siblings(".input-group-prepend").text().trim();
localStorage.setItem(hourSpan, JSON.stringify(userInput));



})

$("#clearButton").on("click", function(){
  localStorage.clear()
  load()
  changeBackground()
})


})