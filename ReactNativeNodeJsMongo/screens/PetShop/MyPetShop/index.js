import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Titulo, Text, styles } from './style';
import { NineMenu } from '../../NavBar/Menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../axios/config';

const MyPetShop = (props) => {
	const [services, setServices] = useState([]);

	function fetchData() {
		(async () => {
			const userStorage = await AsyncStorage.getItem('token_user');
			if (userStorage !== null) {
				// value previously stored
				const userJson = JSON.parse(userStorage);

				// try {
				// 	const response = await api.get(`/api/shop`, {
				// 		headers: {
				// 			id: userJson.id,
				// 			token: userJson.token,
				// 		},
				// 	});
				// 	setServices(response.data.serviceHistory);
				// 	setWallet(Number(response.data.wallet_value));
				// } catch (error) {
				// 	console.log(error);

				// 	Alert.alert(error.response.data);
				// }
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
				<Text>
					Especializado em Tosa Verão, o Casa de Amigos é recomendado pra pets
					de pequeno a grande porte.
				</Text>
			</View>
		</>
	);
};

export default MyPetShop;
