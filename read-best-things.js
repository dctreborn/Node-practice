var fs = require("fs");

fs.readFile("best_things_ever.txt","utf8", function(err, data){

    var arrayData = data.split(",");

    for (var i = 0; i < arrayData.length; i++){
        console.log(arrayData[i].trim());
    }
})