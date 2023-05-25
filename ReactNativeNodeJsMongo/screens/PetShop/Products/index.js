import React, { useState, useEffect } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import {
	Titulo,
	Text,
	styles,
	NewProduct,
	ProductText,
	ProductsBox,
} from './style';
import { NineMenu } from '../../NavBar/Menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../axios/config';
import { Icon } from 'react-native-elements';
import { ItemCard } from '../../General/Card';

const Products = (props) => {
	const [products, setProducts] = useState([]);

	function fetchData() {
		(async () => {
			const userStorage = await AsyncStorage.getItem('token_user');
			if (userStorage !== null) {
				// value previously stored
				const userJson = JSON.parse(userStorage);

				try {
					const response = await api.get(`/api/shopProducts`, {
						headers: {
							id: userJson.id,
							token: userJson.token,
						},
					});
					setProducts(response.data);
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
				<Titulo>Produtos</Titulo>
				<Text>Aqui estão os produtos oferecidos pelo seu Petshop</Text>
				<NewProduct
					onPress={() => {
						props.navigation.navigate('RegisterProduct');
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
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					<ProductsBox>
						{products.length > 0 &&
							products.map((product) => (
								<ItemCard
									product={product}
									key={product._id}
								/>
							))}
					</ProductsBox>
				</ScrollView>
			</View>
		</>
	);
};

export default Products;
