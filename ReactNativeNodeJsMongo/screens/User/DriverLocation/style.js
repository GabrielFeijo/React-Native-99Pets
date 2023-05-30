import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Titulo = styled.Text`
	font-size: 24px;
	font-family: Montserrat_500Medium;
	color: rgba(0, 0, 0, 0.57);
	margin-top: 10px;
`;

export const Text = styled.Text`
	font-size: 16px;
	font-family: Montserrat_600SemiBold;
	color: rgba(0, 0, 0, 0.57);
	margin-bottom: 10px;
	width: 85%;
`;

export const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	wrap: {
		width: '85%',
		maxHeight: 230,
	},
	map: {
		width: 350,
		height: 430,
		borderRadius: 16,
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
