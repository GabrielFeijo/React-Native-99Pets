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

const Reset = (props) => {
	const [enableshift, setenableShift] = useState(false);
	const [email, onChangeEmail] = useState('');
	const [loading, setLoading] = useState(false);

	function sendCode(props) {
		if (email != '') {
			onChangeEmail('');
			setLoading(true);
			fetch('https://99-Pets-Api.gabrielfeijo.repl.co/api/send-code', {
				method: 'post',
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: email.toLowerCase(),
				}),
			})
				.then((res) => {
					return res;
				})

				.then((res) => {
					setLoading(false);
					if (res.ok) {
						Alert.alert('Email enviado com sucesso!');
						props.navigation.navigate('Code');
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
						<Titulo>Informe seu Email</Titulo>
					</View>
					<View>
						<Input
							value={email}
							onChangeText={onChangeEmail}
							placeholder='E-mail'
							label='E-mail'
							placeholderTextColor='#8B8585'
							onFocus={() => setenableShift(true)}
						/>

						<Button
							onPress={() => {
								sendCode(props);
							}}
						>
							<ButtonText>Enviar código</ButtonText>
						</Button>
						<Button
							onPress={() => {
								props.navigation.navigate('Code');
							}}
						>
							<ButtonText>Já tenho um código</ButtonText>
						</Button>
					</View>
				</View>
			</KeyboardAvoidingView>
		</>
	);
};

export default Reset;
