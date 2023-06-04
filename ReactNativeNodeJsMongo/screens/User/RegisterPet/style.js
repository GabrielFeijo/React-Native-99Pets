import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Titulo = styled.Text`
	color: black;
	font-size: 24px;
	font-weight: bold;
	font-family: Montserrat_400Regular;
	margin-top: 20px;
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
	padding: 15px;
	background-color: #63C5DA;
	border-radius: 16px;
	border: none;
	margin:10px 0;
	transition: 0.5s;
	box-shadow: 0px 8px 24px #0c0c0c1a;
	filter: drop-shadow(0px 8px 24px rgba(12, 12, 12, 0.1));
}
`;

export const LoadingText = styled.Text`
	font-family: Montserrat_600SemiBold;
	font-size: 16px;
	text-align: center;
	color: white;
	max-width: 300px;
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
		alignContent: 'center',
		paddingBottom: 40,
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
});

//  width: 130px;
//     font-family: 'OpenSans-Regular',Arial, Helvetica, sans-serif;
//     color: white;
//     margin-top: 10px;
