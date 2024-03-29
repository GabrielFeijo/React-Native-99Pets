import React from 'react';
import { NineMenu } from '../../NavBar/Menu';
import { Alert, ScrollView, TouchableOpacity } from 'react-native';
import { View } from 'react-native';

import { Text, styles } from './style';
import { useState } from 'react';
import { Card } from '../../General/Card';
import CalculateService from '../components/CalculateService';
import { Button, ButtonText } from '../../General/Home/style';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../axios/config';
import StatusComponent from '../components/StatusComponent';

const StatusPet = (props) => {
	const petid = props.route.params.petid;
	const [pet, setPet] = useState([]);
	const [details, setDetails] = useState();
	const [disabled, setDisabled] = useState(true);

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
					setDetails(response.data.states);

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

	const handleChange = (status) => {
		const myList = [...details];
		const update = myList.find((detail) => detail.name === status.name);
		if (!update.value) {
			update.value = true;
			update.updated_at = new Date();

			if (status.name === 'Pet está pronto para ir para casa') {
				setDisabled(false);
			}
			setDetails(myList);
		}
	};

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
						{details.map((status, index) => (
							<StatusComponent
								status={status}
								handleChange={handleChange}
								key={index}
							/>
						))}
					</View>
				)}
				<Button
					disabled={disabled}
					style={disabled && styles.btn_disabled}
					onPress={() => {
						props.navigation.navigate('LookingDriver');
					}}
				>
					<ButtonText>Solicitar busca do pet</ButtonText>
				</Button>
			</View>
		</>
	);
};

export default StatusPet;
