import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Text = styled.Text`
	color: rgba(0, 0, 0, 0.57);
	font-size: 20px;
	font-family: Montserrat_600SemiBold;
	text-align: center;
`;

export const FlexBox = styled.View`
	flex: 1;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 10px;
`;

export const Flex = styled.TouchableOpacity`
	display: flex;
	align-items: center;
	flex-direction: row;
`;

export const CopyText = styled.Text`
	font-family: Montserrat_700Bold;
	font-size: 20px;
	color: #ffbd59;
	margin-right: 20px;
`;

export const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		width: '85%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
});
