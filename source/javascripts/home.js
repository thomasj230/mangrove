$(function() {

  $("#cantattend").click(function() {
    $("#periscope").toggleClass("hidden");
    if($("#cantattend").text() == "Got it!") {
      $("#cantattend").text("Show me again!");
    }
    else {
      $("#cantattend").text("Got it!");
    }
      });

});
