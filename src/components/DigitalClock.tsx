import * as React from 'react';
import Clock from 'react-live-clock';

interface Props {
	time: Date;
	onClick?: () => void;
}

/*
 * A wrapper for a digital clock from react-live-clock.
 */
const DigitalClock: React.FC<Props> = (props) => {
	const { time, onClick } = props;

	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	}

	return (
		<div onClick={handleClick} role='button' aria-label='digital-clock' >
			<Clock format={'h:mm:ss A'} date={time.getTime()} key='react-live-clock'/>
		</div>
	)
}

export default DigitalClock;