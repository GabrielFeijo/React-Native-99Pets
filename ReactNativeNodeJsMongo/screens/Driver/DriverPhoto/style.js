import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Titulo = styled.Text`
	font-size: 24px;
	font-family: Montserrat_600SemiBold;
	color: rgba(0, 0, 0, 0.57);
	margin-top: 20px;
`;

export const Text = styled.Text`
	font-family: Montserrat_500Medium;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.57);
	margin-top: 10px;
`;

export const MainButton = styled.TouchableOpacity`
  

    min-width: 85%;
    padding: 10px;
    background-color: #FFBD59;
    border-radius: 16px;
    border: none;
    margin:10px 0;
    transition: 0.5s;
}
`;

export const styles = StyleSheet.create({
	loadingScreen: {
		position: 'absolute',

		display: 'flex',
		width: '100%',
		height: '100%',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#0008',
		opacity: 1,
		zIndex: 9999,
	},
	center: {
		alignItems: 'center',
	},
	wrap: {
		flex: 1,
		width: '95%',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingBottom: 40,
	},
	modalView: {
		position: 'absolute',
		bottom: 2,
		width: '100%',
		backgroundColor: 'white',
	},
	modalButtonView: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10,
	},
});
