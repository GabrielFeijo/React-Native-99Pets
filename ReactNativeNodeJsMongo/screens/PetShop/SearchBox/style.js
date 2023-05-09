import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Box = styled.View`
	position: relative;
`;

export const styles = StyleSheet.create({
	input: {
		color: 'rgba(0, 0, 0, 0.57)',
		borderBottomColor: 'rgba(0, 0, 0, 0.57)',
		borderBottomWidth: 1,
		fontFamily: 'Montserrat_400Regular',
		fontSize: 16,
		marginVertical: 15,
		paddingVertical: 5,
	},
	icon: {
		position: 'absolute',
		right: 0,
		bottom: 22,
	},
});
