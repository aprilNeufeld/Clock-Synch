import * as React from 'react';
import Clock from 'react-clock';

interface Props {
	time: Date;
}

const AnalogClock: React.FC<Props> = (props) => {
	const { time } = props;
	
	return (
		<Clock value={time} size={200} />
	)
}

export default AnalogClock;