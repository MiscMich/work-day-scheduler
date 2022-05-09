
getCurrentDate()

function getCurrentDate() { let currentDate = moment().format("dddd, MMMM Do YYYY")

console.log(currentDate)

let htmlCurrentDate = document.getElementById('currentDay')

 console.log(htmlCurrentDate)

 $(htmlCurrentDate).text(currentDate)
}

let hour = moment().hour()

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
 
 function background () {
      
  $(".form-control").each(function () {
      var timeTest = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      console.log(timeTest);
      console.log(hour);
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


background()


