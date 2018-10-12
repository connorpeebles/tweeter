// refreshTweets grabs all of the tweets from the MongoDB and displays them in
// chronological order in the cur-tweets section of index.html.
// It is called when the page is loaded, when a new tweet is posted, and when
// a tweet is liked/unliked.

var refreshTweets = function () {

  // createTweetElement returns the html article which displays an individual
  // tweet

  function createTweetElement(tweet, index) {

    const avatar = tweet.user.avatars.small;
    const name = tweet.user.name;
    const handle = tweet.user.handle;
    const text = tweet.content.text;
    const ms = tweet.created_at;
    const likes = tweet.likes;

    const curDate = new Date();
    const curMs = curDate.getTime();
    const msDif = curMs - ms;

    // calculates the time difference of the current time and the time at
    // which the tweet was created, in minutes, hours, days, weeks, and years,
    // and sets 'time' according to the differences

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

    // creates the article and appends the header, body, and footer

    let $article = $("<article>").addClass("tweet");

    $article.append(`
      <header>
        <img class="avatar" src=${avatar}>
        <h3>${name}</h3>
        <span class="handle">${handle}</span>
      </header>
    `);

    let $p = $("<p>").text(text);
    $article.append($p);

    $article.append(`
      <footer>
        <form class="form-likes" method="POST" action="/tweets/${index}?_method=PUT">
          <span>${time}</span>
          <span class="icon likes">${likes}</span>
          <ion-icon class="icon likes" name="heart"></ion-icon>
          <ion-icon class="icon" name="repeat"></ion-icon>
          <ion-icon class="icon" name="flag"></ion-icon>
        </form>
      </footer>
    `);

    if (likes === 1) {
      $article.find(".likes").addClass("liked");
    }

    return $article;
  }

  // renderTweets calls createTweetElement on each tweet in tweetArr, and
  // appends each returned article to the cur-tweets html section, after
  // emptying cur-tweets

  function renderTweets(tweetArr){
    let $section = $("#cur-tweets");
    $section.empty();

    for (let i = tweetArr.length - 1; i >= 0; i--) {
      let $article = createTweetElement(tweetArr[i], i);
      $("#cur-tweets").append($article);
    }
  }

  // loadTweets obtains all the tweets from the database, and then calls
  // renderTweets on the array

  function loadTweets() {
    $.getJSON("/tweets/")
     .then(renderTweets);
  }

  loadTweets();

};

refreshTweets();