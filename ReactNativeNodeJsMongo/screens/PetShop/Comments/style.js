import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Titulo = styled.Text`
	font-size: 24px;
	font-family: Montserrat_600SemiBold;
	color: rgba(0, 0, 0, 0.57);
	margin-top: 20px;
`;

export const Text = styled.Text`
	font-family: Montserrat_400Regular;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.57);
	margin: 10px 0;
	margin-bottom: 20px;
`;

export const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		width: '85%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
});
