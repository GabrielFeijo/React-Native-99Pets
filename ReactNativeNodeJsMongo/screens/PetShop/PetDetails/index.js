import React from 'react';
import { NineMenu } from '../../NavBar/Menu';
import { Alert, ScrollView, TouchableOpacity } from 'react-native';
import { View } from 'react-native';

import { Text, styles } from './style';
import { useState } from 'react';
import { Card } from '../../User/Card';
import CalculateService from '../components/CalculateService';
import { Button, ButtonText } from '../../General/Home/style';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../axios/config';

const PetDetails = (props) => {
	const petid = props.route.params.petid;
	const [pet, setPet] = useState([]);
	const [details, setDetails] = useState();

	function fetchData() {
		(async () => {
			const userStorage = await AsyncStorage.getItem('token_user');
			if (userStorage !== null) {
				// value previously stored
				const userJson = JSON.parse(userStorage);

				try {
					const response = await api.get(`/api/pet/details?pet=${petid}`, {
						headers: {
							id: userJson.id,
							token: userJson.token,
						},
					});
					setDetails(response.data);

					const response2 = await api.get(`/api/onePet?id=${petid}`, {
						headers: {
							id: userJson.id,
							token: userJson.token,
						},
					});
					console.log(petid);
					setPet(response2.data);
				} catch (error) {
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
			<View style={styles.wrap}>
				{pet && details && (
					<View>
						<Card
							nome={pet.nome}
							info={pet.idade}
							info2={pet.raca}
							url={pet.picture}
						/>
						<Text>Os serviços selecionados foram:</Text>
						<CalculateService services={details.services} />
					</View>
				)}
				<Button
					onPress={() => {
						props.navigation.navigate('StatusPet', { petid: petid });
					}}
				>
					<ButtonText>Atualizar status</ButtonText>
				</Button>
			</View>
		</>
	);
};

export default PetDetails;
