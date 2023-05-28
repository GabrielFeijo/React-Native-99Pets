import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './style';
import { Titulo, Text } from '../../User/ListPets/style';
import { NineMenu } from '../Menu';
import { Card2, PetShopCard } from '../../General/Card';
import api from '../../../axios/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AllLocations = (props) => {
	const [locations, setLocations] = useState([]);

	const getData = async () => {
		const userStorage = await AsyncStorage.getItem('token_user');
		if (userStorage != null) {
			const userJson = JSON.parse(userStorage);
			const response = await api.get(`/api/shops`, {
				headers: {
					id: userJson.id,
					token: userJson.token,
				},
			});
			setLocations(response.data);
		}
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<>
			<NineMenu />
			<View style={styles.wrap}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					<Titulo>Nossos Pet Shops</Titulo>
					<Text>
						Estes são os Pet Shops mais bem avaliados do nosso aplicativo. Os
						Pet Shops passaram por uma série de avaliações para estarem hoje
						trabalhando conosco.
					</Text>
					{locations.length > 0 &&
						locations.map((location, index) => (
							<PetShopCard
								url={location.pictureUrl}
								nome={location.nome}
								info={location.description}
								quantidade={location.rating}
								key={index}
							/>
						))}
				</ScrollView>
			</View>
		</>
	);
};

export default AllLocations;
