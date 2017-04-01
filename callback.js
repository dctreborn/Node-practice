// var holla = function(phrase) {
//     console.log(phrase + ", HOLLLLLAAAAA!");
// }

// var cheers = function(phrase) {
//     console.log(phrase + ", cheers!");
// }

// function greet(method) {
//     method("Hello, my friend.");
// }

// greet(holla);
// greet(cheers);

var fs = require("fs");

function fun1(str, method) {
    console.log(str);
    method();
}

function fun2(bool, method) {
    if (bool) {
        method();
    }
}

function fun3(value, method) {
    return function() {
        return method(value);
    }
}

fs.writeFile('message.txt', "uses callback");

fun1("hi", fun2(true, fun2(99, fun1(1))))