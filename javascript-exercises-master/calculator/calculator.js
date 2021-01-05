function add (a,b) {
	return a + b;
}

function subtract (a,b) {
	return a-b;
}

function sum (arr) {
	let sumTotal = 0;
	for (let i =0; i<arr.length; i++) {
		sumTotal += arr[i];
	}
	return sumTotal;
}

function multiply (arr) {
	let multiplyTotal = arr[0];
	for (let i =1; i<arr.length; i++) {
		multiplyTotal *= arr[i];
	}
	return multiplyTotal;
}

function power(a,b) {
	return a**b;
}

function factorial(num) {
	if(num === 0 || num === 1) {
		return 1;
	} else {
		let factorialTotal = num;
		for(let i=num-1; i>0;i--) {
			factorialTotal *= i;
		}
		return factorialTotal;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}