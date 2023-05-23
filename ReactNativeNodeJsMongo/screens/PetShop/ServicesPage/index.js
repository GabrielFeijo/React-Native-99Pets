import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { BoxService, ServiceText, Text, styles } from './style';
import { Icon } from 'react-native-elements';
import { NineMenu } from '../../NavBar/Menu';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ListServices } from '../components/ServicesComponents';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../../axios/config';
import { useIsFocused } from '@react-navigation/native';

// const services = [
// 	{ type: 'Banho', price: 40 },
// 	{ type: 'Limpeza de ouvidos', price: 32 },
// 	{ type: 'Tosa', price: 50 },
// 	{ type: 'Corte de unhas', price: 20 },
// 	{ type: 'Escovação de dentes', price: 20 },
// 	{ type: 'Penteado', price: 15 },
// ];

const ServicesPage = (props) => {
	const [services, setServices] = useState([]);
	const isFocused = useIsFocused();

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
					setServices(response.data.services);
				} catch (error) {
					Alert.alert(error.response.data);
				}
			}
		})();
	}

	useEffect(() => {
		fetchData();
	}, [isFocused]);

	return (
		<>
			<NineMenu />
			<View style={styles.wrap}>
				<Text style={styles.texto}>
					Aqui estão os serviços oferecidos pelo seu Petshop
				</Text>
				{services.length > 0 && <ListServices services={services} />}

				<BoxService
					onPress={() => {
						props.navigation.navigate('EditService');
					}}
				>
					<Icon
						name='pluscircleo'
						type='antdesign'
						size={28}
					/>
					<ServiceText>Editar ou adicionar novo serviço</ServiceText>
				</BoxService>
			</View>
		</>
	);
};

export default ServicesPage;
