import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Titulo, Text, styles } from './style';
import { NineMenu } from '../../NavBar/Menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../axios/config';
import { Card2, PetShopCard } from '../../General/Card';
import { ListServices } from '../components/ServicesComponents';

const MyPetShop = (props) => {
	const [petShop, setPetShop] = useState('');

	function fetchData() {
		(async () => {
			const userStorage = await AsyncStorage.getItem('token_user');
			if (userStorage !== null) {
				// value previously stored
				const userJson = JSON.parse(userStorage);

				try {
					const response = await api.get(`/api/shop`, {
						headers: {
							id: userJson.id,
							token: userJson.token,
						},
					});
					setPetShop(response.data);
				} catch (error) {
					console.log(error);

					Alert.alert(error.response.data);
				}
			}
		})();
	}
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<>
			<NineMenu />
			<View style={styles.wrap}>
				<Titulo>Seu Petshop</Titulo>
				{petShop && (
					<PetShopCard
						url={petShop.pictureUrl}
						nome={petShop.nome}
						info={petShop.CNPJ}
						quantidade={3}
					/>
				)}
				<Text>
					Aqui você encontrará uma descrição de como os tutores de animais de
					estimação verão seu pet shop neste aplicativo.
				</Text>
				<Text style={styles.texto}>Serviços oferecidos:</Text>
				{petShop && <ListServices services={petShop.services} />}
			</View>
		</>
	);
};

export default MyPetShop;
