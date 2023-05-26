import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const View = styled.View`
	width: 100%;
	margin: 5px 0;
`;
export const FlexRight = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	margin-bottom: 5px;
`;

export const Titulo = styled.Text`
	font-family: Montserrat_600SemiBold;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.57);
`;

export const UserText = styled.Text`
	font-family: Montserrat_400Regular;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.7);
	text-align: right;
`;

export const Flex = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 5px;
`;
export const Image = styled.Image`
	margin-right: 5px;
`;

export const Text = styled.Text`
	font-family: Montserrat_400Regular;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.7);
`;

export const styles = StyleSheet.create({});
