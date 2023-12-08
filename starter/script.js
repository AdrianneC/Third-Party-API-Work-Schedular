

// JS to show the current date

function showDay() {
    var currentDay = dayjs().format('dddd, MMMM D, YYYY');
    $("#currentDay").text(currentDay);
}
showDay();
