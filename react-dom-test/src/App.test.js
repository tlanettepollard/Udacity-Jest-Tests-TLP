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

	it('will display an error if all fields except the department are submitted', () => {
		/* eslint-disable */
		const component = render(<ContactUsForm />);

		const email = component.getByTestId('email-input');
		fireEvent.change(email, { target: { value: 'myEmail@udacity.com' } });
		const textarea = component.getByTestId('question-textarea');
		fireEvent.change(textarea, { target: { value: 'my question' } });
		const submitButton = component.getByTestId('submit-button');
		fireEvent.click(submitButton);
		expect(component.queryByTestId('success-header')).not.toBeInTheDocument();
		expect(component.getByTestId('error-header')).toBeInTheDocument();
	});

	it('will display an error if all fields except the question are submitted', () => {
		/* eslint-disable */
		const component = render(<ContactUsForm />);

		const email = component.getByTestId('email-input');
		fireEvent.change(email, { target: { value: 'myEmail@udacity.com' } });
		const select = component.getByTestId('department-select');
		fireEvent.change(select, { target: { value: 'sales' } });

		const submitButton = component.getByTestId('submit-button');
		fireEvent.click(submitButton);
		expect(component.queryByTestId('success-header')).not.toBeInTheDocument();
		expect(component.getByTestId('error-header')).toBeInTheDocument();
	});

	it('will display a success message if all fields are submitted', () => {
		const component = render(<ContactUsForm />);

		const email = component.getByTestId('email-input');
		fireEvent.change(email, { target: { value: 'myEmail@udacity.com' } });
		const select = component.getByTestId('department-select');
		fireEvent.change(select, { target: { value: 'sales' } });
		const textarea = component.getByTestId('question-textarea');
		fireEvent.change(textarea, { target: { value: 'my question' } });
		const submitButton = component.getByTestId('submit-button');
		fireEvent.click(submitButton);
		expect(component.getByTestId('success-header')).toBeInTheDocument();
		expect(component.queryByTestId('error-header')).not.toBeInTheDocument();
	});
});
