import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Text = styled.Text`
	font-family: Montserrat_400Regular;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.57);
	margin: 5px;
	margin-bottom: 10px;
`;

export const styles = StyleSheet.create({
	wrap: {
		width: '85%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	icone: {
		display: 'flex',
		alignContent: 'center',
		alignItems: 'center',
		gap: 5,
		flexDirection: 'row',
		marginBottom: 40,
	},
	textIcone: {
		fontSize: 16,
		fontFamily: 'Montserrat_700Bold',
	},
	texto: {
		maxWidth: 350,
	},
});
