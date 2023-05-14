import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text, Titulo, styles } from './style';
import { NineMenu } from '../../NavBar/Menu';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const LookingDriver = (props) => {
	const [region, setRegion] = useState(null);

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

	useEffect(() => {
		getCurrentPosition();

		setTimeout(() => {
			props.navigation.navigate('DriverLocation2');
		}, 2000);
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
				<Titulo>Procurando motorista...</Titulo>
				<Text>
					Estamos procurando motoristas por perto, isso pode levar alguns
					minutos
				</Text>
				{region && (
					<MapView
						style={styles.map}
						initialRegion={region}
					></MapView>
				)}
			</View>
		</>
	);
};

export default LookingDriver;
