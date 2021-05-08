import * as React from 'react';
import { render, screen, waitForElementToBeRemoved, fireEvent, waitForElement, waitForDomChange } from '../utils/test-utils';
import userEvent from '@testing-library/user-event';
import SynchronizedClocks from '../components/SynchronizedClocks';

let testTime: Date;
let digitalClock: HTMLElement;
let analogClock: HTMLElement;

beforeEach(() => {
	testTime = new Date();
	// We have to test with a static pre-determined time
	render(<SynchronizedClocks ticking={false} initialTime={testTime} />);
	digitalClock = screen.getByRole('button', { name: 'digital-clock' });
	analogClock = screen.getByRole('button', { name: 'analog-clock' });
})

it('renders all its children with initial time', () => {
	//screen.debug(undefined, 20000);
	// Digital clock displays the time
	expect(digitalClock).toBeInTheDocument();
	const digitalTimeElement = digitalClock.querySelector('time');
	expect(digitalTimeElement?.textContent).toBe(testTime.toLocaleTimeString());

	// Analog clock displays the time (we are not testing the clock itself since
	// the library is already tested; we are instead testing that it has the right time value)
	expect(analogClock).toBeInTheDocument();
	const analogTimeElement = analogClock.querySelector('time');
	expect(analogTimeElement?.getAttribute('datetime')).toBe(testTime.toISOString());

})

it('opens the TimePicker dialog when we click on a clock', async () => {
	// Initially the TimePicker dialog isn't shown
	expect(screen.queryByRole('dialog', { name: 'time-picker' })).not.toBeInTheDocument();

	// Click on the digital clock
	userEvent.click(digitalClock);

	// The dialog appears
	expect(screen.getByRole('dialog', { name: 'time-picker' })).toBeInTheDocument();

	// Close the dialog
	const cancelButton = screen.getByText('Cancel').parentElement;
	userEvent.click(cancelButton!);
	await waitForElementToBeRemoved(() => screen.getByRole('dialog', { name: 'time-picker' }));
	expect(cancelButton).not.toBeInTheDocument();

	// Tests for changing the TimePicker time would go here, but would take a while for 
	// me to figure out since it's changed by touching/dragging
	
	//const clockMask = document.querySelector("[class='MuiPickersClock-squareMask']");
	//expect(clockMask).toBeInTheDocument();
})

it('updates both clocks when we change the time', () => {

	// Get the hidden time picker input
	const timeInput = screen.getByDisplayValue(testTime.toLocaleTimeString());
	expect(timeInput).toBeInTheDocument();

	// Type in a new value
	userEvent.type(timeInput, "{selectall}{backspace}120000a");
	expect(timeInput).toHaveValue("12:00:00 AM");
	testTime.setHours(0, 0, 0, 0);

	// Check that the digital clock was updated
	const digitalTimeElement = digitalClock.querySelector('time');
	expect(digitalTimeElement?.textContent).toBe(testTime.toLocaleTimeString());

	// Analog clock displays the time (we are not testing the clock itself since
	// the library is already tested; we are instead testing that it has the right time value)
	const analogTimeElement = analogClock.querySelector('time');
	expect(analogTimeElement?.getAttribute('datetime')).toBe(testTime.toISOString());
})