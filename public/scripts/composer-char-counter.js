$(document).ready(function() {
  $(".new-tweet textarea").bind("input propertychange", function() {
    let charsLeft = 140 - $(this).val().length;
    $(this).siblings(".counter").text(charsLeft);
  });
});