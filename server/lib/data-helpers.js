"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    updateTweet: function(tweet) {
      let id = tweet._id;
      let likes = tweet.likes + 1;

      db.collection("tweets").update(
        {_id: id},
        {$set:
          {
            likes: likes
          }
        });
      console.log(tweet);
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