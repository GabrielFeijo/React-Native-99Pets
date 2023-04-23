import React, { useState } from 'react';
import {
	View,
	Image,
	KeyboardAvoidingView,
	Alert,
	Platform,
	ActivityIndicator,
} from 'react-native';
import { Titulo, Input, styles, Link, Password } from './style';
import { Button, ButtonText } from '../Home/style';

const Code = (props) => {
	const [enableshift, setenableShift] = useState(false);
	const [code, onChangeCode] = useState('');
	const [pass, onChangePass] = useState('');
	const [rPass, onChangeRPass] = useState('');
	const [loading, setLoading] = useState(false);

	function verifyCode(props) {
		if (code != '' && pass != '' && rPass != '') {
			if (pass != rPass) {
				Alert.alert('As senhas digitadas não coincidem!');
				return;
			}

			onChangeRPass('');
			onChangePass('');
			onChangeCode('');
			setLoading(true);
			fetch('https://api-99-pets.vercel.app/api/verify-code', {
				method: 'post',
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					code: code.toLowerCase(),
					senha: pass,
				}),
			})
				.then((res) => {
					return res;
				})

				.then((res) => {
					setLoading(false);
					if (res.ok) {
						Alert.alert('Senha alterada com sucesso!');
						props.navigation.navigate('Login');
					} else if (res.status == 400) {
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
				style={styles.root}
				enabled={enableshift}
			>
				<View style={styles.wrap}>
					<View style={styles.center}>
						<Image
							style={styles.image}
							source={require('../../assets/images/login.png')}
						/>
						<Titulo>Informe seu código e senha</Titulo>
					</View>
					<View>
						<Input
							value={code}
							onChangeText={onChangeCode}
							placeholder='Código'
							label='Código'
							placeholderTextColor='#8B8585'
							onFocus={() => setenableShift(true)}
						/>

						<Input
							value={pass}
							onChangeText={onChangePass}
							placeholder='Senha'
							label='Senha'
							secureTextEntry={true}
							placeholderTextColor='#8B8585'
							onFocus={() => setenableShift(true)}
						/>
						<Input
							value={rPass}
							onChangeText={onChangeRPass}
							placeholder='Repita a Senha'
							label='Repita a Senha'
							secureTextEntry={true}
							placeholderTextColor='#8B8585'
							onFocus={() => setenableShift(true)}
						/>

						<Button
							onPress={() => {
								verifyCode(props);
							}}
						>
							<ButtonText>Redefinir senha</ButtonText>
						</Button>
						<Button
							onPress={() => {
								props.navigation.navigate('Login');
							}}
						>
							<ButtonText>Voltar</ButtonText>
						</Button>
					</View>
				</View>
			</KeyboardAvoidingView>
		</>
	);
};

export default Code;
