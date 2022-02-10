$(document).ready(() => {
  // Add event listener
  $(".saveBtn").on("click", function () {
    const value = $(this).siblings(".description").val();
    const time = $(this).parent().attr("id");

    // set storage
    localStorage.setItem(time, value);
  });

  moment();

  // display current day
  $("#currentDay").text(moment().format("MMMM Do YYYY"));

  function plannerUpdate() {
    // loop over time blocks
    $(".time-block").each(function () {
      const currentHour = moment().hours();

      const scheduleHour = $(this).attr("id");

      if (currentHour > scheduleHour) {
        $(this).addClass("past");
      } else if (currentHour === scheduleHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  plannerUpdate();
  setInterval(plannerUpdate, 1000);

  // get saved data from localStorage
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
});
