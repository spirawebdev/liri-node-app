// Node Requirements
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api'); //Using the Spotify api and getting the key from keys.js
var spotify = new Spotify(keys.spotify);
var axios = require('axios'); //To get the information from the APIs for movie and concert-this
var fs = require('fs'); //To read the random.txt file for the do-what-it-says function
//////////////////////////////

//vars to capture user inputs.
var optionSelect = process.argv[2]; 
var searchTerm = process.argv[3];
////////////////////////////

// Run Function
UserInputs(optionSelect, searchTerm);
/////////////
// Get user input
function UserInputs (optionSelect, searchTerm){
    switch (optionSelect) {
    case 'concert-this':
        displayConcert(searchTerm);
        break;
    case 'spotify-this-song':
        displaySong(searchTerm);
        break;
    case 'movie-this':
        displayMovie(searchTerm);
        break;
    case 'do-what-it-says':
        doTheThing();
        break;
    default: 
        console.log("Please Input one of these commands: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says")
    }
}
//////////////////////////////////////

// Spotify Function
var spotify = new Spotify(keys.spotify);

function displaySong(searchTerm) {

spotify.search({ type: 'track', query: searchTerm, limit: 0 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    console.log("Artist's Name: " + data.tracks.items[0].album.artists[0].name); 
    console.log("Album Name: " + data.tracks.items[0].album.name); 
    console.log("Preview URL: " + data.tracks.items[0].preview_url); 
    console.log("Song Name: " + data.tracks.items[0].album.artists[0].name); 
    
});

};
//////////////////////////////////////

// Do what it says
function doTheThing() {
    var fs = require('fs')
    , filename = process.argv[2];
    console.log("node liri.js " + fs[2])
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
      }
    console.log('OK: ' + filename);
    console.log(data)
  });
}
/////////////////////////////////////




















////////////////////////////////