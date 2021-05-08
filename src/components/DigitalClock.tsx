import Clock from 'react-live-clock';

interface Props {
	time: Date;
	onClick?: () => void;
}

const DigitalClock: React.FC<Props> = (props) => {
	const { time, onClick } = props;

	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	}

	return (
		<Clock format={'h:mm:ss A'} date={time.getTime()} />
	)
}

export default DigitalClock;