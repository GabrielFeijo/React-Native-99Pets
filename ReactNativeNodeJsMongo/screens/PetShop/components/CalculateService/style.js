import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Flex = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 10px 0;
`;
export const ServiceText = styled.Text`
	font-family: Montserrat_600SemiBold;
	color: rgba(0, 0, 0, 0.57);
`;
export const Price = styled.Text`
	font-family: Montserrat_500Medium;
	color: rgba(0, 0, 0, 0.57);
`;
export const Text = styled.Text`
	font-family: Montserrat_700Bold;
	color: rgba(0, 0, 0, 0.57);
`;

export const styles = StyleSheet.create({
	gap: {
		marginLeft: 10,
	},
});
