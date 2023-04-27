import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Titulo = styled.Text`
	color: black;
	font-size: 24px;
	font-weight: bold;
	font-family: Montserrat_400Regular;
	margin-top: 20px;
`;

export const Text = styled.Text`
	font-family: OpenSans_600SemiBold;
	font-size: 20px;
	color: rgba(0, 0, 0, 0.57);
`;

export const TextInfo = styled.Text`
	font-family: OpenSans_400Regular;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.57);
	margin-top: 5px;
`;

export const Label = styled.Text`
	font-family: OpenSans_600SemiBold;
	font-size: 20px;
	color: rgba(251, 175, 94, 1);
`;
export const Image = styled.Image`
	width: 164px;
	height: 200px;
	border-radius: 16px;
`;
export const Description = styled.View`
	height: 150px;
	border-top-right-radius: 16px;
	border-bottom-right-radius: 16px;
	position: relative;
	padding: 5px;
	background-color: white;
	flex: 1;
	justify-content: center;
`;
export const MainBox = styled.TouchableOpacity`
	width: 150px;
	height: 150px;
	border-radius: 16px;

	display: flex;
	flex-wrap: wrap;
	align-items: center;
	align-content: center;
	justify-content: space-evenly;
	background: #ffffff;
	box-shadow: 0px 4px 2px rgba(12, 12, 12, 0.12);
`;

export const styles = StyleSheet.create({
	wrap: {
		minWidth: '100%',
		flexWrap: 'wrap',
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10,
	},
});
