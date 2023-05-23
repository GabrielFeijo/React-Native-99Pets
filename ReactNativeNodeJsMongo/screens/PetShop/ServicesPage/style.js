import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Text = styled.Text`
	font-family: Montserrat_400Regular;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.57);
	margin: 5px;
	margin-bottom: 10px;
`;

export const BoxService = styled.TouchableOpacity`
	display: flex;
	align-content: center;
	align-items: center;
	flex-direction: row;
`;
export const ServiceText = styled.Text`
	font-family: Montserrat_700Bold;
	font-size: 14px;
	margin-left: 5px;
	color: rgba(0, 0, 0, 0.7);
`;

export const styles = StyleSheet.create({
	wrap: {
		width: '85%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},

	texto: {
		maxWidth: 350,
	},
});
