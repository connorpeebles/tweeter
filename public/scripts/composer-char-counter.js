// live updates the character counter as the user adds/removes text from the
// new-tweet section

$(function() {

  $(".new-tweet textarea").bind("input propertychange", function() {
    let charsLeft = 140 - $(this).val().length;
    $(this).siblings(".counter").text(charsLeft);

    if (charsLeft < 0) {
      $(this).siblings(".counter").addClass("negative");
    } else {
      $(this).siblings(".counter").removeClass("negative");
    }

  });
});