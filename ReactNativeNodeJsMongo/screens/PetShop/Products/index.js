import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Titulo, Text, styles, NewProduct, ProductText } from './style';
import { NineMenu } from '../../NavBar/Menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../axios/config';
import { Icon } from 'react-native-elements';

const Products = (props) => {
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
				<Titulo>Produtos</Titulo>
				<Text>Aqui estão os produtos oferecidos pelo seu Petshop</Text>
				<NewProduct
					onPress={() => {
						props.navigation.navigate('EditService');
					}}
				>
					<Icon
						name='pluscircleo'
						type='antdesign'
						size={28}
					/>
					<ProductText style={styles.textIcone}>
						Editar ou adicionar novo produto
					</ProductText>
				</NewProduct>
			</View>
		</>
	);
};

export default Products;
