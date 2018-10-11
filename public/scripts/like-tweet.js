$(function() {
  $("#cur-tweets").on("click", ".likes", function(event) {
    let $form = $(this).closest("form");
    let action = $form.attr("action");

    $.post(action)
     .then(function() {
      refreshTweets();
    });

  });

});