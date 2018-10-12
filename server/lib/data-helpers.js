"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Toggles 'tweet' between 0 and 1 likes displayed
    updateTweet: function(tweet) {
      let id = tweet._id;
      let likes = tweet.likes;
      let output;

      if (likes === 0) {
        output = 1;
      } else {
        output = 0;
      }

      db.collection("tweets").update(
        {_id: id},
        {$set:
          {
            likes: output
          }
        });
      },


    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {

      db.collection("tweets").insertOne(newTweet, (err, tweets) => {

        if (err) {
          return callback(err);
        }

        callback(null, true);
      });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      const sortNewestFirst = (a, b) => a.created_at - b.created_at;

      db.collection("tweets").find().toArray((err, tweets) => {

        if (err) {
          return callback(err);
        }

        callback(null, tweets.sort(sortNewestFirst));
      });
    }
  };
};