var inquirer = require("inquirer");

var starter = [];
var sub = [];
var teamOffense;
var teamDefense;
var count = 1;
var wins = 0;
var losses = 0;
var score = 0;
var switched = false;

function Players(name, position){
	this.name = name;
	this.position = position;
	this.offense = Math.ceil(Math.random() * 10);
	this.defense = Math.ceil(Math.random() * 10);
	this.GoodGame = function () {
		//add +1 to OFF or DEF based on coinflip
		var random = Math.round(Math.random());
		if (random == 1) {
			this.offense++;
			console.log(this.name + "\'s Offense went up!");
		} else {
			this.defense++;
			console.log(this.name + "\'s Defense went up!");
		}
	};
	this.BadGame = function() {
		//add -1 to OFF or DEF based on coinflip
		var random = Math.round(Math.random());
		if (random == 1) {
			this.offense--;
			console.log(this.name + "\'s Offense went down!");
		} else {
			this.defense--;
			console.log(this.name + "\'s Defense went down!");
		}
	};
	this.PrintStats = function(){
		console.log("Name: " + this.name);
		console.log("Position: " + this.position);
		console.log("Offense: " + this.offense);
		console.log("Defense: " + this.defense);
		console.log("-----");
	};
}

function message(){
	console.log("Welcome to the Infinity! Relay Team!");
	console.log("Enter 8 crew members and their positions.");
	console.log("The first 5 will be starters. The last 3 will be subs.");
}

//create 8 players, 5 starters, 3 subs
function createPlayer(){
	if (count <= 8){
		inquirer.prompt([
			{	
				name: "player",
				message: "What is player " + count + "\'s name?"	
			},
			{
				name: "position",
				message: "What is their position?"
			}
		]).then(function(roster){
			var newPlayer = new Players(roster.player, roster.position);

			if (count <= 5) {
				starter.push(newPlayer);
				count++;
				createPlayer();
			}
			else {
				sub.push(newPlayer);
				count++;
				if (count <= 8) {
					createPlayer(); //end after 8 players
				} else {
					count = 1;
					showTeam();
				}
			}
		});
	}
	
}

function showTeam(){
	console.log("----");
	console.log("Congratulations! Here are your players.");
	showStarters();
	showSubs();
}
	
	

function showStarters(){
	console.log("\n==Starters==");
	for (var i = 0; i < starter.length; i++) {
		starter[i].PrintStats();
	}
}

function showSubs(){
	console.log("\n==Subs==");
	for (var i = 0; i < sub.length; i++) {
		sub[i].PrintStats();
	}
}

function rollDice(sides) {
	return Math.ceil(Math.random() * sides);
}

function playGame() {
	//loop 10 times, roll 2 numbers from 1-50
	//compare vs starter's DEF and OFF
	//if first num is less than sum of team's offensive stat, score++ to your team's score
	//if second number is higher than the sum of team's DEF, score--
	//after score has been changed, you may sub one starter with a sub player
	//if score is positive after game is finished, run GoodGame for all players in starters array
	//if score is 0, do nothing
	//if score is < 0, run BadGame
	//ask user if they want to play again
	//if no, display record of wins and losses
	if (count <= 10) {
		var oppdef = rollDice(50);
		var oppoff = rollDice(50);

		if (switched || count == 1){
			switched = false;
			for (var i = 0; i < starter.length; i++) {
				teamOffense += starter[i].offense;
				teamDefense += starter[i].defense;
			}
		}

		console.log("Opponent OFF: " + oppoff);
		console.log("Opponent DEF: " + oppdef);
		console.log("-----");
		console.log("Team OFF: " + teamOffense);
		console.log("Team DEF: " + teamDefense);

		if (oppdef < teamOffense) {
			score++;
			console.log("Scored!");
		}

		if (oppoff > teamDefense) {
			score--;
			console.log("Score down!");
		} 
		
		console.log("Your current score: " + score);
		count++;

		inquirer.prompt([
			{
				type: "confirm",
				message: "Change out a player?"
			}
		]).then(function(change){
			if (change){
				switched = true;
				inquirer.prompt([
					{
						type: "list",
						message: "Who do you want to sub out?",
						choices: starter,
						name: "out"
					},
					{
						type: "list",
						message: "Who do you want to sub in?",
						choices: sub,
						name: "in"
					}
				]).then(function(switch){
					starter.push(switch.in);
					sub.push(switch.out);

					starter.splice(starter.indexOf(switch.out),1);
					sub.splice(sub.indexOf(switch.in),1);

					showStarters();
					showSubs();

				});
			} else {
				console.log("No change. Next round.");
			}
			playGame();
		});

	} else {
		if (score > 0){
			console.log("Game over! GGWP! Stats went up for starters!");
		} else if (score < 0) {
			console.log("Nice try. Stats went down for starters.")
		} else {
			console.log("It's a draw!");
		}
		console.log("Play again?");
		//incomplete
	}
}

message();
createPlayer();