import * as React from 'react';
import TimePicker from '@material-ui/lab/TimePicker';
import {
	TextField
} from '@material-ui/core';

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
	const [state, dispatch] = React.useReducer(reducer, { time: new Date() });

	return (
		<React.Fragment>
			<TimePicker
				value={state.time}
				onChange={(newValue) => {
					dispatch({ type: 'digital', time: newValue });
				}}
				renderInput={(params) => <TextField {...params} variant="standard" />}
				
			/>
		</React.Fragment>
	);
}

export default SynchronizedClocks;