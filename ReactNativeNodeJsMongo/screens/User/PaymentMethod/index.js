import React, { useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { styles, Text, ServiceBox, Flex, FlexBox } from './style';
import { Titulo } from '../ListPets/style';
import { NineMenu } from '../../NavBar/Menu';
import { Card2 } from '../../General/Card';
import { Button, ButtonText } from '../../General/Home/style';
import { Service, ServiceText } from '../ServicePet/style';

import { WalletCard } from '../../General/Card';
import { Card } from 'iconsax-react-native';
import Pix from '../../../assets/images/pix.png';
import { TransferByBank, TransferByPix } from '../PaymentTypes';

const PaymentMethod = (props) => {
	const petid = props.route.params.petid;
	const services = props.route.params.services;
	const Pet = props.route.params.Pet;
	const [type, setType] = useState('Info');

	return (
		<>
			<NineMenu />

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
						<Card2
							url={Pet.url}
							nome={Pet.nome}
							info={Pet.info}
							quantidade={Pet.quantidade}
						/>

						<Text>{Pet.description}</Text>

						<ScrollView style={{ marginVertical: 10 }}>
							<ServiceBox>
								<Text style={{ marginBottom: 10 }}>
									Os serviços selecionados ficam por:
								</Text>
								{services.map((service, index) => (
									<Service key={index}>
										<ServiceText>{service}</ServiceText>
										<Text>R$ 50,00</Text>
									</Service>
								))}
							</ServiceBox>
						</ScrollView>
						<Button>
							<ButtonText>Próximo</ButtonText>
						</Button>
					</FlexBox>
				)}

				{type === 'Pix' ? (
					<TransferByPix />
				) : (
					type === 'Bank' && <TransferByBank />
				)}
			</View>
		</>
	);
};

export default PaymentMethod;
