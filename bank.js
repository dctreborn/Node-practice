var fs = require('fs');

fs.exists('bank.txt', function(exists){
    if (!exists){
        fs.writeFile('bank.txt', 'initial\n' + '0', function(err){
            if (err){
                console.log(err);
            } //no else
        })
    }
});

fs.readFile('bank.txt', 'utf8', function(err, data){
    if (err) {
        console.log(err);
    }
    else {
        var bankArray = data.split('\n');
        var lastIndex = bankArray.length - 1;
        var recentAmount = parseFloat(bankArray[lastIndex]).toFixed(2) || 0;

        var command = process.argv[2];
        var amount;

        switch (command) {
            case 'total':
                console.log("Balance: " + recentAmount);        
                break;
            case 'deposit':
                amount = returnNum(process.argv[3]);
                console.log("Initial: " + recentAmount);
                console.log("Deposited " + amount);
                recentAmount += amount;
                bank(command, amount, recentAmount);                
                console.log("Total: " + recentAmount);
                break;
            case 'withdraw':
                amount = returnNum(process.argv[3]);
                console.log("Initial: " + recentAmount);
                console.log("Deposited " + amount);
                recentAmount -= amount;
                bank(command, amount, recentAmount);                
                console.log("Total: " + recentAmount);
                break;
            case 'lotto':
                amount = 0.25;
                var lotto = Math.round(Math.random());
                var target = Math.round(Math.random());
                if (lotto == target) {
                    console.log("You won $2!");
                    amount = 2;
                    recentAmount += amount;
                    bank(command, amount, recentAmount);  
                    console.log("Total: " + recentAmount);
                }
                else {
                    console.log("You lose 25 cents");
                    recentAmount -= amount;
                    bank(command, amount, recentAmount);  
                    console.log("Total: " + recentAmount);
                }
                break;
            default: console.log('command not recognized. try total, deposit, withdraw, or lotto');
        }

        function bank(command, change, value){
            fs.appendFile('bank.txt', "\n" + command + "\n" + change + "\n" + value, function(err){
                if (err) {
                    console.log(err);
                }
                else {
                    //do something?
                }
            })
        }

        function returnNum(args){
            return parseFloat(args) || 0;
        }
    }
});