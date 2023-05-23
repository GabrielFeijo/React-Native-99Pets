import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { Titulo, Text, styles } from '../RouteHistory/style';
import { NineMenu } from '../../NavBar/Menu';
import {
	BoxInfo,
	Flex,
	PriceText,
	RouteAddress,
	RouteInfo,
	RouteText,
} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../axios/config';
import { format } from 'date-fns';

const RouteDetails = (props) => {
	const id = props.route.params.id;
	const index = props.route.params.index;
	const [route, setRoute] = useState('');
	console.log(id);

	function fetchData() {
		(async () => {
			const userStorage = await AsyncStorage.getItem('token_user');
			if (userStorage !== null) {
				// value previously stored
				const userJson = JSON.parse(userStorage);

				try {
					const response = await api.get(`/api/routes/${id}`, {
						headers: {
							id: userJson.id,
							token: userJson.token,
						},
					});
					setRoute(response.data);
				} catch (error) {
					console.log(error);
					Alert.alert(error.response.data);
				}
			}
		})();
	}
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<NineMenu />
			{route && (
				<View style={styles.wrap}>
					<Titulo>Rota #{index}</Titulo>
					<Text>
						Rota realizada em{' '}
						{format(new Date(route.created_at), 'dd/MM/yyyy HH:mm:ss')}
					</Text>

					<View>
						<RouteText>De:</RouteText>
						<RouteAddress>{route.from}</RouteAddress>
					</View>
					<View style={{ marginTop: 20 }}>
						<RouteText>Para:</RouteText>
						<RouteAddress>{route.to}</RouteAddress>
					</View>

					<BoxInfo>
						<RouteInfo>Tempo gasto: {route.time_spent} min</RouteInfo>
						<RouteInfo>
							Kilômetros rodados: {route.kilometers_driven} km
						</RouteInfo>
					</BoxInfo>

					<Flex>
						<PriceText>Valor da rota</PriceText>
						<PriceText>
							R$ {route.route_price.toFixed(2).replace('.', ',')}
						</PriceText>
					</Flex>
				</View>
			)}
		</>
	);
};

export default RouteDetails;
