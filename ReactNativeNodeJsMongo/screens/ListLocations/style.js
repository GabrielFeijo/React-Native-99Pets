import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	center: {
		alignItems: 'center',
	},
	wrap: {
		width: '85%',
		flex: 1,
		justifyContent: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	icone: {
		flex: 1,
		flexDirection: 'row',
		alignContent: 'center',
		alignItems: 'center',
		marginBottom: 40,
	},
	textIcone: {
		fontSize: 18,
		fontFamily: 'Montserrat_500Medium',
	},
});
