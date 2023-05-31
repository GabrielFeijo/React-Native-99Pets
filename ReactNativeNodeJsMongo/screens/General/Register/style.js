import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	loadingScreen: {
		position: 'absolute',

		display: 'flex',
		width: '100%',
		height: '100%',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#0008',
		opacity: 1,
		zIndex: 9999,
	},
	root: {
		flex: 1,

		justifyContent: 'space-around',
		alignContent: 'space-between',
		alignItems: 'center',
	},
	center: {
		alignItems: 'center',
	},
	wrap: {
		flex: 2,
		justifyContent: 'space-between',
		alignContent: 'center',
		paddingBottom: 20,
	},
	image: {
		width: 100,
		height: 125,
		marginTop: '25%', // 80
	},
});
