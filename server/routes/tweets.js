
"use strict";

const userHelper    = require("../lib/util/user-helper")

const express       = require('express');
const tweetsRoutes  = express.Router();

module.exports = function(DataHelpers) {

  tweetsRoutes.get("/", function(req, res) {
    DataHelpers.getTweets((err, tweets) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(tweets);
      }
    });
  });

  tweetsRoutes.post("/", function(req, res) {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }

    const user = req.body.user ? req.body.user : userHelper.generateRandomUser();
    const tweet = {
      user: user,
      content: {
        text: req.body.text
      },
      created_at: Date.now(),
      likes: 0,
      retweets: 0
    };

    DataHelpers.saveTweet(tweet, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send();
      }
    });
  });

  tweetsRoutes.post("/:index", function(req, res) {
    const index = req.params.index;
    console.log(index);

    DataHelpers.getTweets((err, tweets) => {
      let tweet = tweets[index];

      DataHelpers.updateTweet(tweet);

    });

    res.status(200).send();


    // const tweets = DataHelpers.getTweets((err, tweets) => {
    //   return json(tweets[index]);
    // });
    // console.log("index:", index);
    // console.log("tweets:", typeof(tweets));

  });

  return tweetsRoutes;
};