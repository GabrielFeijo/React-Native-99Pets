import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Titulo = styled.Text`
	font-size: 24px;
	font-family: Montserrat_600SemiBold;
	color: rgba(0, 0, 0, 0.57);
	margin: 30px 0;
`;

export const Text = styled.Text`
	font-family: Montserrat_500Medium;
	color: rgba(0, 0, 0, 0.57);
	font-size: 16px;
`;

export const DetailsText = styled.Text`
	font-family: Montserrat_500Medium;
	color: rgba(0, 0, 0, 0.57);
	font-size: 16px;
	margin-bottom: 10px;
`;

export const MarkedText = styled.Text`
	font-family: Montserrat_700Bold;
	font-size: 16px;
	color: #0492c2;
`;
export const Flex = styled.View`
	display: flex;
	align-items: center;
	//margin-top: 20%;
`;
export const FlexBox = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: 10px 0;
`;

export const Price = styled.Text`
	font-family: Montserrat_700Bold;
	color: rgba(0, 0, 0, 0.57);
	font-size: 16px;
`;

export const TextInfo = styled.Text`
	color: black;
	font-size: 16px;
	font-weight: bold;
	font-family: Montserrat_500Medium;
	margin-top: 20px;
`;

export const ServiceBox = styled.View``;

export const Amount = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 5px 0;
`;

export const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'space-between',
		paddingBottom: 10,
		width: '85%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
});
