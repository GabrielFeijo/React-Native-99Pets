import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Titulo, styles } from './style';
import { Text } from '../HomePetShop/style';
import { NineMenu } from '../../NavBar/Menu';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchBox from '../SearchBox';
import InfoPet from '../InfoPet';

const pets = [
	{
		name: 'Mingau',
		species: 'Gato',
		breed: 'SRD',
	},
	{
		name: 'Jujuba',
		species: 'Cahorro',
		breed: 'Pug',
	},
	{
		name: 'Bob',
		species: 'Gato',
		breed: 'Siamês',
	},
	{
		name: 'Rex',
		species: 'Cachorro',
		breed: 'Lulu da pomerania',
	},
];

const Pets = (props) => {
	const isFocused = useIsFocused();

	function fetchData() {
		(async () => {
			const userStorage = await AsyncStorage.getItem('token_user');
			if (userStorage !== null) {
				// value previously stored
				const userJson = JSON.parse(userStorage);
				setNome(userJson.nome);
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

					<SearchBox />
					<InfoPet />
					<InfoPet />
					<InfoPet />
				</ScrollView>
			</View>
		</>
	);
};

export default Pets;
