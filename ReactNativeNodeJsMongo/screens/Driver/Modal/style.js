import styled from 'styled-components/native';
import { Platform, StyleSheet } from 'react-native';

export const Box = styled.View`
	background-color: white;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 543px;
	box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
	border-top-left-radius: 24px;
	border-top-right-radius: 24px;
	padding: 20px;
`;

export const Line = styled.View`
	width: 80px;
	height: 6px;
	background: #d9d9d9;
	border-radius: 8px;
	margin: 0 auto;
`;

export const Titulo = styled.Text`
	margin: 20px 0;
	font-family: Montserrat_600SemiBold;
	font-size: 24px;
	color: rgba(0, 0, 0, 0.57);
`;

export const Text = styled.Text`
	font-family: Montserrat_400Regular;
	font-size: 18px;
	color: rgba(0, 0, 0, 0.57);
`;

export const Address = styled.Text`
	font-family: Montserrat_500Medium;
	font-size: 18px;
	color: rgba(0, 0, 0, 0.57);
	max-width: 300px;
`;

export const Price = styled.Text`
	font-family: Montserrat_700Bold;
	font-size: 20px;
	color: rgba(0, 0, 0, 0.57);
`;

export const Flex = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const FlexBox = styled.View`
	height: 350px;
	display: flex;
	justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
	width:45%;
    padding: 15px;
    background-color: #FFBD59;
    border-radius: 16px;
    border: none;
    margin:10px 0;
    transition: 0.5s;
	

	${
		Platform.OS === 'android'
			? `elevation: 3;`
			: `box-shadow: 0px 8px 24px #0c0c0c1a;`
	}
}
`;

export const ButtonText = styled.Text`
	color: #ffffff;
	text-align: center;
	font-size: 20px;
	font-family: OpenSans_700Bold;
`;

export const ButtonRefuse = styled.TouchableOpacity`
	width:45%;
    padding: 15px;
    border-radius: 16px;
    border: none;
    margin:10px 0;
    transition: 0.5s;
	background-color: #fff;

	${
		Platform.OS === 'android'
			? `elevation: 3;`
			: `box-shadow: 0px 8px 24px rgba(12, 12, 12, 0.1);`
	}
}
`;

export const ButtonRefuseText = styled.Text`
	color: #ffbd59;
	text-align: center;
	font-size: 20px;
	font-family: OpenSans_700Bold;
`;

export const styles = StyleSheet.create({
	wrap: {
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
});
