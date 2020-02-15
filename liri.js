require("dotenv").config();
require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api'); //Using the Spotify api and getting the key from keys.js
var spotify = new Spotify(keys.spotify);



var axios = require('axios'); //To get the information from the APIs for movie and concert-this

var fs = require('fs'); //To read the random.txt file for the do-what-it-says function





var spotify = new Spotify(keys.spotify);

spotify.search({ type: 'track', query: 'All the Small Things', limit: 1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    console.log(data.tracks.items[0]); 
});