import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Titulo = styled.Text`
	color: black;
	font-size: 24px;
	font-family: Montserrat_600SemiBold;
	color: rgba(0, 0, 0, 0.57);
	margin-top: 20px;
`;

export const Text = styled.Text`
	font-family: Montserrat_500Medium;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.57);
	margin: 5px 0;
	max-width: 350px;
`;
export const Pet = styled.Text`
	font-family: Montserrat_700Bold;
	font-size: 16px;
	color: #fbaf5e;
`;

export const ButtonRefuse = styled.TouchableOpacity`
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
	center: {
		alignItems: 'center',
	},
	wrap: {
		width: '85%',
		flex: 1,
		justifyContent: 'space-between',
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingBottom: 15,
	},
});
