import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text, Titulo, styles } from './style';
import { NineMenu } from '../../NavBar/Menu';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Card, Card2 } from '../../General/Card';
import { Button, ButtonText } from '../../General/Home/style';

const DeliverPet = (props) => {
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
					<Titulo>Siga até o Petshop</Titulo>
					<Card2
						url={require(`../../../assets/images/local1.png`)}
						nome={'Casa de Amigos'}
						info={'3,6km'}
						quantidade={4}
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
				<Button
					onPress={() => {
						props.navigation.navigate('FinishRoute');
					}}
				>
					<ButtonText>O pet está no Petshop</ButtonText>
				</Button>
			</View>
		</>
	);
};

export default DeliverPet;
