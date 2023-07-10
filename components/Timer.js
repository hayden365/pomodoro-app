import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PomoTimer() {
	const minute = 25;
	const [time, setTime] = useState(minute * 60);

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(prevTime => {
				if (prevTime === 0) {
					clearInterval(timer);
					return 0;
				}
				return prevTime - 1;
			});
		}, 1000);

		return clearInterval(timer);
	}, []);

	const formatTime = () => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes.toString().padStart(2, '0')}:${seconds
			.toString()
			.padStart(2, '0')}`;
	};

	return (
		<View style={styles.container}>
			<Text style={styles.timer}>{formatTime()}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	timer: {
		fontSize: 48,
	},
});
