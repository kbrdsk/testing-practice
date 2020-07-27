const analyze = require("./analysis.js");

describe("constructor", () => {
	it("throws an error unless array contains only numbers", () => {
		expect(() => analyze([1, 2, "a"])).toThrow();
	});

	it("returns an object", () => {
		expect(analyze([1])).toBeDefined();
	});
});

describe("average", () => {
	it("takes the average of a small set of positive integers", () => {
		expect(analyze([1, 2, 3, 4, 10]).average).toBe(4);
	});

	it("handles negative numbers", () => {
		expect(analyze([-1, 2, 3, -4, 10]).average).toBe(2);
	});

	it("handles zero", () => {
		expect(analyze([5, 0, 0, 0, 0]).average).toBe(1);
	});
});

describe("min", () => {
	it("handles small positive integers", () => {
		expect(analyze([1, 2, 3, 4]).min).toBe(1);
	});

	it("handles an unordered array", () => {
		expect(analyze([2, 3, 1, 2]).min).toBe(1);
	});

	it("handles negative numbers", () => {
		expect(analyze([-1, 2, 3, -4]).min).toBe(-4);
	});
});

describe("max", () => {
	it("handles small positive integers", () => {
		expect(analyze([1, 2, 3, 4]).max).toBe(4);
	});

	it("handles an unordered array", () => {
		expect(analyze([4, 3, 1, 2]).max).toBe(4);
	});

	it("handles negative numbers", () => {
		expect(analyze([-1, -2, -3, -4]).max).toBe(-1);
	});
});

describe("length", () => {
	it("is a property of returned object", () => {
		expect(analyze([1]).length).toBeDefined();
	});
	it("returns the length of an empty array", () => {
		expect(analyze([]).length).toBe(0);
	});

	it("returns the length of a small empty array", () => {
		expect(analyze(new Array(12)).length).toBe(12);
	});
});
