import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Titulo = styled.Text`
	color: black;
	font-size: 24px;
	font-family: Montserrat_400Regular;
	color: rgba(0, 0, 0, 0.57);
	margin-top: 20px;
`;
export const Nome = styled.Text`
	font-family: Montserrat_600SemiBold;
	text-transform: capitalize;
`;

export const Text = styled.Text`
	font-family: Montserrat_400Regular;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.57);
	margin: 10px 0;
`;

export const FlexBox = styled.View`
	flex: 1;
	flex-wrap: wrap;
	flex-direction: row;
	gap: 24px;
	justify-content: space-between;
	padding-bottom: 10px;
	margin-top: 16px;
`;

export const styles = StyleSheet.create({
	wrap: {
		width: '80%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
});
