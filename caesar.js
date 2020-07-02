const lowerCaseStartCode = "a".charCodeAt(0);
const upperCaseStartCode = "A".charCodeAt(0);
const upperCaseEndCode = upperCaseStartCode + 26;

const isUpperCase = (charCode) => charCode <= upperCaseEndCode;

function caesar(inputStr, shift) {
	return inputStr.replace(/[a-zA-Z]/g, (match, offset) => {
		const charCode = inputStr.charCodeAt(offset);

		const codeOffset = 
			isUpperCase(charCode)? upperCaseStartCode : lowerCaseStartCode;

		const shiftedCode = (charCode - codeOffset + shift) % 26 + codeOffset;

		return String.fromCharCode(shiftedCode);
	});
}



module.exports = caesar;
