import { render } from '@testing-library/react';
import * as React from 'react';
import Greetings from './Greetings';

describe('Greetings', () => {
	it('matches the snapshot when a name is passed', () => {
        var view = render(<Greetings name={'Mike'} />
        );
		expect(view).toMatchSnapshot();
	});

	it('matches the snapshot when no name is passed', () => {
        var view = render(<Greetings />
        );
        expect(view).toMatchSnapshot();
	});
});
