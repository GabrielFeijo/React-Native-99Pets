import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Titulo, Text, styles, Nome } from './style';
import { Icon } from 'react-native-elements';
import { NineMenu } from '../Menu';
import { Card } from '../Card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let organizado = [];
const PhotoPet = (props) => {
	const [pets, setPets] = useState(false);
	const [nome, setNome] = useState('');

	const isFocused = useIsFocused();

	function fetchData() {
		(async () => {
			const userStorage = await AsyncStorage.getItem('token_user');
			if (userStorage !== null) {
				// value previously stored
				const userJson = JSON.parse(userStorage);
				fetch('https://api-99-pets.vercel.app/api/user', {
					headers: {
						id: userJson.id,
						token: userJson.token,
					},
				})
					.then((res) => res.json())
					.then((results) => {
						setNome(results.nome);
					})
					.catch((err) => {
						Alert.alert('Algo deu errado!');
					});
				fetch('https://api-99-pets.vercel.app/api/myPets', {
					headers: {
						id: userJson.id,
						token: userJson.token,
					},
				})
					.then((res) => res.json())
					.then((results) => {
						organizado = [];
						for (let i = 0; i < results.length; i++) {
							organizado.push(results[i]);
						}
						setPets(organizado);
						console.log(organizado);
					})
					.catch((err) => {
						Alert.alert('Algo deu errado!');
					});
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
					{pets ? (
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
							info={''}
							info2={''}
							url={'https://i.imgur.com/4LSmGYF.png'}
						/>
					)}
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
				</ScrollView>
			</View>
		</>
	);
};

export default PhotoPet;
