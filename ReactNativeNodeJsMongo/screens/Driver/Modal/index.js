import React from 'react';
import { View } from 'react-native';
import {
	Address,
	Box,
	Button,
	ButtonRefuse,
	ButtonRefuseText,
	ButtonText,
	Flex,
	FlexBox,
	Line,
	Price,
	Text,
	Titulo,
	styles,
} from './style';

const Modal = ({ setModal, handleClick }) => {
	return (
		<View style={styles.wrap}>
			<Box>
				<Line></Line>
				<Titulo>Nova rota!</Titulo>
				<FlexBox>
					<View>
						<Text>De:</Text>
						<Address>Rua Frederico Neves, 67, Encruzilhada</Address>
					</View>
					<View>
						<Text>Para:</Text>
						<Address>
							Casa de Amigos Petshop, Rua Luiz Fonte, 32, Bairro da Torre
						</Address>
					</View>
					<Flex>
						<Price>Valor da rota</Price>
						<Price>R$ 12,00</Price>
					</Flex>
					<Flex>
						<ButtonRefuse onPress={() => setModal(false)}>
							<ButtonRefuseText>Recusar</ButtonRefuseText>
						</ButtonRefuse>
						<Button onPress={handleClick}>
							<ButtonText>Aceitar</ButtonText>
						</Button>
					</Flex>
				</FlexBox>
			</Box>
		</View>
	);
};

export default Modal;
