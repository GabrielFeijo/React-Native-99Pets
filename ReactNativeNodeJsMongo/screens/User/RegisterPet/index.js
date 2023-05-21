import React, { useState } from 'react';
import {
	View,
	KeyboardAvoidingView,
	Text,
	Modal,
	Alert,
	Image,
	Platform,
	ActivityIndicator,
} from 'react-native';
import { Input } from '../../General/Login/style';
import { ButtonText } from '../../General/Home/style';
import { MainButton, ViewFoto, styles } from './style';
import * as ImagePicker from 'expo-image-picker';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../../contexts/Auth';
import api from '../../../axios/config';
import axios from 'axios';

const RegisterPet = (props) => {
	const [enableshift, setenableShift] = useState(false);
	const [modal, setModal] = useState(false);
	const [nome, onChangeNome] = useState('');
	const [idade, onChangeIdade] = useState('');
	const [raca, onChangeRaca] = useState('');
	const [picture, setPicture] = useState('');
	const [loading, setLoading] = useState(false);
	const { authData } = useAuth();
	const auth = useAuth();

	async function registrarPet() {
		if (nome != '' && idade != '' && raca != '' && picture != '') {
			setLoading(true);
			setenableShift(false);
			const userStorage = await AsyncStorage.getItem('token_user');
			if (userStorage != null) {
				const userJson = JSON.parse(userStorage);

				const post = JSON.stringify({
					userid: userJson.id,
					nome: nome,
					idade: idade,
					raca: raca,
					picture: picture,
				});

				try {
					await api.post(`/api/newPet`, post, {
						headers: {
							id: userJson.id,
							token: userJson.token,
						},
					});

					if (authData == undefined) {
						await auth.signIn(userJson);
					} else {
						props.navigation.navigate('ListPets');
					}
					setLoading(false);
				} catch (error) {
					console.log(error);
					Alert.alert(error.response.data);
					setLoading(false);
				}

				setLoading(false);
			}
		} else {
			Alert.alert('Preencha todas as informações');
		}
		onChangeNome('');
		onChangeIdade('');
		onChangeRaca('');
		setPicture('');
	}

	const pickFromGallery = async () => {
		const { granted } = await ImagePicker.requestCameraPermissionsAsync();
		if (granted) {
			let data = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [1, 1],
				quality: 0.5,
			});
			if (!data.cancelled) {
				let newfile = {
					uri: data.uri,
					type: `test/${data.uri.split('.')[1]}`,
					name: `test.${data.uri.split('.')[1]}`,
				};
				handleUpload(newfile);
				setLoading(true);
			}
		} else {
			Alert.alert('você precisa de permissão para isso');
		}
	};
	// const pickFromCamera = async () => {
	// 	const { granted } = await ImagePicker.requestCameraPermissionsAsync();
	// 	if (granted) {
	// 		let data = await ImagePicker.launchCameraAsync({
	// 			mediaTypes: ImagePicker.MediaTypeOptions.Images,
	// 			allowsEditing: true,
	// 			aspect: [1, 1],
	// 			quality: 0.5,
	// 		});
	// 		if (!data.cancelled) {
	// 			let newfile = {
	// 				uri: data.uri,
	// 				type: `test/${data.uri.split('.')[1]}`,
	// 				name: `test.${data.uri.split('.')[1]}`,
	// 			};
	// 			handleUpload(newfile);
	// 			setLoading(true);
	// 		}
	// 	} else {
	// 		Alert.alert('você precisa de permissão para isso');
	// 	}
	// };

	const pickFromCamera = async () => {
		const { status } = await ImagePicker.requestCameraPermissionsAsync();
		if (status === 'granted') {
			let result = await ImagePicker.launchCameraAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [1, 1],
				quality: 0.5,
			});
			if (!result.canceled) {
				let newfile = {
					uri: result.assets[0].uri,
					type: `test/${result.assets[0].uri.split('.').pop()}`,
					name: `test.${result.assets[0].uri.split('.').pop()}`,
				};
				handleUpload(newfile);
				setLoading(true);
			}
		} else {
			Alert.alert('Você precisa de permissão para isso');
		}
	};

	const handleUpload = async (image) => {
		const data = new FormData();
		data.append('file', image);
		data.append('upload_preset', 'ml_default');
		data.append('cloud_name', 'doyx0y9ek');

		try {
			const response = await axios.post(
				`https://api.cloudinary.com/v1_1/doyx0y9ek/image/upload`,
				data,
				{ headers: { 'Content-Type': 'multipart/form-data' } }
			);

			setPicture(response.data.url);
			setModal(false);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			Alert.alert('Erro durante o upload');
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
					<View>
						<ViewFoto onPress={() => setModal(true)}>
							{picture ? (
								<Image
									style={{ width: 190, height: 190, borderRadius: 16 }}
									source={{ uri: picture }}
								/>
							) : (
								<>
									<Icon
										name='pluscircleo'
										type='antdesign'
									/>
									<Text style={styles.desc}>Foto do pet</Text>
								</>
							)}
						</ViewFoto>
					</View>
					<View>
						<Input
							value={nome}
							onChangeText={onChangeNome}
							placeholder='Nome do pet'
							label='Nome do pet'
							placeholderTextColor='#8B8585'
							onFocus={() => setenableShift(true)}
						/>
						<Input
							value={idade}
							onChangeText={onChangeIdade}
							placeholder='Idade do pet'
							label='Idade do pet'
							placeholderTextColor='#8B8585'
							onFocus={() => setenableShift(true)}
						/>
						<Input
							value={raca}
							onChangeText={onChangeRaca}
							placeholder='Raça do pet'
							label='Raça do pet'
							placeholderTextColor='#8B8585'
							onFocus={() => setenableShift(true)}
						/>

						<MainButton
							onPress={() => {
								registrarPet();
							}}
						>
							<ButtonText>Próximo</ButtonText>
						</MainButton>
						<Modal
							animationType='slide'
							transparent={true}
							visible={modal}
							onRequestClose={() => {
								setModal(false);
							}}
						>
							<View style={styles.modalView}>
								<View style={styles.modalButtonView}>
									<Button
										icon='camera'
										theme={theme}
										mode='contained'
										onPress={() => pickFromCamera()}
									>
										Câmera
									</Button>
									<Button
										icon='image-area'
										mode='contained'
										theme={theme}
										onPress={() => pickFromGallery()}
									>
										Galeria
									</Button>
								</View>
								<Button
									color='black'
									onPress={() => setModal(false)}
								>
									Cancelar
								</Button>
							</View>
						</Modal>
					</View>
				</View>
			</KeyboardAvoidingView>
		</>
	);
};

const theme = {
	colors: {
		primary: '#FFBD59',
	},
};

export default RegisterPet;
