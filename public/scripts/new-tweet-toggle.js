// toggles and selects the new-tweet section when the user clicks the compose
// button

$(function() {

  $("#nav-bar button").click(function() {
    $(".new-tweet").slideToggle(function() {
      $(this).find("textarea").focus().select();
    });
  });

});