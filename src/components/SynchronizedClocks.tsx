import * as React from 'react';
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
import Clock from 'react-clock';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		clockContainer: {
			display: 'flex',
			flexDirection: 'column',
			margin: theme.spacing(4),
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

type Action = UpdateAnalog | UpdateDigital;

type TimeState = {
	time: Date;
}

const reducer = (state: TimeState, action: Action) => {
	switch (action.type) {
		case 'analog':
			console.log(action.time);
			return {
				time: action.time ?? new Date()
			};
		case 'digital':
			console.log(action.time);
			return {
				time: action.time ?? new Date()
			};
		default: return state;
	}
}

interface Props {
	initialTime: Date;
}

const SynchronizedClocks: React.FC<Props> = (props) => {
	const { initialTime } = props;
	const [state, dispatch] = React.useReducer(reducer, { time: initialTime });
	const classes = useStyles(useTheme());

	const [value, setValue] = React.useState(new Date());

	React.useEffect(() => {
		const interval = setInterval(
			() => setValue(new Date()),
			1000
		);

		return () => {
			clearInterval(interval);
		}
	}, []);

	return (
		<React.Fragment>
			<Box className={classes.clockContainer}>
				<Typography variant="caption">
					Clock 1:
				</Typography>
				<DigitalClock time={value}/>
			</Box>
			<Box className={classes.clockContainer}>
				<Typography variant="caption">
					Clock 2:
				</Typography>
				<Clock value={value}/>
			</Box>
		</React.Fragment>
	);
}

export default SynchronizedClocks;