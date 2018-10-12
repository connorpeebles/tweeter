// submits POST request to make a new tweet and then refreshes the cur-tweets
// section, or appropriate error message drops down

$(function() {
  let $form = $(".new-tweet form");

  $form.submit(function() {
    event.preventDefault();
    let data = $(this).serialize();
    let $counter = $(this).children(".counter");
    let counter = parseInt($counter.text());
    let $error = $(this).children(".error");

    $error.slideUp(function() {

      if (counter === 140) {
        $error.text("Please enter a tweet before submitting.")
              .slideDown();
      } else if (counter < 0) {
        $error.text(
          "Your tweet is too long.")
              .slideDown();
      } else {
        $(this).siblings("textarea").val("");
        $.post("/tweets/", data)
         .then(function() {
            refreshTweets();
            $counter.text(140);
          })
         .fail(function() {
            alert("An error occurred.");
          })
        ;
      }
    });
  });
});