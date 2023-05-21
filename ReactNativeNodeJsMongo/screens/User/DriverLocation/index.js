import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { NineMenu } from '../../NavBar/Menu';
import { Card2 } from '../../General/Card';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const DriverLocation = (props) => {
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
				<View style={styles.wrap}>
					<Card2
						url={require(`../../../assets/images/driver.png`)}
						nome={'José PDM'}
						info={'3,6 Km'}
						quantidade={4}
					/>
				</View>
				{region && (
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
				)}
			</View>
		</>
	);
};

export default DriverLocation;
