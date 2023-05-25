import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const TextInfo = styled.Text`
	color: black;
	font-size: 16px;
	font-weight: bold;
	font-family: Montserrat_500Medium;
	margin-top: 20px;
`;

export const Text = styled.Text`
	color: rgba(0, 0, 0, 0.57);
	font-size: 16px;
	font-family: Montserrat_500Medium;
	text-align: left;
`;

export const ServiceBox = styled.View`
	width: 85%;
`;

export const Flex = styled.View`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	// gap: 24px;
	justify-content: space-between;
	margin-top: 10px;
	width: 100%;
`;

export const FlexBox = styled.View`
	flex: 1;
	justify-content: space-between;
	width: 85%;
	padding-bottom: 10px;
`;

export const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
	},
	wrap: {
		maxWidth: '85%',
	},

	center: {
		textAlign: 'center',
		fontSize: 16,
		color: 'rgba(0, 0, 0, 0.69)',
	},
	botao: {
		width: 225,
	},
});
