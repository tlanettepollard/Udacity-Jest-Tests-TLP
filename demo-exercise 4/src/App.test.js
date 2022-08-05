import { render } from '@testing-library/react';
import * as React from 'react';
import App from './App';

describe('App', () => {
	it('will have all expected fields', () => {
		/* eslint-disable */
		const component = render(<App />);

		const labels = component.getAllByText(/name/);
		expect(labels.length).toEqual(2);

		const firstNameInput = component.getByTestId('first-name-input');
		const lastNameInput = component.getByTestId('last-name-input');
		expect(firstNameInput).toBeInTheDocument();
		expect(lastNameInput).toBeInTheDocument();

		const submitButton = component.getByText('Submit');
		expect(submitButton).toBeInTheDocument();
	});
});

// 08032022 Test failed; check tomorrow; 08052022 Fixed.

