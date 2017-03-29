function Character(name, job, gender, age, str, hp) {
	this.name = name;
	this.job = job;
	this.gender = gender;
	this.age = age;
	this.str = str;
	this.hp = hp;
	this.printStats = function () {
		// for (key in this) {
		// 	if (key != "printStats") {
		// 		console.log(key + ": " + this[key]);
		// 	};
		// }
		console.log("Name: " + this.name);
		console.log("Job: " + this.job);
		console.log("Gender: " + this.gender);
		console.log("Age: " + this.age);
		console.log("STR: " + this.str);
		console.log("HP: " + this.hp);
		console.log("");
	};
}

Character.prototype.IsAlive = function(){	
	if (this.hp > 1) {
		return true
	} else {
		return false;
	}
};

Character.prototype.Attack = function(target) {
	console.log(target.name + " HP: " + target.hp);
	console.log(this.name + " STR: " + this.str);
	target.hp -= this.str;
	console.log(target.name + " HP: " + target.hp);
	console.log(target.name + " is " + (target.IsAlive() ? "alive":"dead"));
};

Character.prototype.LevelUp = function (){
	this.age += 1;
	this.str += 5;
	this.hp += 25;
};

var char1 = new Character("John", "Farmer", "Male", 17, 99, 1);
var char2 = new Character("Steve", "Pirate", "???", 44, 1, 99);
char1.printStats();
char2.printStats();
char2.Attack(char1);