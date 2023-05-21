import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Titulo = styled.Text`
	font-size: 24px;
	font-family: Montserrat_600SemiBold;
	color: rgba(0, 0, 0, 0.57);
	margin-bottom: 20px;
`;

export const styles = StyleSheet.create({
	wrap: {
		width: '85%',
		justifyContent: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	itens: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
});
