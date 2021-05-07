import * as React from 'react';
import TimePicker from '@material-ui/lab/TimePicker';
import {
	Box,
	TextField,
	makeStyles,
	Theme,
	createStyles,
	useTheme,
	Typography
} from '@material-ui/core';

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

	return (
		<React.Fragment>
			<Box className={classes.clockContainer}>
				<Typography variant="caption">
					Clock 1:
				</Typography>
				<TimePicker
					value={state.time}
					onChange={(newValue) => {
						dispatch({ type: 'digital', time: newValue });
					}}
					renderInput={(params) =>
						<TextField {...params} />
					}
				/>
			</Box>
			<Box className={classes.clockContainer}>
				<Typography variant="caption">
					Clock 2:
				</Typography>
				<TimePicker
					value={state.time}
					onChange={(newValue) => {
						dispatch({ type: 'analog', time: newValue });
					}}
					renderInput={(params) =>
						<TextField {...params} />
					}
				/>
			</Box>
		</React.Fragment>
	);
}

export default SynchronizedClocks;