function analyze(array){
	if(array.some(entry => isNaN(entry))) throw "Array must only include numbers";
	const min = Math.min(...array);
	const max = Math.max(...array);
	const average = array.reduce((a,b) => a + b, 0)/array.length;
	const length = array.length;

	return {min, max, average, length};
}

module.exports = analyze;