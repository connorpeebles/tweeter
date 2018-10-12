# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

## Final Product

#### Screenshot of the Tweeter single-page application
![Screenshot of the Tweeter](https://github.com/connorpeebles/tweeter/blob/master/public/images/tweeter.png)

#### Tweets come into focus and present new options when hovered-over, including the ability to like/unlike a tweet
![Screenshot of a tweet](https://github.com/connorpeebles/tweeter/blob/master/public/images/tweet.png)

## Features

- Displays tweets (stored using MongoDB) from newest to oldest
- Compose a new tweet and submit it to the database, which then refreshes the displayed tweets using AJAX
- Character-counter live updates as the user adds/removes text from the Compose Tweet block
- Empty tweets or tweets over the 140 character limit result in a drop-down error message when a user attempts to submit them
- Hide or show the Compose Tweet block by clicking the Compose button
- Hover over a specific tweet to bring it into focus
- Like/unlike a tweet by clicking the heart icon which appears when you hover over the tweet, which then refreshes the displayed tweets using AJAX
- Display area sizes responsively with the width of the page, and the display is also optimized for mobile

## Dependencies

- Node 5.10.x or above
- Express
- body-parser
- chance
- md5
- method-override
- MongoDB

## Getting Started

1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
3. Go to <http://localhost:8080/> in your browser.