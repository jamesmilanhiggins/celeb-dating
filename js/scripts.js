$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
    var food = $("select#food").val();
    var color = $("select#color").val();

    if (food === "pie" && color === "red") {

    $("#brad").show();
  } else {
    $("#zach").show();
  }

    event.preventDefault();
  });
});
