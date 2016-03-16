function solveMultiples() {
	var numberToSolve = 1000;
	var sum = 0;
	var outputElement = document.getElementById("sol1");

	for (var i = numberToSolve; i>1; i--){
		if (i%3 === 0 || i%5 === 0){
		// It's multiple of 3 or 5
			sum += i;
		}
	}
	outputElement.innerHTML = "Solution: " + sum;
}

function solveFibonacci() {
	var numberToReach = 4000000;
	var fibonacci = [1,2];
	var newElement = Number(fibonacci[fibonacci.length-2] + fibonacci[fibonacci.length-1]);
	var outputElement = document.getElementById("sol2");

	do{
		fibonacci.push(newElement);
		newElement = Number(fibonacci[fibonacci.length-2] + fibonacci[fibonacci.length-1]);
	}while(newElement < numberToReach);

	outputElement.innerHTML = "Solution: " + fibonacci;
}

function solvePrimeFactor() {
	var numberToSolve = 1000;
	var sum = 0;
	var outputElement = document.getElementById("sol3");

	for (var i = numberToSolve; i>1; i--){
		if (i%3 === 0 || i%5 === 0){
		// It's multiple of 3 or 5
			sum += i;
		}
	}
	outputElement.innerHTML = "Solution: " + sum;
}