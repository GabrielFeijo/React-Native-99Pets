import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	loadingScreen: {
		position: 'absolute',
		display: 'flex',
		width: '100%',
		height: '110%',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#0008',
		opacity: 1,
		zIndex: 9999,
	},
	root: {
		minHeight: '100%',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	wrap: {
		flex: 1,
		justifyContent: 'space-between',
		alignContent: 'center',
		paddingBottom: 20,
	},
	image: {
		width: 90,
		height: 155,
		marginRight: 'auto',
		marginLeft: 'auto',
		marginTop: '10%',
	},
});
