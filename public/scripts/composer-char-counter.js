$(document).ready(function() {
  $(".new-tweet textarea").bind("input propertychange", function() {
    let charsLeft = 140 - $(this).val().length;
    $(this).siblings(".counter").text(charsLeft);
    if (charsLeft < 0) {
      $(this).siblings(".counter").css({color: "red"});
    } else {
      $(this).siblings(".counter").css({color: "#244751"});
    }
  });
});