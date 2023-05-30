import React, { useState, useEffect } from 'react';
import { Alert, View } from 'react-native';
import { Text, Titulo, styles } from './style';
import { NineMenu } from '../../NavBar/Menu';
import { Card2, DriverCard } from '../../General/Card';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import api from '../../../axios/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DriverLocation = (props) => {
	const [region, setRegion] = useState(null);
	const [driver, setDriver] = useState();

	const getCurrentPosition = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();

		if (status !== 'granted') {
			Alert.alert('Ops!', 'Permissão de acesso a localização negada.');
		}

		let {
			coords: { latitude, longitude },
		} = await Location.getCurrentPositionAsync();

		console.log(latitude, longitude);

		setRegion({
			latitude: latitude,
			longitude: longitude,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		});
		console.log(region);
	};

	const fetchDriver = async () => {
		const userStorage = await AsyncStorage.getItem('token_user');
		if (userStorage != null) {
			const userJson = JSON.parse(userStorage);
			try {
				const response = await api.get(`/api/drivers`, {
					headers: {
						id: userJson.id,
						token: userJson.token,
					},
				});

				const results = response.data;

				const number = getRandomInt(results.length - 1);
				setDriver(response.data[number]);
			} catch (error) {
				Alert.alert('Algo deu errado!');
			}
		}
	};

	const getRandomInt = (max) => {
		min = 0;
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min);
	};

	useEffect(() => {
		getCurrentPosition();
		fetchDriver();
	}, []);

	const initialRegion = {
		latitude: -8.066256003497354,
		longitude: -34.91492816732731,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01,
	};

	return (
		<>
			<NineMenu />

			<View style={styles.root}>
				<Titulo>Seu motorista está a caminho</Titulo>
				<View style={styles.wrap}>
					{driver && (
						<DriverCard
							url={driver.pictureUrl}
							nome={driver.nome}
							info={driver.vehicle.placa}
							quantidade={driver.rating}
						/>
					)}
				</View>
				{region && (
					<>
						<Text>Localização em tempo real:</Text>
						<MapView
							style={styles.map}
							initialRegion={region}
						>
							<Marker
								coordinate={{
									latitude: initialRegion.latitude,
									longitude: initialRegion.longitude,
								}}
								pinColor={'red'} // any color
								title={'Sua Localização'}
								description={'O motorista está chegando!'}
							/>
							<Marker
								coordinate={{
									latitude: Number(initialRegion.latitude) - 0.004,
									longitude: Number(initialRegion.longitude) - 0.003,
								}}
								pinColor={'blue'} // any color
								title={'Localização do motorista'}
								description={'Aguarde estou chegando!'}
							/>
						</MapView>
					</>
				)}
			</View>
		</>
	);
};

export default DriverLocation;
