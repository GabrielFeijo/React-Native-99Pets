import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './style';
import { Titulo, Text } from '../ListPets/style';
import { Icon } from 'react-native-elements';
import { NineMenu } from '../../NavBar/Menu';
import { Card2, PetShopCard } from '../../General/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PetShops from '../../PetShops/main';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../axios/config';

const Locations = (props) => {
	console.log(props);

	const petid = props.route.params.petid;
	const services = props.route.params.services;
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
					<Titulo>Qual petshop?</Titulo>
					<Text>
						Os petshops dessa lista são os mais indicados para o serviço
						escolhido.
					</Text>
					{locations.length > 0 &&
						locations.map((location, index) => (
							<TouchableOpacity
								key={index}
								onPress={() => {
									props.navigation.navigate('InfoLocation', {
										petid,
										services,
										location,
									});
								}}
							>
								<PetShopCard
									url={location.pictureUrl}
									nome={location.nome}
									info={location.description}
									quantidade={location.rating}
									key={index}
								/>
							</TouchableOpacity>
						))}
				</ScrollView>
			</View>
		</>
	);
};

export default Locations;
