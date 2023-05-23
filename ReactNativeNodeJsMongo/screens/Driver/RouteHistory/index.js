import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Titulo, Text, styles } from './style';
import { NineMenu } from '../../NavBar/Menu';
import { RouteCard } from '../../General/Card';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../axios/config';

const RouteHistory = (props) => {
	const navigate = (route, index) => {
		if (route.finished) {
			props.navigation.navigate('RouteDetails', {
				id: route.details_id,
				index: index,
			});
		}
	};

	const isFocused = useIsFocused();
	const [routes, setRoutes] = useState([]);

	function fetchData() {
		(async () => {
			const userStorage = await AsyncStorage.getItem('token_user');
			if (userStorage !== null) {
				// value previously stored
				const userJson = JSON.parse(userStorage);

				try {
					const response = await api.get(`/api/driver/${userJson.id}`, {
						headers: {
							id: userJson.id,
							token: userJson.token,
						},
					});
					setRoutes(response.data.routes);
				} catch (error) {
					console.log(error);

					Alert.alert(error.response.data);
				}
			}
		})();
	}
	useEffect(() => {
		fetchData();
	}, [isFocused]);

	return (
		<>
			<NineMenu />
			<View style={styles.wrap}>
				<Titulo>Minhas rotas</Titulo>
				<Text>
					Aqui você pode checar suas rotas ativas e as já realizadas. Clique em
					cada rota para detalhes
				</Text>
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					{routes.length > 0 ? (
						routes.map((route, index) => (
							<RouteCard
								route={route}
								number={routes.length - index}
								handleClick={() => navigate(route, routes.length - index)}
								key={index}
							/>
						))
					) : (
						<Text>Você ainda não fez nenhuma corrida!</Text>
					)}
				</ScrollView>
			</View>
		</>
	);
};

export default RouteHistory;
