import React, { useState, useEffect } from 'react';
import { ScrollView, View, Image } from 'react-native';
import {
	Amount,
	DetailsText,
	Flex,
	FlexBox,
	MarkedText,
	Price,
	ServiceBox,
	Text,
	Titulo,
	styles,
} from './style';
import { NineMenu } from '../../NavBar/Menu';
import { Button, ButtonText } from '../../General/Home/style';
import { Service, ServiceText } from '../ServicePet/style';
import ChatBot from '../ChatBot';

const PaymentConfirmed = (props) => {
	const services = props.route.params.services;
	const amount = props.route.params.amount;

	return (
		<>
			<NineMenu />
			<ChatBot />
			<View style={styles.root}>
				<View />
				<Flex>
					<Image source={require('../../../assets/images/confim.png')} />
					<Titulo>Pagamento confirmado!</Titulo>
				</Flex>
				<Text>
					Clique em <MarkedText>Buscar meu pet</MarkedText> para que possamos
					enviar um motorista
				</Text>
				<View>
					<ScrollView
						style={{ marginTop: 5 }}
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
					>
						<ServiceBox>
							<Text style={{ marginBottom: 10 }}>
								Os serviços selecionados ficam por:
							</Text>
							{services.map((service, index) => (
								<Service key={index}>
									<ServiceText>{service.name}</ServiceText>
									<Text>R$ {service.price.toFixed(2).replace('.', ',')}</Text>
								</Service>
							))}
						</ServiceBox>
					</ScrollView>
					<Amount>
						<Price>Total</Price>
						<Price>R$ {amount.toFixed(2).replace('.', ',')}</Price>
					</Amount>
				</View>
				<Button
					onPress={() => {
						props.navigation.navigate('DriverLocation');
					}}
				>
					<ButtonText>Buscar meu pet</ButtonText>
				</Button>
			</View>
		</>
	);
};

export default PaymentConfirmed;
