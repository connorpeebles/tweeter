$(function() {
  $("#cur-tweets").on("click", ".likes", function(event) {
    console.log('THIS', $(this));
    let $form = $(this).closest("form");
    console.log('FORM', $form);
    let action = $form.attr("action");
    // console.log(action);

    $form.submit();
    /**function() {
      event.preventDefault();
      $.post(action)
       .then(refreshTweets);
    });**/

  });

});