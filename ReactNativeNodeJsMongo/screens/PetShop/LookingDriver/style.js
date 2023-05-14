import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Titulo = styled.Text`
	font-size: 24px;
	font-family: Montserrat_600SemiBold;
	color: rgba(0, 0, 0, 0.57);
	margin-top: 20px;
`;
export const Text = styled.Text`
	font-family: Montserrat_500Medium;
	color: rgba(0, 0, 0, 0.57);
	margin: 20px 0;
`;
export const styles = StyleSheet.create({
	root: {
		width: '85%',
		flex: 1,
		justifyContent: 'flex-start',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	map: {
		height: 430,
		borderRadius: 16,
	},
});
