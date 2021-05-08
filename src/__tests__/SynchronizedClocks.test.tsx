import * as React from 'react';
import { render, screen, waitForElementToBeRemoved, fireEvent, waitForElement, waitForDomChange } from '../utils/test-utils';
import SynchronizedClocks from '../components/SynchronizedClocks';

beforeEach(() => {
	render(<SynchronizedClocks ticking={false}/>);
})

it('renders all its children', () => {
	//console.log(getRoles())
	expect(screen.getByText("time")).toBeInTheDocument();
})