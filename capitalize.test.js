const capitalize = require("./capitalize");

test("empty string returns empty string", () => {
	expect(capitalize("")).toBe("");
});

test("single character", () => {
	expect(capitalize("a")).toBe("A");
})

test("multiple lower case characters", () => {
	expect(capitalize("test")).toBe("Test");
})
