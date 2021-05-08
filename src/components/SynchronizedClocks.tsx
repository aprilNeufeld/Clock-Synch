import * as React from 'react';
import 'react-clock/dist/Clock.css';
import {
	Box,
	TextField,
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

interface UpdateAnalog {
	type: 'analog';
	time: Date | null;
}

interface UpdateDigital {
	type: 'digital';
	time: Date | null;
}

interface UpdateSeconds {
	type: 'tick-seconds';
}

type Action = UpdateAnalog | UpdateDigital | UpdateSeconds;

type TimeState = {
	time: Date | undefined;
}

const reducer = (state: TimeState, action: Action) => {
	switch (action.type) {
		case 'analog':
			return {
				time: action.time ?? new Date()
			};
		case 'digital':
			return {
				time: action.time ?? new Date()
			};
		case 'tick-seconds':
			return {
				time: state.time ? addSeconds(state.time, 1) : undefined
			}
		default: return state;
	}
}

const SynchronizedClocks: React.FC = () => {

	const [state, dispatch] = React.useReducer(reducer, { time: undefined });
	const [open, setOpen] = React.useState(false);
	const classes = useStyles(useTheme());

	React.useEffect(() => {
		// Set the initial date only after the first render so that our
		// clocks are only rendered client-side
		if (!state.time) {
			dispatch({ type: 'digital', time: new Date() });
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
						<TimePicker
							className={classes.timePicker}
							value={state.time}
							onChange={(newValue) => {
								dispatch({ type: 'digital', time: newValue });
							}}
							open={open}
							onClose={toggleOpenPicker}
						/>
						<DigitalClock time={state.time} onClick={toggleOpenPicker} />
					</Box>
					<Box className={classes.clockContainer}>
						<Typography variant="caption">
							Clock 2:
						</Typography>
						<TimePicker
							className={classes.timePicker}
							value={state.time}
							onChange={(newValue) => {
								dispatch({ type: 'analog', time: newValue });
							}}
							open={open}
							onClose={toggleOpenPicker}
						/>
						<AnalogClock time={state.time} onClick={toggleOpenPicker} />
					</Box>
				</Box>
			}
		</React.Fragment>
	);
}

export default SynchronizedClocks;