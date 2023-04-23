import React, { useState } from 'react';
import {
	View,
	Image,
	KeyboardAvoidingView,
	Alert,
	Platform,
	ActivityIndicator,
} from 'react-native';
import { Titulo, Input } from '../Login/style';
import { Button, ButtonText } from '../Home/style';
import { styles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = (props) => {
	const [enableshift, setenableShift] = useState(false);
	const [nome, onChangeNome] = useState('');
	const [account, onChangeAccount] = useState('');
	const [senha, onChangeSenha] = useState('');
	const [confirmSenha, onChangeConfirmSenha] = useState('');
	const [loading, setLoading] = useState(false);

	async function cadastrar(props) {
		if (nome != '' && account != '' && senha != '' && confirmSenha != '') {
			if (senha != confirmSenha) {
				Alert.alert('As senhas não conferem!');
			} else {
				onChangeNome('');
				onChangeAccount('');
				onChangeSenha('');
				onChangeConfirmSenha('');
				setLoading(true);
				setenableShift(false);
				fetch('https://api-99-pets.vercel.app/api/createUser', {
					method: 'post',
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						nome: nome,
						email: account.toLowerCase(),
						senha: senha,
					}),
				})
					.then((res) => {
						return res;
					})
					.then((res) => {
						setLoading(false);
						if (res.status == 201) {
							let myPromise = res.json();
							myPromise.then((infos) => {
								fetch('https://api-99-pets.vercel.app/api/auth', {
									method: 'post',
									headers: {
										'Access-Control-Allow-Origin': '*',
										'Content-Type': 'application/json',
									},
									body: JSON.stringify({
										email: account.toLowerCase(),
										senha: senha,
									}),
								})
									.then((res) => {
										return res;
									})
									.then((res) => {
										setLoading(false);

										if (res.ok) {
											let myPromise = res.json();
											myPromise.then((infos) => {
												saveData(infos.result);
												props.navigation.navigate('CadastroPet');
											});
										} else if (res.status == 401) {
											let myPromise = res.json();
											myPromise.then((infos) => {
												Alert.alert(infos.messages);
											});
										}
									});
							});
						} else if (res.status == 409) {
							let myPromise = res.text();
							myPromise.then((message) => {
								Alert.alert(message);
							});
						}
					})
					.catch((err) => {
						setLoading(false);
						Alert.alert('Algo deu errado');
					});
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
				style={styles.root}
				enabled={enableshift}
			>
				<View style={styles.wrap}>
					<View style={styles.center}>
						<Image
							style={styles.image}
							source={require('../../assets/images/register.png')}
						/>
					</View>
					<View style={{ backgroundColor: '#f2f2f2' }}>
						<Titulo>Cadastro do tutor</Titulo>
						<Input
							value={nome}
							onChangeText={onChangeNome}
							placeholder='Nome Completo'
							label='Nome Completo'
							placeholderTextColor='#000000b3'
							onFocus={() => setenableShift(true)}
						/>

						<Input
							value={account}
							onChangeText={onChangeAccount}
							autoCapitalize='none'
							placeholder='Email'
							label='Email'
							placeholderTextColor='#000000b3'
							onFocus={() => setenableShift(true)}
						/>
						<Input
							value={senha}
							onChangeText={onChangeSenha}
							placeholder='Senha'
							label='Senha'
							secureTextEntry={true}
							placeholderTextColor='#000000b3'
							onFocus={() => setenableShift(true)}
						/>
						<Input
							value={confirmSenha}
							onChangeText={onChangeConfirmSenha}
							placeholder='Confirme a senha'
							label='Confirme a senha'
							secureTextEntry
							placeholderTextColor='#000000b3'
							onFocus={() => setenableShift(true)}
						/>

						<Button
							onPress={() => {
								cadastrar(props);
							}}
							style={{ marginTop: 50 }}
						>
							<ButtonText>Próximo</ButtonText>
						</Button>
					</View>
				</View>
			</KeyboardAvoidingView>
		</>
	);
};

export default Register;
