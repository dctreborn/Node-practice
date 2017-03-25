var numArray = process.argv;
var length = numArray.length;

var newArray = [];

for (var i = 2; i < length; i++){
    newArray.push(numArray[i]);
}

console.log(newArray.sort(numSort));

function numSort(a, b){
    return (a - b);
}