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
		flex: 1,
		justifyContent: 'space-between',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	teste: {
		backgroundColor: 'rgba(217, 217, 217, 1)',
	},
});
