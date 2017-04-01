// CLI application
// 	1st argument, user/admin
// 	if admin, log out all previous searches
// 	if user, the second argument is name of user, third is zipcode

// 		return weather information from Weather-js

var args = process.argv;
var user = args[2] || "";
var name = args[3] || "John Smith";
var zip = args[4] || 999999;

var weather = require("weather-js");
var fs = require("fs");
var WeatherAdmin = new WeatherAdmin();

if (user.toLowerCase() == "user") {
    WeatherAdmin.newUserSearch(name, zip);
} else if (user.toLowerCase() == "admin") {
    WeatherAdmin.getData();
} else {
    console.log("Not a valid input.");
}

function WeatherAdmin() {
    this.newUserSearch = function(name, location) {
        var user = new userSearch(name, location);
        user.writeData();
        user.getWeather(location);
    };
    this.getData = function() {
        fs.readFile("log.txt", "utf8", function(err, data) {
            if (err) throw err;

            console.log(data);
        });
    };
}

function userSearch(name, zip) {
    this.name = name;
    this.zip = zip;
    this.date = Date.now()
    this.getWeather = function(location) {
        weather.find({
            search: location,
            degreeType: 'F'
        }, function(err, result) {
            if (err) console.log(err);

            console.log(JSON.stringify(result, null, 2));
        });
    };
    this.writeData = function() {
        fs.appendFile("log.txt", this.date + ": " + this.name + ", " + this.zip + "\n", function(err) {
            if (err) throw err;

            console.log("Here is your search!")
        });
    };
}