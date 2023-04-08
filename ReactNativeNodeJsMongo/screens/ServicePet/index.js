import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { Text, styles } from './style';
import { NineMenu } from '../Menu';
import { StyleSheet } from 'react-native';
import { Card } from '../Card';
import { Button, ButtonText } from '../Home/style';

import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontFamily: 'Montserrat_400Regular',
		width: 350,
		fontSize: 16,
		paddingVertical: 10,
		paddingHorizontal: 5,
		borderWidth: 1,
		borderColor: '#2F2E41',
		backgroundColor: '#FFFFFF',
		borderRadius: 15,
		color: 'black',
		paddingRight: 30, // to ensure the text is never behind the icon
	},
	inputAndroid: {
		fontFamily: 'Montserrat_400Regular',
		width: 350,
		fontSize: 16,
		paddingVertical: 10,
		paddingHorizontal: 5,
		borderWidth: 1,
		borderColor: '#2F2E41',
		backgroundColor: '#FFFFFF',
		borderRadius: 15,
		color: 'black',
		paddingRight: 30, // to ensure the text is never behind the icon
	},
});

const ServicePet = (props) => {
	const [selected, setSelected] = useState('Banho & Tosa');
	const petid = props.route.params;
	const [pet, setPet] = useState([]);
	const fetchPet = async (id) => {
		const userStorage = await AsyncStorage.getItem('token_user');
		if (userStorage != null) {
			const userJson = JSON.parse(userStorage);

			fetch('https://99-Pets-Api.gabrielfeijo.repl.co/api/onePet?id=' + id, {
				headers: {
					id: userJson.id,
					token: userJson.token,
				},
			})
				.then((res) => res.json())
				.then((results) => {
					console.log(results.nome);
					setPet(results);
				})
				.catch((err) => {
					Alert.alert('Algo deu errado!');
				});
		} else {
			props.navigation.navigate('Login');
		}
	};

	useEffect(() => {
		fetchPet(petid);
	}, [petid]);

	const Dropdown = () => {
		return (
			<RNPickerSelect
				value={selected}
				onValueChange={(value) => {
					setSelected(value);
				}}
				items={[
					{ label: 'Banho e Tosa', value: 'Banho & Tosa' },
					{ label: 'Consultas veterinárias', value: 'Consultas veterinárias' },
					{ label: 'Vacinas', value: 'Vacinas' },
					{ label: 'Hospedagem', value: 'Hospedagem' },
					{ label: 'Spa', value: 'Spa' },
				]}
				style={pickerSelectStyles}
			/>
		);
	};

	return (
		<>
			<NineMenu />

			<View style={styles.root}>
				<View style={styles.wrap}>
					{pet && (
						<Card
							nome={pet.nome}
							info={pet.idade}
							info2={pet.raca}
							url={pet.picture}
						/>
					)}
					<Text
						onPress={() => {
							props.navigation.navigate('ListPets');
						}}
					>
						Não é esse pet?
					</Text>
				</View>
				<View>
					<Dropdown />
				</View>
				<Button
					onPress={() => {
						props.navigation.navigate('Locations', { selected, petid });
					}}
				>
					<ButtonText>Próximo</ButtonText>
				</Button>
			</View>
		</>
	);
};

export default ServicePet;
