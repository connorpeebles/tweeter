/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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

  let avatar = tweet.user.avatars.small;
  let name = tweet.user.name;
  let handle = tweet.user.handle;
  let text = tweet.content.text;
  let ms = tweet.created_at;

  let curDate = new Date();
  let curMs = curDate.getTime();
  let msDif = curMs - ms;

  let hrDif = Math.floor(msDif / 1000 / 60 /60);
  let dayDif = Math.floor(msDif / 1000 / 60 / 60 / 24);
  let weekDif = Math.floor(msDif / 1000 / 60 / 60 / 24 / 7);
  let yearDif = Math.floor(msDif / 1000 / 60 / 60 / 24 / 7 / 52);

  let time;

  if (hrDif < 1) {
    time = "less than 1 hour ago";
  } else if (hrDif < 24) {
    time = `${hrDif} hours ago`;
  } else if (dayDif < 7) {
    time = `${dayDif} days ago`;
  } else if (weekDif < 52) {
    time = `${weekDif} weeks ago`;
  } else {
    time = `${yearDif} years ago`;
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