var dog = {
	raining: true,
	noise: "Woof!",
	makeNoise: function() {
		console.log(this.noise);
	}
};

var cat = {
	raining: false,
	noise: "Mijaow!",
	makeNoise: function() {
		console.log(this.noise);
	}
};

function massHysteria(){
	if (dog.raining && cat.raining ) {
		console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
	}
}

dog.makeNoise();
cat.raining = true;
cat.makeNoise();
massHysteria();