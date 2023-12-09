

// JS to show the current date

function showDay() {
    var currentDay = dayjs().format('dddd, MMMM D, YYYY');
    $("#currentDay").text(currentDay);
}
showDay();


// JS to add project to the hour time block


// $(".task-button").on('click', function() {
// var task = $("<textarea>");
// task.addClass("description");
//  task.text($(this).attr("textarea"));
//   $("#textarea").append(task);
//      });




// JS to highlight colour

var currentTime = dayjs().format('HH:mm')
var hoursOfDay = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
console.log(currentTime)


// for (var i = 0; i < timeBlock.length; i++) {

//     if hourNum <= currentTime
//     letterBtn.text(letters[i]);
//     $("#buttons").append(letterBtn);

//   }

// if hour =