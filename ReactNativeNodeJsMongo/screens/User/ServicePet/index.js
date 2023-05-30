import React, { useState, useEffect } from 'react';
import { Platform, View, Alert, StyleSheet } from 'react-native';
import { Service, ServiceText, Services, Text, styles } from './style';
import { NineMenu } from '../../NavBar/Menu';
import { Card } from '../../General/Card';
import { Button, ButtonText } from '../../General/Home/style';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from 'react-native-elements';
import api from '../../../axios/config';

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

const data = [
	{ name: 'Banho e Tosa', price: 50 },
	{ name: 'Consultas veterinárias', price: 72 },
	{ name: 'Vacinas', price: 122 },
	{ name: 'Hospedagem', price: 95 },
	{ name: 'Spa', price: 43 },
];

const ServicePet = (props) => {
	const [selected, setSelected] = useState(null);
	const [services, setServices] = useState([]);
	const petid = props.route.params;
	const [pet, setPet] = useState([]);
	const fetchPet = async (id) => {
		const userStorage = await AsyncStorage.getItem('token_user');
		if (userStorage != null) {
			const userJson = JSON.parse(userStorage);

			try {
				const response = await api.get(`/api/onePet?id=${id}`, {
					headers: {
						id: userJson.id,
						token: userJson.token,
					},
				});
				setPet(response.data);
			} catch (error) {
				Alert.alert('Algo deu errado!');
			}
		} else {
			props.navigation.navigate('Login');
		}
	};

	const addService = (value) => {
		if (value == null) {
			return;
		}
		let index = services.findIndex((val) => val.name == value.name);
		if (index < 0) {
			setServices((oldArray) => [
				...oldArray,
				{ name: value.name, price: value.price },
			]);
		}
	};

	const removeService = (value) => {
		setServices(services.filter((val) => val !== value));
	};

	const confirmService = () => {
		if (services.length > 0) {
			props.navigation.navigate('Locations', { services, petid });
		} else {
			Alert.alert('Selecione pelo menos um serviço');
		}
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
					{ label: 'Banho e Tosa', value: 0 },
					{ label: 'Consultas veterinárias', value: 1 },
					{ label: 'Vacinas', value: 2 },
					{ label: 'Hospedagem', value: 3 },
					{ label: 'Spa', value: 4 },
				]}
				value={selected}
				onValueChange={(value) => {
					addService(data[value]);
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
								<ServiceText>{service.name}</ServiceText>
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
				<Button onPress={confirmService}>
					<ButtonText>Próximo</ButtonText>
				</Button>
			</View>
		</>
	);
};

export default ServicePet;
