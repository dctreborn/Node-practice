var inquirer = require("inquirer");
var mysql = require("mysql");

var item;
var bid;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "items"
});

function menu() {
    inquirer.prompt([{
        type: "list",
        message: "Choose a function",
        choices: ["Post item", "Bid on item", "Quit"],
        name: "option"
    }]).then(function(menu) {
        options(menu.option);
    });
}

function options(command) {

    switch (command) {
        case "Post item":
            postItem();
            break;
        case "Bid on item":
            bidOnItem();
            break;
        default:
            console.log("Goodbye");
    }
}

function postItem() {
    inquirer.prompt([
    {
        type: "input",
        message: "What item do you want to post?",
        name: "item"
    },
    {
        type: "input",
        validate: function(input) {
            // Declare function as asynchronous, and save the done callback 
            var done = this.async();

            // Do async stuff 
            setTimeout(function() {
                if (typeof input !== 'number') {
                    // Pass the return value in the done callback 
                    done('You need to provide a number');
                    return;
                }
                // Pass the return value in the done callback 
                done(null, true);
            }, 3000);
        },
        message: "What is the starting bid?",
        name: "bid"
    }
    ]).then(function(post){
    	connection.query("insert into items set ?", {item: post.item, bid: post.bid}, function(err, results){
    		if (err) throw err;
    		menu();
    	});
    });
}

function bidOnItem() {
	var itemArray;

	connection.query("select * from items", function(err, results){
		if (err) throw err;

		for (var i = 0; i < itemArray.length; i++) {
			console.log("Item: " + itemArray[i].item);
			console.log("Bid: " + itemArray[i].bid);
			console.log("-----");

			itemArray.push("Item: " + itemArray[i].item);
		}
	});

	inquirer.prompt([
		{
			type: "rawlist",
			message: "Choose an item to bid on",
			choices: itemArray,
			name: "choice"
		}
	]).then(function(item){
		//to be continued
	});
}