import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Text = styled.Text`
	font-family: Montserrat_400Regular;
	margin-left: 10px;
`;

export const Flex = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
export const FlexBox = styled.View`
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
	padding-bottom: 20px;
`;

export const styles = StyleSheet.create({
	loadingScreen: {
		position: 'absolute',
		display: 'flex',
		width: '100%',
		height: '110%',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#0008',
		opacity: 1,
		zIndex: 9999,
	},

	wrap: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
	},
});
