import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Titulo, Text, styles } from '../RouteHistory/style';
import { NineMenu } from '../../NavBar/Menu';
import {
	BoxInfo,
	Flex,
	PriceText,
	RouteAddress,
	RouteInfo,
	RouteText,
} from './style';

const RouteDetails = (props) => {
	return (
		<>
			<NineMenu />
			<View style={styles.wrap}>
				<Titulo>Rota #13</Titulo>
				<Text>Rota realizada em 23/03/2023</Text>

				<View>
					<RouteText>De:</RouteText>
					<RouteAddress>Rua Frederico Neves, 67, Encruzilhada</RouteAddress>
				</View>
				<View style={{ marginTop: 20 }}>
					<RouteText>Para:</RouteText>
					<RouteAddress>
						Casa de Amigos Petshop, Rua Luiz Fonte, 32, Bairro da Torre
					</RouteAddress>
				</View>

				<BoxInfo>
					<RouteInfo>Tempo gasto: 15 min</RouteInfo>
					<RouteInfo>Kilômetros rodados: 2,3 km</RouteInfo>
				</BoxInfo>

				<Flex>
					<PriceText>Valor da rota</PriceText>
					<PriceText>R$ 12,00</PriceText>
				</Flex>
			</View>
		</>
	);
};

export default RouteDetails;
