import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Button = styled.TouchableOpacity`
    min-width: 85%;
    padding: 15px;
    background-color: #FFBD59;
    border-radius: 16px;
    border: none;
    margin:10px 0;
    transition: 0.5s;
	box-shadow: 0px 8px 24px #0c0c0c1a;
	filter: drop-shadow(0px 8px 24px rgba(12, 12, 12, 0.1));

  
}
`;
export const ButtonText = styled.Text`
	color: #ffffff;
	text-align: center;
	font-size: 20px;
	font-family: OpenSans_700Bold;
`;

export const LoginText = styled.Text`
	color: #8b8585;
	 backgroundColor: #f2f2f2
	padding: 0 5px;
	margin: 0 auto;
	font-family: OpenSans_400Regular;
	text-align: center;
`;

export const Line = styled.View`
	top:50%
	height: 1px;
	background-color: #D9D9D9;
`;
export const Box = styled.View``;

export const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'space-evenly',

		alignItems: 'center',
		gap: 40,
	},
	logo: {
		width: 232,
		height: 232,
	},
	txtLogin: {
		display: 'inline',
		color: '#8B8585',
	},
	mb: {
		marginBottom: 25,
	},
});

//   .txt-login{
//     display: inline;
//     font-family:'OpenSans-Regular',Arial, Helvetica, sans-serif ;
//     color: #8B8585;
//     line-height: 100%;
