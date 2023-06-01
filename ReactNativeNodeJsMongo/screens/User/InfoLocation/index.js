import React, { useState } from 'react';
import { View } from 'react-native';
import { styles, Box, ConfirmBox, TituloBox, Text, ServiceBox } from './style';
import { Titulo } from '../ListPets/style';
import { NineMenu } from '../../NavBar/Menu';
import { PetShopCard } from '../../General/Card';
import { Button, ButtonText } from '../../General/Home/style';
import { Service, ServiceText } from '../ServicePet/style';
import ChatBot from '../ChatBot';

const InfoLocation = (props) => {
	const [Local, setLocal] = useState(false);

	const petid = props.route.params.petid;
	const services = props.route.params.services;
	const Location = props.route.params.location;

	return (
		<>
			<NineMenu />
			<ChatBot />
			<View style={styles.root}>
				<View style={styles.wrap}>
					<Titulo>Qual Petshop?</Titulo>
					<PetShopCard
						url={Location.pictureUrl}
						nome={Location.nome}
						info={Location.description}
						quantidade={Location.rating}
					/>

					<Text>
						Este é o pet shop escolhido, onde o cuidado excepcional e a paixão
						pelos pets se encontram em cada detalhe.
					</Text>
				</View>
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

				<View>
					<Button
						onPress={() => {
							props.navigation.navigate('PaymentMethod', {
								petid,
								services,
								Location,
							});
						}}
					>
						<ButtonText>Próximo</ButtonText>
					</Button>
				</View>
			</View>

			{Local && (
				<Box>
					<ConfirmBox>
						<TituloBox>Enviar localização?</TituloBox>
						<Text style={styles.center}>
							Precisamos da sua localização para que possamos localizar seu pet
						</Text>
						<Button
							onPress={() => {
								props.navigation.navigate('Locations');
							}}
							style={styles.botao}
						>
							<ButtonText>Enviar Localização</ButtonText>
						</Button>
					</ConfirmBox>
				</Box>
			)}
		</>
	);
};

export default InfoLocation;

{
	/* <section class="confirm-box d-none">
<div class="div-box">
    <h2>Enviar localização?</h2>
    <p>Precisamos da sua localização para que possamos localizar seu pet</p>
    <button class="btn-secondary">Enviar Localização</button>
</div>

</section> */
}
