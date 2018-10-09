let charCount = 140;

$(document).ready(function() {
  $(".new-tweet textarea").keypress(function() {
    charCount--;
    console.log(charCount);
  });
});

$(document).ready(function() {
  $(".new-tweet textarea").keydown(function(e) {
    if (e.keyCode === 8 && charCount < 140) {
      charCount++;
      console.log(charCount);
    }
  });
});