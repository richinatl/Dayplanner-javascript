$(document).ready(() => {
  // Add event listener
  $(".saveBtn").on("click", function () {
    const value = $(this).siblings(".description").val();
    const time = $(this).parent().attr("id");

    // set storage
    localStorage.setItem(time, value);
  });
  // create function for current time and changes
  function plannerUpdate() {
    let currentHour = moment();

    // loop for time blocks
    $(".time-block").each(function () {
      const scheduleHour = parseInt($(this).attr("id").split("-")[1]);

      // Change class for css
      if (scheduleHour < currentHour) {
        $(this).addClass("past");
      } else if (scheduleHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  setInterval(plannerUpdate, 1000);

  // get saved data from localStorage
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  // display current day
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
