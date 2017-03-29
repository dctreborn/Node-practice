function DigiPal(name) {
	this.name = name;
	this.hungry = false;
	this.sleepy = false;
	this.bored = true;
	this.age = 0;
	this.feed = function(){
		if (this.hungry){
			console.log("That was yummy.")
			this.hungry = false;
		} else {
			console.log("Not thanks! I'm full.")
		}
	};
	this.play = function(){
		if (this.bored) {
			console.log("YAY! Let's play!")
			this.bored = false;
		} else {
			console.log("new phone, who dis");
		}
	};
	this.sleepy = function() {
		if (this.sleepy) {
			console.log("ZZZZZ");
			this.sleepy = false;
			this.increaseAge();
		} else {
			console.log("Bruh, I'm WOKE!");
		}
	}
	this.increaseAge = function() {
		this.age += 1;
		console.log("Happy Birthday to me! I am " + this.age + " minuteyears old.");
	}
};

var dog = new DigiPal("Spot");
dog.bark = function () {
	console.log("Woof woof");
};
dog.outside = false;
dog.goOutside = function () {
	if (this.outside) {
		console.log("we already outside");
	} else {
		console.log("yay");
		this.bark();
	}
};
dog.goInside = function () {
	if (this.outside) {
		console.log("Do we have to?");
	} else {
		console.log("We're already inside");
	}
};

var cat = new DigiPal("Neko");
cat.HouseCondition = 100;
cat.meow = function() {
	console.log("meow meow");
};
cat.destroyFurniture = function() {
	if (this.HouseCondition > 0) {
		this.HouseCondition -= 10;
		console.log("MUAHAHAHAHAHA TAKE TAHT FURNITURE!");
		this.bored = false;
		this.sleepy = true;
	} else {
		console.log("House is already destroyed.");
	}
};
cat.buyNewFurniture = function () {
	this.HouseCondition += 50;
	console.log("Are you sure about that?");
};

var command = process.argv[2];

cat[command]();