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
import { KeyboardTimePicker } from '@material-ui/pickers';
import DigitalClock from './DigitalClock';
import AnalogClock from './AnalogClock';
import { addSeconds } from 'date-fns';

// Styling
const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: 'flex',
			flexDirection: 'column',
		},
		clocks: {
			display: 'flex',
			justifyContent: 'space-around',
			alignItems: 'center',
			[theme.breakpoints.up('md')]: {
				minWidth: '60vw',
				flexDirection: 'row',
			},
			[theme.breakpoints.down('sm')]: {
				minWidth: '80vw',
				flexDirection: 'column',
			},
		},
		clockContainer: {
			[theme.breakpoints.up('md')]: {
				margin: theme.spacing(4),
			},
			[theme.breakpoints.down('sm')]: {
				marginTop: theme.spacing(4),
				marginBottom: theme.spacing(4),
			},
		},
		timePicker: {
			// Hide the time picker so we only interact
			// with it programmatically
			display: 'none',
		},
		title: {
			textAlign: 'center',
			lineHeight: 2,
			margin: theme.spacing(2),
		},
	})
});

// ----------------
// ACTIONS & REDUCER FOR LOCAL STATE

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

// -------------

interface Props {
	initialTime?: Date;
	ticking: boolean;
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
 * 
 * @props initialTime --- The time that the clocks should be initialized to. If not provided,
 *		the clocks are initialized to the current local time.
 * @props ticking --- Whether the clocks should keep time every second. This should be false during testing.
 */
const SynchronizedClocks: React.FC<Props> = (props) => {

	const { initialTime, ticking } = props;
	const [state, dispatch] = React.useReducer(reducer, { time: undefined });
	const [open, setOpen] = React.useState(false);
	const classes = useStyles(useTheme());

	React.useEffect(() => {
		// Set the initial date only after the first render so that our
		// clocks are only rendered client-side
		if (!state.time) {
			dispatch({ type: 'select-time', time: initialTime ?? new Date() });
		}
		// Begin ticking every second
		if (ticking) {
			const interval = setInterval(
				() => dispatch({ type: 'tick-seconds' }),
				1000
			);
			return () => {
				clearInterval(interval);
			}
		}
	}, []);

	// The TimePicker's dialog is opened whenever we click on 
	// one of the clocks
	const toggleOpenPicker = () => {
		setOpen(!open);
	}

	return (
		<React.Fragment>
			{state.time &&
				<Box className={classes.root}>
					<Typography variant='overline' className={classes.title}>
						Click on a clock to change the time.
					</Typography>
					<Box className={classes.clocks}>
						<Box className={classes.clockContainer}>
							<DigitalClock time={state.time} onClick={toggleOpenPicker} />
						</Box>
						<Box className={classes.clockContainer}>
							<AnalogClock time={state.time} onClick={toggleOpenPicker} />
						</Box>
						<KeyboardTimePicker
							className={classes.timePicker}
							value={state.time}
							onChange={(newValue: Date | null) => {
								if (newValue && newValue.getTime()) {
									dispatch({ type: 'select-time', time: newValue });
								}
							}}
							format="h:mm:ss a"
							mask="__:__:__ _M"
							open={open}
							onClose={toggleOpenPicker}
							DialogProps={{
								"aria-label": "time-picker"
							}}
						/>
					</Box>
				</Box>
			}
		</React.Fragment>
	);
}

export default SynchronizedClocks;