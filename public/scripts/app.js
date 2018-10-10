(function () {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  function createTweetElement(tweet) {

    const avatar = tweet.user.avatars.small;
    const name = tweet.user.name;
    const handle = tweet.user.handle;
    const text = tweet.content.text;
    const ms = tweet.created_at;

    const curDate = new Date();
    const curMs = curDate.getTime();
    const msDif = curMs - ms;

    const hrDif = msDif / 1000 / 60 /60;
    const dayDif = hrDif / 24;
    const weekDif = dayDif / 7;
    const yearDif = weekDif / 52;

    let time;

    if (hrDif < 1) {
      time = "less than 1 hour ago";
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

    for (let tweet of tweetArr) {
      let $article = createTweetElement(tweet);
      $("#cur-tweets").append($article);
    }
  }

  renderTweets(data);

})();