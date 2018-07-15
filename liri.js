require("dotenv").config();
//https://api.spotify.com
//http://open.spotify.com/track/6rqhFgbbKwnb9MLmUQDhG6

var request = require("keys.js");
var spotifyInit = require('spotify');
var inquiry = process.argv[2];
 
var spotify = new Spotify(keys.spotify);
spotify.search({ type: 'track', query: 'i want it that way' }, function(err, data) {
    if (!error && response.statusCode === 200) {
      console.log("The movie's rating is: " + JSON.parse(body).spotify);
  } else console.log('Error occurred: ' + err);
});