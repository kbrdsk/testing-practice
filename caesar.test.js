const caesar = require("./caesar");

test("empty string", () => {
	expect(caesar("")).toBe("");
});

test("single lower case character, no wrapping", () => {
	expect(caesar("a", 5)).toBe("f");
});

test("single upper case character, no wrapping", () => {
	expect(caesar("C", 10)).toBe("M");
});

test("upper and lower case letters", () => {
	expect(caesar("Hi Sagaree", 7)).toBe("Op Zhnhyll");
});

test("leaves punctuation unchanged", () => {
	expect(caesar("Hello World!", 3)).toBe("Khoor Zruog!");
});

test("wraps lower case letters", () => {
	expect(caesar("text wrapping", 12)).toBe("fqjf idmbbuzs");
});

test("wraps upper case letters", () => {
	expect(caesar("TEXT WRAPPING", 12)).toBe("FQJF IDMBBUZS");
});

test("leaves numbers unchanged", () => {
	expect(caesar("june 3rd 1992", 4)).toBe("nyri 3vh 1992");
});
