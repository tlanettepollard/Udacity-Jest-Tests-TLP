import { render } from '@testing-library/react';
import * as React from 'react';
import App from './App';

describe('App', () => {
	it('will have expected fields', () => {
		var view = render(<App />);

		var labels = view.screen.getAllByText(/name/);
		expect(labels.length).toEqual(2);

		var firstNameInput = view.screen.getByTestId('first-name-input');
		var lastNameInput = view.screen.getByTestId('last-name-input');
		expect(firstNameInput).toBeInTheDocument();
		expect(lastNameInput).toBeInTheDocument();

		var submitButton = view.screen.getByText('Submit');
		expect(submitButton).toBeInTheDocument();
	});
});
