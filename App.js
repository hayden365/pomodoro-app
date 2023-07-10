import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PomoTimer from './components/Timer';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<View>
				<PomoTimer />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
