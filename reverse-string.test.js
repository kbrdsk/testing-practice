const reverseString = require("./reverse-string");

test("empty string returns empty string", () => {
	expect(reverseString("")).toBe("");
});

test("non-palindrome", () => {
	expect(reverseString("test")).toBe("tset");
});

test("full sentence", () => {
	expect(reverseString("Hello World!")).toBe("!dlroW olleH");
})
