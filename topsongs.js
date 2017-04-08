// database - topsongs_db
// import csv
// table songs
// id integer
// artist varchar(50)
// title varchar(50)
// year integer
// total_pop float
// us_pop float
// uk_pop float
// eu_pop float
// world_pop float
//query 1: return all data for songs sung by an artist
//query 2: return all artist in to 5000 more than once
//query 3: return all data contained within a specific range (year, total, etc)
//query 4: search a specific song and return data

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "topsongs_db"
});

var query;

function search() {
    var term;

    inquirer.prompt([{
        message: "choose an option",
        type: "list",
        choices: ["Find songs from artist", "Search songs between two years", "Filter out single artists","Find specific title", "Quit"],
        name: "option"
    }]).then(function(menu) {

        switch (menu.option) {
            case "Find songs from artist":
                question("an artist.", 1);
                break;
            case "Search songs between two years":
                range();
                break;
            case "Find specific title":
                question("a title.", 2);
                break;
            case "Filter out single artists":
            	multi();
            	break;
            case "Quit":
                console.log("Goodbye.");
                break;
            default:
                console.log("Try another option.");
                search();
        }
    });
}

function question(term, num) {
    var message = "Enter " + term;
    inquirer.prompt([{
        message: message,
        type: "input",
        name: "name",
        default: "Celine Dion"
    }]).then(function(input) {

        if (num == 1) {
            searchArtist(input.name);
        } else {
            searchTitle(input.name);
        }
    });
}

function range() {
    inquirer.prompt([{
        message: "Enter the start year",
        type: "input",
        name: "startYear",
        default: 1900
    }, {
        message: "Enter the end year",
        type: "input",
        name: "endYear",
        default: 1900
    }]).then(function(input) {
        yearRange(input.startYear, input.endYear);
    });
}

function searchArtist(term) {
    var query = "select * from songs where artist = ?";
    select(query, term);
}

function searchTitle(term) {
    var query = "select * from songs where title = ?";

    select(query, term);
}

function select(query, term) {
    connection.query(query, [term], function(err, results) {
        if (err) throw err;
        console.log(results);
    });
}

function multi() {
    var query = "select artist, count(artist) from songs group by artist having count(*) > 1 order by count(artist) DESC";

    connection.query(query, function(err, results) {
        if (err) throw err;
        console.log(results);
    });
}

function yearRange(y1, y2) {
    var query = "select * from songs where year between ? and ?";

    connection.query(query, [y1, y2], function(err, results) {
        if (err) throw err;
        console.log(results);
    });
}

search();