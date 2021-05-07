import Clock from 'react-live-clock';

interface Props {
	time: Date;
}

const DigitalClock: React.FC<Props> = (props) => {
	const { time } = props;

	return (
		<Clock format={'HH:mm:ss'} ticking={true} date={time.getTime()} />
	)
}

export default DigitalClock;