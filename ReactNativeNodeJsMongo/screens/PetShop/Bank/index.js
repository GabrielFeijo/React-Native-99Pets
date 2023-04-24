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
import api from '../../../axios/config';

const Bank = (props) => {
	const [enableshift, setenableShift] = useState(false);
	const [agency, onChangeAgency] = useState('');
	const [account, onChangeAccount] = useState('');
	const [bank, onChangeBank] = useState('');
	const [loading, setLoading] = useState(false);
	let info = {};

	async function cadastrar(props) {
		if (agency != '' && account != '' && bank != '') {
			onChangeAccount('');
			onChangeAgency('');
			onChangeBank('');
			setLoading(true);
			setenableShift(false);
			const userStorage = await AsyncStorage.getItem('token_user');

			if (userStorage !== null) {
				const userJson = JSON.parse(userStorage);

				const update = JSON.stringify({
					update: {
						bank: {
							agencia: agency,
							conta: account,
							banco: bank,
						},
					},
				});

				if (userJson.roles[0] === 'driver') {
					info = {
						userid: userJson.id,
						url: '/api/updateDriver',
						navigation: 'Vehicle',
					};
				} else {
					info = {
						userid: userJson.id,
						url: '/api/updateShop',
						navigation: 'InitialPetShop',
					};
				}

				try {
					await api.put(info.url, update, {
						headers: {
							id: userJson.id,
							token: userJson.token,
						},
					});
					props.navigation.navigate(info.navigation);
					setLoading(false);
				} catch (error) {
					Alert.alert(error.response.data);
					setLoading(false);
				}
			}
		} else {
			Alert.alert('Preencha todas as informações');
		}
	}

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
						<Titulo>Dados bancários</Titulo>
						<Input
							value={account}
							onChangeText={onChangeAccount}
							keyboardType='numeric'
							placeholder='Conta bancária'
							label='Conta bancária'
							placeholderTextColor='#000000b3'
							onFocus={() => setenableShift(true)}
						/>

						<Input
							value={agency}
							onChangeText={onChangeAgency}
							keyboardType='numeric'
							autoCapitalize='none'
							placeholder='Agência'
							label='Agência'
							placeholderTextColor='#000000b3'
							onFocus={() => setenableShift(true)}
						/>
						<Input
							value={bank}
							onChangeText={onChangeBank}
							keyboardType='numeric'
							autoCapitalize='none'
							placeholder='Banco'
							label='Banco'
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

export default Bank;
