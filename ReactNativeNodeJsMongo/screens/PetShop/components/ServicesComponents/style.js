import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Flex = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 10px 0;
`;

export const Text = styled.Text`
	font-family: Montserrat_500Medium;
	color: rgba(0, 0, 0, 0.57);
`;

export const ServiceText = styled.Text`
	font-family: Montserrat_600SemiBold;
	color: rgba(0, 0, 0, 0.57);
`;
export const Price = styled.Text`
	font-family: Montserrat_500Medium;
	color: rgba(0, 0, 0, 0.57);
`;

export const ServiceTextEdit = styled.TextInput`
	font-family: Montserrat_600SemiBold;
	color: rgba(0, 0, 0, 0.57);
	text-decoration: underline;
`;

export const View = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const styles = StyleSheet.create({
	priceEdit: {
		fontFamily: 'Montserrat_500Medium',
		color: 'rgba(0, 0, 0, 0.57)',
		textDecorationLine: 'underline',
	},
});
