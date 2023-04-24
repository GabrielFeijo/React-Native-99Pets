import React, { useState, useEffect } from 'react';
import { Platform, View, Alert, StyleSheet } from 'react-native';
import { Service, ServiceText, Services, Text, styles } from './style';
import { NineMenu } from '../../NavBar/Menu';
import { Card } from '../Card';
import { Button, ButtonText } from '../../General/Home/style';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from 'react-native-elements';

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontFamily: 'Montserrat_500Medium',
		minWidth: '85%',
		fontSize: 16,
		paddingVertical: 15,
		paddingHorizontal: 10,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#2F2E41',
		borderRadius: 15,
		color: 'rgba(0, 0, 0, 0.57)',
		paddingRight: 30, // to ensure the text is never behind the icon
	},
	inputAndroid: {
		fontFamily: 'Montserrat_500Medium',
		minWidth: '85%',
		fontSize: 16,
		paddingVertical: 11,
		paddingHorizontal: 10,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#2F2E41',
		borderRadius: 15,
		color: 'rgba(0, 0, 0, 0.57)',
		paddingRight: 30, // to ensure the text is never behind the icon
	},
	iconContainer: {
		top: '22.5%',
		right: 10,
	},
});

const ServicePet = (props) => {
	const [selected, setSelected] = useState(null);
	const [services, setServices] = useState([]);
	const petid = props.route.params;
	const [pet, setPet] = useState([]);
	const fetchPet = async (id) => {
		const userStorage = await AsyncStorage.getItem('token_user');
		if (userStorage != null) {
			const userJson = JSON.parse(userStorage);

			fetch('https://api-99-pets.vercel.app/api/onePet?id=' + id, {
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

	const addService = (value) => {
		if (value == null) {
			return;
		}
		let index = services.findIndex((val) => val == value);
		if (index < 0) {
			setServices((oldArray) => [...oldArray, value]);
		}
	};

	const removeService = (value) => {
		setServices(services.filter((val) => val !== value));
	};

	useEffect(() => {
		fetchPet(petid);
	}, [petid]);

	const Dropdown = () => {
		return (
			<RNPickerSelect
				useNativeAndroidPickerStyle={false}
				style={pickerSelectStyles}
				placeholder={{ label: 'Qual serviço?', value: null }}
				items={[
					{ label: 'Banho e Tosa', value: 'Banho & Tosa' },
					{ label: 'Consultas veterinárias', value: 'Consultas veterinárias' },
					{ label: 'Vacinas', value: 'Vacinas' },
					{ label: 'Hospedagem', value: 'Hospedagem' },
					{ label: 'Spa', value: 'Spa' },
				]}
				value={selected}
				onValueChange={(value) => {
					addService(value);
					setSelected(value);
				}}
				Icon={() => {
					return (
						<Icon
							name='arrow-drop-down'
							type='MaterialIcons'
							size={30}
							color='#000'
						/>
					);
				}}
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
				<Services>
					{services.length > 0 ? (
						services.map((service, index) => (
							<Service key={index}>
								<ServiceText>{service}</ServiceText>
								<Icon
									name='close'
									type='EvilIcons'
									size={25}
									color='#000'
									onPress={() => {
										removeService(service);
									}}
								/>
							</Service>
						))
					) : (
						<ServiceText>Nenhum serviço selecionado!</ServiceText>
					)}
				</Services>
				<Button
					onPress={() => {
						props.navigation.navigate('Locations', { services, petid });
					}}
				>
					<ButtonText>Próximo</ButtonText>
				</Button>
			</View>
		</>
	);
};

export default ServicePet;
