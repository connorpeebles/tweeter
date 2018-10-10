$(document).ready(function() {

  $("#nav-bar button").click(function() {
    $(".new-tweet").slideToggle(function() {
      $(this).find("textarea").focus().select();
    });
  });

});