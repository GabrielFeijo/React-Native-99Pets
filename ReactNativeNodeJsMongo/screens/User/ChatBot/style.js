import styled from 'styled-components/native';
import { Platform, StyleSheet } from 'react-native';

export const ChatBox = styled.TouchableOpacity`
	position: absolute;
	bottom: 30px;
	right: 30px;
	z-index: 999;
`;

export const Image = styled.Image`
	border-radius: 100px;
`;

export const Backgound = styled.View`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.7);
`;
export const Close = styled.TouchableOpacity`
	height: 100%;
`;
export const Box = styled.View`
	background-color: white;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 80%;
	box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
	border-top-left-radius: 24px;
	border-top-right-radius: 24px;
	padding: 10px 30px;
	z-index: 999;
`;

export const Line = styled.View`
	width: 80px;
	height: 6px;
	background: #d9d9d9;
	border-radius: 8px;
	margin: 20px auto;
`;

export const ScrollView = styled.ScrollView``;

export const Nine = styled.Image`
	border-radius: 1000px;
	width: 300px;
	height: 300px;
	margin: 30px auto;
`;

export const Titulo = styled.Text`
	font-size: 24px;
	font-family: OpenSans_600SemiBold;
	color: rgba(0, 0, 0, 0.57);
	margin: 50px 0;
`;
export const FlexBox = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Input = styled.TextInput`
	width: 80%;
	font-size: 16px;
	font-family: OpenSans_400Regular;
	color: rgba(0, 0, 0, 0.7);
	border-bottom-color: rgba(0, 0, 0, 0.7);
	border-bottom-width: 1px;
	margin: 20px 0;
	padding-bottom: 10px;
`;

export const SendButton = styled.TouchableOpacity`
	width: 56px;
	height: 56px;
	background-color: #ffbd59;
	border-radius: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
