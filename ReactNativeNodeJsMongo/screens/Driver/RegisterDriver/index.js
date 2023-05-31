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

const RegisterDriver = (props) => {
	const [enableshift, setenableShift] = useState(false);
	const [nome, onChangeNome] = useState('');
	const [CPF, onChangeCPF] = useState('');
	const [account, onChangeAccount] = useState('');
	const [senha, onChangeSenha] = useState('');
	const [confirmSenha, onChangeConfirmSenha] = useState('');
	const [loading, setLoading] = useState(false);
	const auth = useAuth();

	async function cadastrar(props) {
		if (
			nome != '' &&
			CPF != '' &&
			account != '' &&
			senha != '' &&
			confirmSenha != ''
		) {
			if (senha != confirmSenha) {
				Alert.alert('As senhas não conferem!');
			} else {
				onChangeNome('');
				onChangeAccount('');
				onChangeSenha('');
				onChangeConfirmSenha('');
				onChangeCPF('');
				setLoading(true);
				setenableShift(false);

				const post = JSON.stringify({
					nome: nome,
					CPF: CPF,
					email: account.toLowerCase(),
					senha: senha,
					roles: ['driver'],
				});

				try {
					await api.post(`/api/newDriver`, post);
					const login = await api.post(
						`/api/auth`,
						JSON.stringify({
							email: account.toLowerCase(),
							senha: senha,
						})
					);
					saveData(login.data.result);
					props.navigation.navigate('Bank');
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
			<ScrollView
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
			>
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'position' : 'height'}
					enabled={enableshift}
					style={styles.root}
				>
					<View style={styles.wrap}>
						<View />
						<Image
							style={styles.image}
							source={require('../../../assets/images/rabit.png')}
						/>
						<View style={{ backgroundColor: '#f2f2f2' }}>
							<Titulo>Criar conta</Titulo>
							<Input
								value={nome}
								onChangeText={onChangeNome}
								placeholder='Nome completo'
								label='Nome completo'
								placeholderTextColor='#000000b3'
								onFocus={() => setenableShift(true)}
							/>

							<Input
								value={CPF}
								onChangeText={onChangeCPF}
								autoCapitalize='none'
								placeholder='CPF'
								label='CPF'
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
			</ScrollView>
		</>
	);
};

export default RegisterDriver;
