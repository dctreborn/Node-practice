var operator = process.argv[2];
if (operator == 'algebra') { //only takes ax+b=y format
	var formula = process.argv[3];
	var result = formula.slice(formula.indexOf("=")+1);
	var subtract = formula.slice(formula.indexOf("+")+1,formula.indexOf("="));
	var first = formula.slice(0,formula.indexOf("x"));
	console.log((result - subtract)/first);
}
else {
	var first = parseFloat(process.argv[3]);
	var second = parseFloat(process.argv[4]);
}

switch (operator){
	case 'add':
		console.log(first + second);
		break;
	case 'subtract':
		console.log(first - second);
		break;
	case 'divide':
		console.log(first / second);
		break;
	case 'multiply':
		console.log(first * second);
		break;
	case 'remainder':
		console.log(first % second);
		break;
	case 'exp':
		console.log(Math.pow(first, second));
		break;
	case 'algebra':
		break;
	default: console.log("Not a valid operation");
}