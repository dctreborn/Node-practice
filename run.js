var bands = require("./bands.js").bands;

var bandType = process.argv[2] || "";

if (bandType == ""){
	for (var key in bands) {
		console.log("A " + key + " band is " + bands[key] + ".");
	}
} else {
	if (bandType in bands) {
		console.log("A " + bandType + " band is " + bands[bandType] + ".");
	} else {
		console.log("No currently listed bands.");
	}
}