import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Titulo = styled.Text`
	color: rgba(0, 0, 0, 0.7);
	font-size: 24px;
	font-weight: 600;
	font-family: OpenSans_600SemiBold;
`;

export const Input = styled.TextInput`
	width: 100%;
	font-size: 16px;
	font-family: OpenSans_400Regular;
	color: rgba(0, 0, 0, 0.7);
	border-bottom-color: rgba(0, 0, 0, 0.7);
	border-bottom-width: 1px;
	margin: 20px 0;
	padding-bottom: 10px;
`;

export const Password = styled.Text`
	text-align: left;
	color: rgba(0, 0, 0, 0.7);
	font-family: OpenSans_700Bold;
	line-height: 20px;
`;

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
		justifyContent: 'space-around',
		alignContent: 'center',
	},
	image: {
		width: 100,
		height: 150,
		marginTop: '25%', // 80
	},
});
