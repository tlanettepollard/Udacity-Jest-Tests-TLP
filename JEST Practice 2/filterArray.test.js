var filterArray = require('./filterArray');

describe('filterArray', () => {
	it('will return null if null is passed', () => {
		var results = filterArray(null);
		expect(results).toBeNull();
	});

	it('will return numbers lower than 100', () => {
		var sampleArray = [1, 2, 3, 4];
		var results = filterArray(sampleArray);
		expect(results.length).toEqual(sampleArray.length);
		expect(results[0]).toEqual(sampleArray[0]);
		expect(results[1]).toEqual(sampleArray[1]);
		expect(results[2]).toEqual(sampleArray[2]);
		expect(results[3]).toEqual(sampleArray[3]);
	});

	it('will not return any numbers greater than 100', () => {
		var sampleArray = [50, 75, 100, 125];
		var results = filterArray(sampleArray);
		expect(results).not.toContain(125);
	});
});
