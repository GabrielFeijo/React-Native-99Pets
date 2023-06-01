import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text, Titulo, styles } from './style';
import { NineMenu } from '../../NavBar/Menu';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Card } from '../../General/Card';
import { Button, ButtonText } from '../../General/Home/style';

const CatchPet = (props) => {
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
					<Titulo>Siga até o local indicado no mapa</Titulo>
					<Text>Tutor - João Pimentel</Text>
					<Card
						nome={'Mingau'}
						info={'SRD'}
						info2={'8 meses'}
						url={
							'https://images.unsplash.com/photo-1600272008408-6e05d5aa3e7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2F0b3xlbnwwfHwwfHw%3D&w=1000&q=80'
						}
					/>
				</View>
				<Text>Localização em tempo real:</Text>
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
							description={'Você está aqui!'}
						/>
						<Marker
							coordinate={{
								latitude: Number(initialRegion.latitude) - 0.004,
								longitude: Number(initialRegion.longitude) - 0.003,
							}}
							pinColor={'blue'} // any color
							title={'Localização do pet'}
							description={'O pet está lhe aguardando!'}
						/>
					</MapView>
				)}
				<Button
					onPress={() => {
						props.navigation.navigate('DeliverPet');
					}}
				>
					<ButtonText>Peguei o pet</ButtonText>
				</Button>
			</View>
		</>
	);
};

export default CatchPet;
