const calculator = require("./calculator");

describe("Addition", () => {
	it("adds small positive integers", () => {
		expect(calculator.add(1, 1)).toBe(2);
		expect(calculator.add(2, 3)).toBe(5);
	});

	it("adds small negative integers", () => {
		expect(calculator.add(-1, -5)).toBe(-6);
		expect(calculator.add(-1, -1)).toBe(-2);
	});

	it("treats 0 as an identity element", () => {
		expect(calculator.add(0, 3)).toBe(3);
	})
});

describe("Subtraction", () => {
	it("subtracts positive numbers with positive difference", () => {
		expect(calculator.subtract(5,3)).toBe(2);
	});

	it("subtracts positive numbers with negative difference", () => {
		expect(calculator.subtract(1, 5)).toBe(-4);
	})

	it("subtracts negative numbers with positive difference", () => {
		expect(calculator.subtract(-3, -6)).toBe(3);
	})

	it("subtracts negative numbers with negative difference", () => {
		expect(calculator.subtract(-5, -1)).toBe(-4);
	})
});

describe("Multiplication", () => {
	it("multiplies positive integers", () => {
		expect(calculator.multiply(2,3)).toBe(6);
	});

	it("returns 0 when multiplying by 0", () => {
		expect(calculator.multiply(0, 4)).toBe(0);
	});
});

describe("Division", () => {
	it("divides integers that divide evenly", () => {
		expect(calculator.divide(6, 3)).toBe(2);
	});

	it("returns undefined for division by 0", () => {
		expect(calculator.divide(5, 0)).toBeUndefined();
	});

	it("divides negtive numbers by negative numbers", () => {
		expect(calculator.divide(-4, -2)).toBe(2);
	});

	it("treats 1 as its identity element", () => {
		expect(calculator.divide(37, 1)).toBe(37);
	});
});
