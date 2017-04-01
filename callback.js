var holla = function(phrase) {
    console.log(phrase + ", HOLLLLLAAAAA!");
}

var cheers = function(phrase) {
    console.log(phrase + ", cheers!");
}

function greet(method) {
    method("Hello, my friend.");
}

greet(holla);
greet(cheers);