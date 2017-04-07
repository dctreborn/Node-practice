var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "s",
    database: "ice_creamDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

var query = "select * from scoops";
connection.query(query, function(err, results) {
    if (err) throw err;
    console.log(results);
});

var addTitle;
var addGenre;
var addArtist;

inquirer.prompt([{
    message: "enter title to add",
    name: "addTitle"
}, {
    message: "enter genre to add",
    name: "addGenre"
}, {
    message: "enter artist to add",
    name: "addArtist"
}]).then(function(album) {
    addGenre = album.addGenre;
    addTitle = album.addTitle;
    addArtist = album.addArtist;

    var create = "insert into scoops set ?";
    connection.query(create, {
        artist: addArtist,
        genre: addGenre,
        title: addTitle
    }, function() {

    });

    query = "select * from scoops";
    connection.query(query, function(err, results) {
        if (err) throw err;
        console.log(results);
    });
});

// query = "select * from scoops where artist = ?";
// connection.query(query, ["queen"], function(err, results){
// 	if (err) throw err;
// 	console.log(results);
// });

// connection.query("insert into scoops set ?",{artist: "ACDC", genre: "metal", title: "stairway to heaven"}, function(err, results){
// 	if (err) throw err;
// 	console.log(results);
// });

//create


// //update
// var update = "update scoops set ? where ? ";
// connection.query(update, [{artist: "DMC"},{title: "rep 10 per sec"}], function(){

// });

// //delete
// var remove = "delete from scoops where ?";
// connection.query(remove, [{artist: "queen"}], function(){

// });

//read