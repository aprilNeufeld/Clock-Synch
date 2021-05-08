import * as React from 'react';
import { render } from '../utils/test-utils';
import Home from '../pages';

it('renders without crashing', () => {
	render(<Home />)
})