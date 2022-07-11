var multiply = require('./multiply');

describe('multiply', () => {
	// IT function tells what you expect the function to do
	it('will return the product of both numbers passed', () => {
		expect(multiply(2, 3)).toEqual(6);
	});
});
