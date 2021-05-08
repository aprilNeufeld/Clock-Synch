import * as React from 'react';
import Clock from 'react-clock';

interface Props {
	time: Date;
	onClick?: () => void;
}

/*
 * A wrapper for an analog clock from react-clock.
 */ 
const AnalogClock: React.FC<Props> = (props) => {
	const { time, onClick } = props;

	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	}

	return (
		<div onClick={handleClick}>
			<Clock value={time} size={200} />
		</div>
	)
}

export default AnalogClock;