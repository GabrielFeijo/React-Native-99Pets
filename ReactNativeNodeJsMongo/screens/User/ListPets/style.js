import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Titulo = styled.Text`
	color: black;
	font-size: 24px;
	font-family: OpenSans_400Regular;
	color: rgba(0, 0, 0, 0.57);
	margin-top: 20px;
`;
export const Nome = styled.Text`
	font-family: OpenSans_600SemiBold;
	text-transform: capitalize;
`;

export const Text = styled.Text`
	font-family: Montserrat_400Regular;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.57);
	margin: 5px;
	margin-bottom: 10px;
`;

export const styles = StyleSheet.create({
	center: {
		alignItems: 'center',
	},
	wrap: {
		flex: 1,
		width: '85%',
		justifyContent: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	icone: {
		display: 'flex',
		alignContent: 'center',
		alignItems: 'center',
		gap: 5,
		flexDirection: 'row',
	},
	textIcone: {
		fontSize: 16,
		fontFamily: 'Montserrat_700Bold',
	},
	texto: {
		maxWidth: 350,
	},
});
