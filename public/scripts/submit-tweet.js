$(function() {
  let $form = $(".new-tweet form");

  $form.submit(function() {
    event.preventDefault();
    let data = $(this).serialize();
    let $counter = $(this).children(".counter");
    let counter = parseInt($counter.text());

    if (counter === 140) {
      alert("Please enter a tweet before submitting.");
    } else if (counter < 0) {
      alert("Your tweet is too long.");
    } else {
      $(this).children("textarea").val("");
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