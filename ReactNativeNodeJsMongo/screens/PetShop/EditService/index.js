import React, { useState, useEffect } from 'react';
import { Alert, View } from 'react-native';
import { Text, styles } from './style';
import { NineMenu } from '../../NavBar/Menu';
import { EditServices } from '../components/ServicesComponents';
import { Button, ButtonText } from '../../General/Home/style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../axios/config';

// const data = [
// 	{ type: 'Banho', price: '40,00' },
// 	{ type: 'Limpeza de ouvidos', price: '32,00' },
// 	{ type: 'Tosa', price: '50,00' },
// 	{ type: 'Corte de unhas', price: '20,00' },
// 	{ type: 'Escovação de dentes', price: '20,00' },
// 	{ type: 'Penteado', price: '15,00' },
// ];

const EditService = (props) => {
	const [services, setServices] = useState([]);
	const [user, setUser] = useState();

	function fetchData() {
		(async () => {
			const userStorage = await AsyncStorage.getItem('token_user');
			if (userStorage !== null) {
				// value previously stored
				const userJson = JSON.parse(userStorage);
				setUser(userJson);

				try {
					const response = await api.get(`/api/shop`, {
						headers: {
							id: userJson.id,
							token: userJson.token,
						},
					});
					setServices(response.data.services);
				} catch (error) {
					Alert.alert(error.response.data);
				}
			}
		})();
	}

	useEffect(() => {
		fetchData();
	}, []);

	function handleChange(e, index) {
		const myList = [...services];
		const update = myList.find((a, i) => i === index);
		update.type = e;

		setServices(myList);
	}

	function handleNumber(number, index) {
		const myList = [...services];
		const update = myList.find((a, i) => i === index);

		update.price = number;

		setServices(myList);
	}

	const saveData = async () => {
		const update = JSON.stringify({
			update: {
				services,
			},
		});
		try {
			await api.put(`/api/updateShop`, update, {
				headers: {
					id: user.id,
					token: user.token,
				},
			});
			props.navigation.navigate('ServicesPage');
		} catch (error) {
			Alert.alert(error.response.data);
		}
	};

	return (
		<>
			<NineMenu />
			<View style={styles.wrap}>
				<Text style={styles.texto}>Clique nos serviços para editá-los</Text>
				<EditServices
					services={services}
					handleChange={handleChange}
					handleNumber={handleNumber}
				/>
				<Button onPress={saveData}>
					<ButtonText>Pronto</ButtonText>
				</Button>
			</View>
		</>
	);
};

export default EditService;
