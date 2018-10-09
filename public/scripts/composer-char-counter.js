$(document).ready(function() {
  $(".new-tweet textarea").bind("input propertychange", function() {
    let tweepLength = $(this).val().length;
    console.log(140 - tweepLength);
  });
});