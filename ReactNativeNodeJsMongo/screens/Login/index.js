import React, { useState } from 'react';
import {
	View,
	Image,
	KeyboardAvoidingView,
	Alert,
	ActivityIndicator,
} from 'react-native';
import { Titulo, Input, styles, Link, Password } from './style';
import { Button, ButtonText } from '../Home/style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props) => {
	const [enableshift, setenableShift] = useState(false);
	const [email, onChangeEmail] = useState('');
	const [senha, onChangePass] = useState('');
	const [loading, setLoading] = useState(false);

	function login(props) {
		if (email != '' && senha != '') {
			onChangeEmail('');
			onChangePass('');
			setLoading(true);
			fetch('https://api-99-pets.vercel.app/api/auth', {
				method: 'post',
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: email.toLowerCase(),
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
							storeData(infos.result);
							props.navigation.navigate('ListPets');
						});
					} else if (res.status == 401) {
						let myPromise = res.json();
						myPromise.then((infos) => {
							Alert.alert(infos.messages);
						});
					}
				})
				.catch((err) => {
					setLoading(false);
					Alert.alert('Algo deu errado');
				});
		} else {
			Alert.alert('Preencha todas as informações');
		}
	}

	const storeData = async (value) => {
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
				behavior='position'
				style={styles.root}
				enabled={enableshift}
			>
				<View style={styles.wrap}>
					<View style={styles.center}>
						<Image
							style={styles.image}
							source={require('../../assets/images/login.png')}
						/>
						<Titulo>Faça seu login</Titulo>
					</View>
					<View>
						<Input
							value={email}
							onChangeText={onChangeEmail}
							autoCapitalize='none'
							placeholder='E-mail'
							label='E-mail'
							placeholderTextColor='#8B8585'
							onFocus={() => setenableShift(true)}
						/>
						<Input
							value={senha}
							onChangeText={onChangePass}
							placeholder='Senha'
							label='Senha'
							secureTextEntry={true}
							placeholderTextColor='#8B8585'
							onFocus={() => setenableShift(true)}
						/>

						<Button
							onPress={() => {
								login(props);
							}}
						>
							<ButtonText>Entrar</ButtonText>
						</Button>
						<Password
							onPress={() => {
								props.navigation.navigate('Reset');
							}}
						>
							Esqueceu a senha?
						</Password>
					</View>
				</View>
			</KeyboardAvoidingView>
		</>
	);
};

export default Login;
