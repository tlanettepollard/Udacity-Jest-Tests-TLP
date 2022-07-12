var getUserById = require('./getUserById');

describe('getUserById', () => {
	it('will return the user if the id is found', async () => {
		var userId = 2;
		var result = await getUserById(userId);
		expect(result.id).toEqual(userId);
		expect(result.firstName).toEqual('Marlon');
		expect(result.lastName).toEqual('Cobb');
	});

	it('will return an error if the id is not found', async () => {
		var unknownId = 55;
		await expect(getUserById(unknownId)).rejects.toEqual(
			'User with ID' + unknownId + 'not found.'
		);
	});
});
