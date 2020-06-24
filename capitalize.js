function capitalize(inputString){
	if(!inputString) return "";
	return inputString[0].toUpperCase() + inputString.substring(1);
}

module.exports = capitalize;