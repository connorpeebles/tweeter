var refreshTweets = function () {

  function createTweetElement(tweet) {

    const avatar = tweet.user.avatars.small;
    const name = tweet.user.name;
    const handle = tweet.user.handle;
    const text = tweet.content.text;
    const ms = tweet.created_at;

    const curDate = new Date();
    const curMs = curDate.getTime();
    const msDif = curMs - ms;

    const minDif = msDif / 1000 / 60;
    const hrDif = minDif / 60;
    const dayDif = hrDif / 24;
    const weekDif = dayDif / 7;
    const yearDif = weekDif / 52;

    let time;

    if (minDif < 1) {
      time = "less than 1 minute ago";
    } else if (minDif < 2) {
      time = "1 minute ago";
    } else if (minDif < 60) {
      time = `${Math.floor(minDif)} minutes ago`;
    } else if (hrDif < 2) {
      time = "1 hour ago";
    } else if (hrDif < 24) {
      time = `${Math.floor(hrDif)} hours ago`;
    } else if (dayDif < 2) {
      time = "1 day ago";
    } else if (dayDif < 7) {
      time = `${Math.floor(dayDif)} days ago`;
    } else if (weekDif < 2) {
      time = "1 week ago";
    } else if (weekDif < 52) {
      time = `${Math.floor(weekDif)} weeks ago`;
    } else if (yearDif < 2) {
      time = "1 year ago";
    } else {
      time = `${Math.floor(yearDif)} years ago`;
    }

    let $article = $("<article>").addClass("tweet");

    $article.append(`

      <header>
        <img class="avatar" src=${avatar}>
        <h3>${name}</h3>
        <span class="handle">${handle}</span>
      </header>
      <p>${text}</p>
      <footer>
        <span>${time}</span>
        <ion-icon class="icon" name="heart"></ion-icon>
        <ion-icon class="icon" name="repeat"></ion-icon>
        <ion-icon class="icon" name="flag"></ion-icon>
      </footer>

    `);

    return $article;
  }

  function renderTweets(tweetArr){
    let $section = $("#cur-tweets");
    $section.empty();

    for (let i = tweetArr.length - 1; i >= 0; i--) {
      let $article = createTweetElement(tweetArr[i]);
      $("#cur-tweets").append($article);
    }
  }

  function loadTweets() {
    $.getJSON("/tweets/")
     .then(renderTweets);
  }

  loadTweets();

};

refreshTweets();