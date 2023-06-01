import React from 'react';
import { Alert, View } from 'react-native';
import { Titulo, styles } from './style';
import { NineMenu } from '../../NavBar/Menu';
import { ScrollView } from 'react-native';
import { useState } from 'react';
import { ItemCard } from '../../General/Card';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../axios/config';
import ChatBot from '../ChatBot';

const StoreCategory = (props) => {
	const [title, setTitle] = useState('');
	const [products, setProducts] = useState([]);
	const category = props.route.params ? props.route.params.category : 'toy';

	const fetchProducts = async () => {
		const userStorage = await AsyncStorage.getItem('token_user');
		if (userStorage != null) {
			console.log(category);
			const userJson = JSON.parse(userStorage);

			try {
				const response = await api.get(`/api/products/${category}`, {
					headers: {
						id: userJson.id,
						token: userJson.token,
					},
				});

				console.log(response.data);
				setProducts(response.data);
			} catch (error) {
				Alert.alert(error.response.data);
			}
		}
	};

	useEffect(() => {
		fetchProducts();
		switch (category) {
			case 'food':
				setTitle('Alimentos');
				break;
			case 'toy':
				setTitle('Brinquedos');
				break;
			case 'Farmácia':
				setTitle('Alimentos');
				break;
			case 'accessory':
				setTitle('Acessórios');
				break;
			default:
				setTitle('Nossos Produtos');
		}
	}, []);

	return (
		<>
			<NineMenu />
			<ChatBot />
			<View style={styles.wrap}>
				<Titulo>{title}</Titulo>
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					<View style={styles.itens}>
						{products.length > 0 &&
							products.map((product) => (
								<ItemCard
									product={product}
									key={product._id}
								/>
							))}
					</View>
				</ScrollView>
			</View>
		</>
	);
};

export default StoreCategory;
