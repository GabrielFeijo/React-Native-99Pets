import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import {
	DetailsText,
	Flex,
	FlexBox,
	MarkedText,
	Price,
	Text,
	Titulo,
	styles,
} from './style';
import { NineMenu } from '../../NavBar/Menu';
import { Button, ButtonText } from '../../General/Home/style';

const FinishRoute = (props) => {
	return (
		<>
			<NineMenu />
			<View style={styles.root}>
				<Flex>
					<Image source={require('../../../assets/images/confim.png')} />
					<Titulo>Rota finalizada!</Titulo>
				</Flex>
				<Text>
					Clique em <MarkedText>Buscar meu pet</MarkedText> para que possamos
					enviar um motorista ???????? Ué?
				</Text>

				<View>
					<DetailsText>Detalhes da rota:</DetailsText>
					<FlexBox>
						<Text>KM rodados</Text>
						<Text>3 KM</Text>
					</FlexBox>
					<FlexBox>
						<Text>Tempo do percurso</Text>
						<Text>7 min</Text>
					</FlexBox>
					<FlexBox>
						<Price>Valor</Price>
						<Price>R$ 12,00</Price>
					</FlexBox>
				</View>
				<Button
					onPress={() => {
						props.navigation.navigate('HomeDriver');
					}}
				>
					<ButtonText>Fazer mais rotas</ButtonText>
				</Button>
			</View>
		</>
	);
};

export default FinishRoute;
