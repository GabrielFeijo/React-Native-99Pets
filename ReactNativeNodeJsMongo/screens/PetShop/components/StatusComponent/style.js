import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Flex = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 10px 0;
`;
export const DateText = styled.Text`
	font-family: Montserrat_400Regular;
	color: rgba(0, 0, 0, 0.57);
	font-size: 14px;
`;

export const Text = styled.Text`
	font-family: Montserrat_500Medium;
	color: black;
`;

export const styles = StyleSheet.create({
	gap: {
		marginLeft: 10,
	},
});
