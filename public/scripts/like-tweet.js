// makes a PUT request to like/unlike a tweet when the user clicks the heart
// icon

$(function() {
  $("#cur-tweets").on("click", ".likes", function(event) {
    let $form = $(this).closest("form");
    let action = $form.attr("action");

    $.ajax({url: action, type: "PUT"})
     .then(function() {
        return refreshTweets();
      })
    ;

  });
});