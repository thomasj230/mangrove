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

  $("#snaphover").click(function() {
    $("#snapcode").toggleClass("hidden");
    $("#snapcode-bg").toggleClass("hidden");
  //   $("#staytuned").toggle(
  //     function(){$(".section-heading").css({"visibility": "hidden"});},
  //     function(){$("#staytuned").css({"opacity": "0"});
  //   });
  });

  $("#snapcode").click(function() {
    $("#snapcode").toggleClass("hidden");
    $("#snapcode-bg").toggleClass("hidden");
  });

  $("#snapcode-bg").click(function() {
    $("#snapcode").toggleClass("hidden");
    $("#snapcode-bg").toggleClass("hidden");
  });

  $("#fish").click(function() {
    $("#fish").toggleClass("floating");
    $("#fish").toggleClass("bounce");
  });

  $('[data-toggle="tooltip"]').tooltip();

  // FIX BUG DROPDOWN MOBILE
  $('[data-toggle=dropdown]').each(function() {
    this.addEventListener('click', function() {}, false);
  });

});
