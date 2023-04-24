import React, { useState } from 'react';
import { View } from 'react-native';
import {
	TextInfo,
	styles,
	Box,
	ConfirmBox,
	TituloBox,
	Text,
	ServiceBox,
} from './style';
import { Titulo } from '../ListPets/style';
import { NineMenu } from '../../NavBar/Menu';
import { Icon } from 'react-native-elements';
import { Card2 } from '../Card';
import { Button, ButtonText } from '../../General/Home/style';
import { Service, ServiceText } from '../ServicePet/style';

const InfoLocation = (props) => {
	const [Local, setLocal] = useState(false);

	const petid = props.route.params.petid;
	const services = props.route.params.services;
	const Pet = props.route.params.Pet;

	return (
		<>
			<NineMenu />

			<View style={styles.root}>
				<View style={styles.wrap}>
					<Titulo>Qual Petshop?</Titulo>
					<Card2
						url={Pet.url}
						nome={Pet.nome}
						info={Pet.info}
						quantidade={Pet.quantidade}
					/>

					<Text>{Pet.description}</Text>
				</View>
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

				<View>
					<Button
						onPress={() => {
							props.navigation.navigate('DriverLocation');
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
