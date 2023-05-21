import React, { useState, useEffect } from 'react';
import { View, ScrollView, Switch } from 'react-native';
import { Titulo, Text, styles, Nome, FlexBox, Status, Flex } from './style';
import { NineMenu } from '../../NavBar/Menu';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainCard } from '../../General/Card';
import { lista } from './aba';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Modal from '../Modal';

const HomeDriver = (props) => {
	const [nome, setNome] = useState('Motorista');
	const [region, setRegion] = useState(null);
	const [isEnabled, toggleSwitch] = useState(true);
	const [modal, setModal] = useState(false);

	const isFocused = useIsFocused();

	function fetchData() {
		(async () => {
			const userStorage = await AsyncStorage.getItem('token_user');
			if (userStorage !== null) {
				// value previously stored
				const userJson = JSON.parse(userStorage);
				setNome(userJson.nome);
			}
		})();
	}

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

	const handleClick = () => {
		setModal(false);
		props.navigation.navigate('CatchPet');
	};

	useEffect(() => {
		fetchData();
		getCurrentPosition();

		setTimeout(() => {
			setModal(true);
		}, 2000);
	}, [isFocused]);

	return (
		<>
			{modal && (
				<Modal
					setModal={setModal}
					handleClick={handleClick}
				/>
			)}
			<NineMenu />
			<View style={styles.wrap}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					<View style={{ height: 170 }}>
						<Titulo>
							Olá, <Nome>{nome}!</Nome>
						</Titulo>
						<Text>
							Aqui você pode checar sua carteira, suas rotas, ficar disponível
							para receber corridas
						</Text>
						<Flex>
							<Status>Status: {isEnabled ? 'Disponível' : 'Offline'} </Status>
							<Switch
								trackColor={{ false: '#767577', true: '#46DD7C' }}
								thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
								ios_backgroundColor='#3e3e3e'
								onValueChange={toggleSwitch}
								value={isEnabled}
							/>
						</Flex>
					</View>
					{region && (
						<MapView
							style={styles.map}
							initialRegion={region}
						>
							<Marker
								coordinate={{
									latitude: region.latitude,
									longitude: region.longitude,
								}}
								image={
									'https://www.shareicon.net/data/256x256/2016/01/15/703693_gps_512x512.png'
								}
								title={'Sua Localização'}
								style={{ width: 6, height: 28 }}
							/>
						</MapView>
					)}
					<FlexBox>
						{lista.map((item) => (
							<MainCard
								nome={item.nome}
								icon={item.icon}
								key={item.index}
								handleClick={() => props.navigation.navigate(item.navigate)}
							/>
						))}
					</FlexBox>
				</ScrollView>
			</View>
		</>
	);
};

export default HomeDriver;
