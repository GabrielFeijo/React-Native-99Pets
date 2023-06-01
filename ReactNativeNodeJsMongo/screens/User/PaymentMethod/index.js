import React, { useState } from 'react';
import { Alert, Image, ScrollView, View } from 'react-native';
import { styles, Text, ServiceBox, Flex, FlexBox } from './style';
import { Titulo } from '../ListPets/style';
import { NineMenu } from '../../NavBar/Menu';
import { Card2, PetShopCard } from '../../General/Card';
import { Button, ButtonText } from '../../General/Home/style';
import { Service, ServiceText } from '../ServicePet/style';

import { WalletCard } from '../../General/Card';
import { Card } from 'iconsax-react-native';
import Pix from '../../../assets/images/pix.png';
import { TransferByBank, TransferByPix } from '../PaymentTypes';
import { useEffect } from 'react';
import ChatBot from '../ChatBot';

const PaymentMethod = (props) => {
	const petid = props.route.params.petid;
	const services = props.route.params.services;
	const Location = props.route.params.Location;
	const [type, setType] = useState('Info');
	const [amount, setAmount] = useState(0);

	const handleClick = () => {
		props.navigation.navigate('PaymentConfirmed', {
			services: services,
			amount: amount,
		});
	};

	const handlePix = () => {
		props.navigation.navigate('PixMethod', {
			services: services,
			amount: amount,
		});
	};

	useEffect(() => {
		let total = 0;
		services.map((service) => {
			total = total + service.price;
		});
		setAmount(total);
	}, []);

	return (
		<>
			<NineMenu />
			<ChatBot />
			<View style={styles.root}>
				<View style={styles.wrap}>
					<Titulo>Pagamento</Titulo>
					<Flex>
						<WalletCard
							nome={'Pix'}
							icon={<Image source={Pix} />}
							handleClick={() =>
								type == 'Pix' ? setType('Info') : setType('Pix')
							}
						/>
						<WalletCard
							nome={'Conta bancária'}
							icon={
								<Card
									size='40'
									color='#000000b3'
								/>
							}
							handleClick={() =>
								type == 'Bank' ? setType('Info') : setType('Bank')
							}
						/>
					</Flex>
				</View>
				{type === 'Info' && (
					<FlexBox>
						<PetShopCard
							url={Location.pictureUrl}
							nome={Location.nome}
							info={Location.description}
							quantidade={Location.rating}
						/>
						<Text>
							Formas de pagamento flexíveis: pix, cartões. Facilidade para
							cuidar do seu pet!
						</Text>
						<ScrollView style={{ marginVertical: 10 }}>
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
						<Button
							onPress={() => Alert.alert('Selecione um método de pagamento')}
						>
							<ButtonText>Próximo</ButtonText>
						</Button>
					</FlexBox>
				)}

				{type === 'Pix' ? (
					<TransferByPix
						handleClick={handlePix}
						amount={amount}
					/>
				) : (
					type === 'Bank' && (
						<TransferByBank
							handleClick={handleClick}
							amount={amount}
						/>
					)
				)}
			</View>
		</>
	);
};

export default PaymentMethod;
