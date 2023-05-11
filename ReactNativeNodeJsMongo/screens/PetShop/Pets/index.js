import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Titulo, styles } from './style';
import { Text } from '../HomePetShop/style';
import { NineMenu } from '../../NavBar/Menu';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchBox from '../SearchBox';
import InfoPet from '../components/InfoPet';
import api from '../../../axios/config';

const Pets = (props) => {
	const isFocused = useIsFocused();
	const [filter, setFilter] = useState('');
	const [pets, setPets] = useState([]);
	const [allPets, setAllPets] = useState([]);
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
					console.log(response.data);
					setAllPets(response.data.animalsInCare);
					setPets(response.data.animalsInCare);
				} catch (error) {
					Alert.alert(error.response.data);
				}
			}
		})();
	}

	useEffect(() => {
		fetchData();
	}, [isFocused]);

	const onChange = (e) => {
		setPets(
			allPets.filter((pet) => pet.name.toLowerCase().includes(e.toLowerCase()))
		);

		setFilter(e);
	};
	return (
		<>
			<NineMenu />

			<View style={styles.wrap}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					<View style={styles.texto}>
						<Titulo>Pets</Titulo>
						<Text>
							Aqui você pode ver os pets que estão sendo cuidados no seu
							Petshop, atualizar status, solicitar volta do pet
						</Text>
					</View>
					<SearchBox
						handleChange={onChange}
						value={filter}
					/>

					{pets.map((pet) => (
						<InfoPet
							pet={pet}
							navigate={() =>
								props.navigation.navigate('PetDetails', { petid: pet.id })
							}
							key={pet.id}
						/>
					))}
				</ScrollView>
			</View>
		</>
	);
};

export default Pets;
