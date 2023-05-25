import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Titulo = styled.Text`
	font-size: 24px;
	font-family: Montserrat_600SemiBold;
	color: rgba(0, 0, 0, 0.57);
	margin-top: 20px;
`;

export const Text = styled.Text`
	font-family: Montserrat_400Regular;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.57);
	margin: 10px 0;
`;

export const NewProduct = styled.TouchableOpacity`
	display: flex;
	align-content: center;
	align-items: center;
	flex-direction: row;
`;
export const ProductText = styled.Text`
	font-family: Montserrat_700Bold;
	font-size: 14px;
	margin-left: 5px;
	color: rgba(0, 0, 0, 0.7);
`;

export const ProductsBox = styled.View`
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		width: '85%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
});
