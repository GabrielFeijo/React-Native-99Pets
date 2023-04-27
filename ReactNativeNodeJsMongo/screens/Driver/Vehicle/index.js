import React, { useState } from 'react';
import {
	View,
	Image,
	KeyboardAvoidingView,
	Alert,
	Platform,
	ActivityIndicator,
	ScrollView,
} from 'react-native';
import { Titulo, Input } from '../../General/Login/style';
import { Button, ButtonText } from '../../General/Home/style';
import { styles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../../contexts/Auth';
import api from '../../../axios/config';

const Vehicle = (props) => {
	const [enableshift, setenableShift] = useState(false);
	const [plate, onChangePlate] = useState('');
	const [name, onChangeName] = useState('');
	const [model, onChangeModel] = useState('');
	const [loading, setLoading] = useState(false);
	const auth = useAuth();

	async function cadastrar(props) {
		if (plate != '' && name != '' && model != '') {
			onChangeName('');
			onChangePlate('');
			onChangeModel('');
			setLoading(true);
			setenableShift(false);
			const userStorage = await AsyncStorage.getItem('token_user');

			if (userStorage !== null) {
				const userJson = JSON.parse(userStorage);

				const update = JSON.stringify({
					update: {
						vehicle: {
							nome: name,
							modelo: model,
							placa: plate,
						},
					},
				});

				try {
					await api.put(`/api/updateDriver`, update, {
						headers: {
							id: userJson.id,
							token: userJson.token,
						},
					});
					props.navigation.navigate('DriverPhoto');
				} catch (error) {
					Alert.alert(error.response.data);
					setLoading(false);
				}
			}
		} else {
			Alert.alert('Preencha todas as informações');
		}
	}

	const saveData = async (value) => {
		try {
			const jsonValue = JSON.stringify(value);
			await AsyncStorage.setItem('token_user', jsonValue);
		} catch (e) {
			// saving error
		}
	};
	return (
		<>
			{loading && (
				<View style={styles.loadingScreen}>
					<ActivityIndicator
						color='white'
						size='large'
					></ActivityIndicator>
				</View>
			)}

			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'position' : 'height'}
				enabled={enableshift}
				style={styles.root}
			>
				<View style={styles.wrap}>
					<Image
						style={styles.image}
						source={require('../../../assets/images/rabit.png')}
					/>
					<View style={{ backgroundColor: '#f2f2f2' }}>
						<Titulo>Dados do veículo</Titulo>
						<Input
							value={name}
							onChangeText={onChangeName}
							placeholder='Qual o veículo?'
							label='Qual o veículo?'
							placeholderTextColor='#000000b3'
							onFocus={() => setenableShift(true)}
						/>

						<Input
							value={plate}
							onChangeText={onChangePlate}
							autoCapitalize='none'
							placeholder='Placa do veículo'
							label='Placa do veículo'
							placeholderTextColor='#000000b3'
							onFocus={() => setenableShift(true)}
						/>
						<Input
							value={model}
							onChangeText={onChangeModel}
							autoCapitalize='none'
							placeholder='Modelo do veículo'
							label='Modelo do veículo'
							placeholderTextColor='#000000b3'
							onFocus={() => setenableShift(true)}
						/>
					</View>
					<Button
						onPress={() => {
							cadastrar(props);
						}}
					>
						<ButtonText>Próximo</ButtonText>
					</Button>
				</View>
			</KeyboardAvoidingView>
		</>
	);
};

export default Vehicle;
