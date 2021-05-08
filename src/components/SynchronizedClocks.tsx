import * as React from 'react';
import 'react-clock/dist/Clock.css';
import {
	Box,
	makeStyles,
	Theme,
	createStyles,
	useTheme,
	Typography
} from '@material-ui/core';
import { TimePicker } from '@material-ui/pickers';
import DigitalClock from './DigitalClock';
import AnalogClock from './AnalogClock';
import { addSeconds } from 'date-fns';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		clockContainer: {
			display: 'flex',
			flexDirection: 'column',
			margin: theme.spacing(4),
		},
		timePicker: {
			// Hide the time picker so we only interact
			// with it programmatically
			display: 'none',
		},
	})
});

interface SelectTime {
	type: 'select-time';
	time: Date | null;
}

interface TickSeconds {
	type: 'tick-seconds';
}

type Action = SelectTime | TickSeconds;

type TimeState = {
	time: Date | undefined;
}

const reducer = (state: TimeState, action: Action) => {
	switch (action.type) {
		case 'select-time':
			return {
				time: action.time ?? state.time
			};
		case 'tick-seconds':
			return {
				time: state.time ? addSeconds(state.time, 1) : state.time
			}
		default: return state;
	}
}

/**
 * This component holds two synchronized clocks: one digital, and one analog.
 * The clocks each tick through the seconds. When the user clicks on either clock,
 * a time picking dialog opens that allows the user to set a new time for both clocks.
 * 
 * The clocks only render on the client, and are initialized to the user's current time.
 * A more robust component would also let the user switch between 12- and 24-hour times, and
 * might have several different ways of inputting the new time (e.g. a text box as well as a dialog).
 * 
 * Given more time (pun intended), I would also make both the clocks more self-contained, perhaps 
 * each with their own invisible TimePicker that passes the new time back to the parent rather than
 * just passing back the click event.
 */
const SynchronizedClocks: React.FC = () => {

	const [state, dispatch] = React.useReducer(reducer, { time: undefined });
	const [open, setOpen] = React.useState(false);
	const classes = useStyles(useTheme());

	React.useEffect(() => {
		// Set the initial date only after the first render so that our
		// clocks are only rendered client-side
		if (!state.time) {
			dispatch({ type: 'select-time', time: new Date() });
		}
		// Begin ticking every second
		const interval = setInterval(
			() => dispatch({ type: 'tick-seconds' }),
			1000
		);

		return () => {
			clearInterval(interval);
		}
	}, []);

	const toggleOpenPicker = () => {
		setOpen(!open);
	}

	return (
		<React.Fragment>
			{state.time &&
				<Box>
					<Box className={classes.clockContainer}>
						<Typography variant="caption">
							Clock 1:
						</Typography>
						<DigitalClock time={state.time} onClick={toggleOpenPicker} />
					</Box>
					<Box className={classes.clockContainer}>
						<Typography variant="caption">
							Clock 2:
						</Typography>
						<AnalogClock time={state.time} onClick={toggleOpenPicker} />
					</Box>
					<TimePicker
						className={classes.timePicker}
						value={state.time}
						onChange={(newValue) => {
							dispatch({ type: 'select-time', time: newValue });
						}}
						open={open}
						onClose={toggleOpenPicker}
					/>
				</Box>
			}
		</React.Fragment>
	);
}

export default SynchronizedClocks;