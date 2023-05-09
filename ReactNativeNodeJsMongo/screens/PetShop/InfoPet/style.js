import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Flex = styled.TouchableOpacity`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 16px;
	margin: 10px 0;
`;

export const Name = styled.Text`
	color: rgba(0, 0, 0, 0.57);
	font-family: Montserrat_700Bold;
	font-size: 16px;
`;

export const Species = styled.Text`
	color: rgba(0, 0, 0, 0.57);
	font-family: Montserrat_400Regular;
	font-size: 14px;
`;
