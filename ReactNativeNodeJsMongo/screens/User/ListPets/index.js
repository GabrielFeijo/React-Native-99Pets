import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Titulo, Text, styles, Nome } from './style';
import { Icon } from 'react-native-elements';
import { NineMenu } from '../../NavBar/Menu';
import { Card, MarketCard } from '../../General/Card/index';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../axios/config';
import ChatBot from '../ChatBot';

let organizado = [];
const PhotoPet = (props) => {
	const [pets, setPets] = useState([]);
	const [nome, setNome] = useState('');

	const isFocused = useIsFocused();

	function fetchData() {
		(async () => {
			const userStorage = await AsyncStorage.getItem('token_user');
			if (userStorage !== null) {
				// value previously stored
				const userJson = JSON.parse(userStorage);
				setNome(userJson.nome);

				try {
					const response = await api.get(`/api/myPets`, {
						headers: {
							id: userJson.id,
							token: userJson.token,
						},
					});

					organizado = [];
					const results = response.data;

					for (let i = 0; i < results.length; i++) {
						organizado.push(results[i]);
					}
					setPets(organizado);
				} catch (error) {
					Alert.alert('Algo deu errado!');
				}
			} else {
				props.navigation.navigate('Login');
			}
		})();
	}

	useEffect(() => {
		setPets(false);
		fetchData();
	}, [isFocused]);

	return (
		<>
			<NineMenu />
			<ChatBot />
			<View style={styles.wrap}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					<Titulo>
						Olá, <Nome>{nome}!</Nome>
					</Titulo>
					<Text style={styles.texto}>
						Se seu pet nao estiver na lista, pode adicioná-lo clicando no botão
						abaixo
					</Text>

					<MarketCard
						handleClick={() => props.navigation.navigate('MarketPlace')}
					/>
					<TouchableOpacity
						style={styles.icone}
						onPress={() => {
							props.navigation.navigate('CadastroPet');
						}}
					>
						<Icon
							name='pluscircleo'
							type='antdesign'
							size={30}
						/>
						<Text style={styles.textIcone}>Adicionar novo pet</Text>
					</TouchableOpacity>

					{pets.length > 0 ? (
						pets.map((pet) => (
							<TouchableOpacity
								onPress={() => {
									props.navigation.navigate('ServicePet', pet._id);
								}}
								onLongPress={() => {
									props.navigation.navigate('EditPet', pet._id);
								}}
								key={pet._id + 'gg'}
							>
								<Card
									nome={pet.nome}
									info={pet.idade}
									info2={pet.raca}
									url={pet.picture}
								/>
							</TouchableOpacity>
						))
					) : (
						<Card
							nome={'Sem registro de Pets'}
							info={'Adicione um clicando no botão abaixo'}
							info2={''}
							url={'https://i.imgur.com/4LSmGYF.png'}
						/>
					)}
				</ScrollView>
			</View>
		</>
	);
};

export default PhotoPet;
