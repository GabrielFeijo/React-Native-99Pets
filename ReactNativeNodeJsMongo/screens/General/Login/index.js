import React, { useEffect, useState } from 'react';
import {
	View,
	Image,
	KeyboardAvoidingView,
	Alert,
	Platform,
	ActivityIndicator,
} from 'react-native';
import { Titulo, Input, styles, Password } from './style';
import { Button, ButtonText } from '../Home/style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../../contexts/Auth';
import api from '../../../axios/config';

const Login = (props) => {
	const [enableshift, setenableShift] = useState(false);
	const [email, onChangeEmail] = useState('');
	const [senha, onChangePass] = useState('');
	const [loading, setLoading] = useState(false);

	const { authData } = useAuth();
	const auth = useAuth();

	async function login(props) {
		if (email != '' && senha != '') {
			onChangeEmail('');
			onChangePass('');
			setLoading(true);

			const post = JSON.stringify({
				email: email.toLowerCase(),
				senha: senha,
			});

			try {
				const login = await api.post(`/api/auth`, post);
				const token = login.data.result;
				await storeData(token);
				await auth.signIn(token);
				setLoading(false);
			} catch (error) {
				Alert.alert(error.response.data.messages[0]);
				setLoading(false);
			}
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
				behavior={Platform.OS === 'ios' ? 'position' : 'height'}
				style={styles.root}
				enabled={enableshift}
			>
				<View style={styles.wrap}>
					<View style={styles.center}>
						<Image
							style={styles.image}
							source={require('../../../assets/images/login.png')}
						/>
					</View>
					<View>
						<Titulo>Entrar</Titulo>
						<Input
							value={email}
							onChangeText={onChangeEmail}
							autoCapitalize='none'
							placeholder='E-mail'
							label='E-mail'
							placeholderTextColor='#000000b3'
							onFocus={() => setenableShift(true)}
						/>
						<Input
							value={senha}
							onChangeText={onChangePass}
							placeholder='Senha'
							label='Senha'
							secureTextEntry={true}
							placeholderTextColor='#000000b3'
							onFocus={() => setenableShift(true)}
						/>
						<Password
							onPress={() => {
								props.navigation.navigate('Reset');
							}}
						>
							Esqueci minha senha
						</Password>
					</View>
					<Button
						onPress={() => {
							login(props);
						}}
					>
						<ButtonText>Entrar</ButtonText>
					</Button>
				</View>
			</KeyboardAvoidingView>
		</>
	);
};

export default Login;
