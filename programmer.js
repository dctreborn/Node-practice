function Programmer(name, title, age, language) {
	this.name = name;
	this.title = title;
	this.age = age;
	this.language = language;
	this.printInfo = function() {
		console.log("Name: " + this.name);
		console.log("Title: " + this.title);
		console.log("Age: " + this.age);
		console.log("Fave Language: " + this.language);
	};
}

var john = new Programmer("John Smith", "Handler", "17", "Yuki N.");

john.printInfo();