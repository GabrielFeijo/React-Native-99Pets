import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Titulo = styled.Text`
	font-size: 24px;
	font-family: Montserrat_600SemiBold;
	color: rgba(0, 0, 0, 0.57);
	margin-bottom: 20px;
`;

export const ViewFoto = styled.TouchableOpacity`
	position: relative;
	width: 190px;
	height: 190px;
	background-color: #8b8585;
	margin: auto;
	border-radius: 16px;

	display: flex;
	justify-content: center;
	align-content: center;
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
	root: {
		flex: 1,
		justifyContent: 'space-around',
		alignContent: 'space-between',
		alignItems: 'center',
	},
	center: {
		alignItems: 'center',
	},
	wrap: {
		flex: 1,
		justifyContent: 'space-between',
		paddingVertical: 10,
		paddingBottom: 20,
		alignContent: 'center',
	},
	image: {
		width: 180,
		height: 180,
	},
	desc: {
		color: 'white',
		marginTop: 10,
		fontSize: 20,
		fontFamily: 'Montserrat_400Regular',
		textAlign: 'center',
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
	priceEdit: {
		fontFamily: 'OpenSans_400Regular',
		fontSize: 16,
		color: 'rgba(0, 0, 0, 0.57)',
		width: '100%',
		borderBottomColor: 'rgba(0, 0, 0, 0.7)',
		borderBottomWidth: 1,
		paddingBottom: 10,
		marginVertical: 20,
	},
});

//  width: 130px;
//     font-family: 'OpenSans-Regular',Arial, Helvetica, sans-serif;
//     color: white;
//     margin-top: 10px;
