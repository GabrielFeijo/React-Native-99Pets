import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Titulo = styled.Text`
	color: black;
	font-size: 24px;
	font-family: Montserrat_600SemiBold;
	color: rgba(0, 0, 0, 0.57);
	margin: 15px 0;
`;

export const Text = styled.Text`
	font-family: Montserrat_600SemiBold;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.57);
`;

export const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'space-evenly',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	wrap: {
		width: '85%',
	},
	map: {
		width: 350,
		height: 280,
		borderRadius: 16,
		marginTop: 10,
	},
	center: {
		textAlign: 'center',
		fontSize: 16,
		color: 'rgba(0, 0, 0, 0.69)',
	},
	botao: {
		width: 225,
	},
});
