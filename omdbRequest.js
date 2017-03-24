// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");
var array = process.argv;
var length = array.length;
var movie = "";

for (var i = 2; i < length; i++) {
  movie += array[i];
  if (i < length - 1) {
    movie += "+";
  }
}

// Then run a request to the OMDB API with the movie specified
url = 'http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&r=json';
console.log(url);
request(url, function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + JSON.parse(body).Released);
  }
});
