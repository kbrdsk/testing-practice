let calculator = (() => {
	let add = (a, b) => a + b;

	let subtract = (a, b) => a - b;

	let multiply = (a, b) => a * b;

	let divide = (a, b) => (b === 0 ? undefined : a / b);

	return { add, subtract, multiply, divide };
})();

module.exports = calculator;
