import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactUsForm from './ContactUsForm';

describe('ContactUsForm', () => {
	it('will display an error if all fields except the email are submitted', () => {
		/* eslint-disable */
		const component = render(<ContactUsForm />);

		const select = component.getByTestId('department-select');
		fireEvent.change(select, { target: { value: 'sales' } });
		const textarea = component.getByTestId('question-textarea');
		fireEvent.change(textarea, { target: { value: 'my question' } });
		const submitButton = component.getByTestId('submit-button');
		fireEvent.click(submitButton);
		expect(component.queryByTestId('success-header')).not.toBeInTheDocument();
		expect(component.getByTestId('error-header')).toBeInTheDocument();
	});
});
