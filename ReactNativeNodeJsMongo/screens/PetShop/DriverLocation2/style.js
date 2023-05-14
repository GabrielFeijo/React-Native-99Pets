import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Text = styled.Text`
	font-family: Montserrat_600SemiBold;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.57);
	margin-bottom: 20px;
`;

export const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'flex-start',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	wrap: {
		width: '85%',
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
