import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Text = styled.Text`
	font-family: Montserrat_400Regular;
	font-size: 14px;
	color: rgba(0, 0, 0, 0.57);
	margin: 5px;
`;

export const Services = styled.View`
	width: 85%;
`;
export const Service = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
export const ServiceText = styled.Text`
	text-align: center;
	font-family: Montserrat_500Medium;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.57);
	margin: 8px 0;
`;

export const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingBottom: 20,
	},
	wrap: {
		width: '85%',
		maxHeight: 240,
	},
	teste: {
		backgroundColor: 'black',
	},
});
