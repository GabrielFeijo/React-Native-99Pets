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
import { MainButton, Titulo, ViewFoto, styles } from './style';
import * as ImagePicker from 'expo-image-picker';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../../contexts/Auth';
import api from '../../../axios/config';
import axios from 'axios';
import { NineMenu } from '../../NavBar/Menu';
import CurrencyInput from 'react-native-currency-input';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet } from 'react-native';

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontFamily: 'OpenSans_400Regular',
		fontSize: 16,
		paddingVertical: 15,
		borderStyle: 'solid',
		borderBottomWidth: 1,
		borderColor: 'rgba(0, 0, 0, 0.57)',
		color: 'rgba(0, 0, 0, 0.57)',
		marginBottom: 40,
	},
	inputAndroid: {
		fontFamily: 'OpenSans_400Regular',
		fontSize: 16,
		paddingVertical: 11,
		borderStyle: 'solid',
		borderBottomWidth: 1,
		borderColor: 'rgba(0, 0, 0, 0.57)',
		color: 'rgba(0, 0, 0, 0.57)',
		marginBottom: 40,
	},
	iconContainer: {
		top: '16%',
		right: 0,
	},
	placeholder: {
		color: '#8B8585',
	},
});

const RegisterProduct = (props) => {
	const [enableshift, setenableShift] = useState(false);
	const [modal, setModal] = useState(false);
	const [selected, setSelected] = useState(null);
	const [nome, onChangeNome] = useState(null);
	const [price, onChangePrice] = useState(null);
	const [desc, onChangeDesc] = useState(null);
	const [picture, setPicture] = useState(null);
	const [loading, setLoading] = useState(false);
	const { authData } = useAuth();
	const auth = useAuth();

	async function registrarPet() {
		if (nome && price && desc && picture && selected) {
			setLoading(true);
			setenableShift(false);
			const userStorage = await AsyncStorage.getItem('token_user');
			if (userStorage != null) {
				const userJson = JSON.parse(userStorage);

				const post = JSON.stringify({
					userid: userJson.id,
					image: picture,
					name: nome,
					weight: null,
					price: price,
					category: selected,
					description: desc,
				});

				try {
					await api.post(`/api/products`, post, {
						headers: {
							id: userJson.id,
							token: userJson.token,
						},
					});

					if (authData == undefined) {
						await auth.signIn(userJson);
					} else {
						props.navigation.navigate('HomePetShop');
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
		onChangeNome(null);
		onChangePrice(null);
		onChangeDesc(null);
		setSelected(null);
		setPicture(null);
	}

	const pickFromGallery = async () => {
		const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (granted) {
			let data = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [1, 1],
				quality: 0.5,
			});
			if (!data.canceled) {
				let newfile = {
					uri: data.assets[0].uri,
					type: `test/${data.assets[0].uri.split('.')[1]}`,
					name: `test.${data.assets[0].uri.split('.')[1]}`,
				};
				handleUpload(newfile);
				setLoading(true);
				setLoadingMessage(
					'Aguarde estamos processando e classificando sua imagem!'
				);
			}
		} else {
			Alert.alert('Você precisa de permissão para isso');
		}
	};

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

	const Dropdown = () => {
		return (
			<RNPickerSelect
				useNativeAndroidPickerStyle={false}
				style={pickerSelectStyles}
				placeholder={{ label: 'Categoria', value: null }}
				items={[
					{ label: 'Alimentos', value: 'food' },
					{ label: 'Brinquedos', value: 'toy' },
					{ label: 'Farmácia', value: 'phamarcy' },
					{ label: 'Acessórios', value: 'accessory' },
				]}
				value={selected}
				onValueChange={(value) => {
					setSelected(value);
				}}
				Icon={() => {
					return (
						<Icon
							name='arrow-drop-down'
							type='MaterialIcons'
							size={30}
							color='#000'
						/>
					);
				}}
			/>
		);
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
			<NineMenu />
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'position' : 'height'}
				style={styles.root}
				enabled={enableshift}
			>
				<View style={styles.wrap}>
					<View>
						<Titulo>Novo produto</Titulo>
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
									<Text style={styles.desc}>Foto do produto</Text>
								</>
							)}
						</ViewFoto>
					</View>
					<View>
						<Input
							value={nome}
							onChangeText={onChangeNome}
							placeholder='Nome do produto'
							label='Nome do produto'
							placeholderTextColor='#8B8585'
							onFocus={() => setenableShift(true)}
						/>
						<Input
							value={desc}
							onChangeText={onChangeDesc}
							placeholder='Descrição'
							label='Descrição'
							placeholderTextColor='#8B8585'
							onFocus={() => setenableShift(true)}
						/>

						<CurrencyInput
							value={price}
							onChangeValue={onChangePrice}
							placeholder='Valor'
							placeholderTextColor='#8B8585'
							prefix='R$'
							delimiter='.'
							separator=','
							precision={2}
							minValue={0}
							style={styles.priceEdit}
							onFocus={() => setenableShift(true)}
						/>
						<Dropdown />
						<MainButton
							onPress={() => {
								registrarPet();
							}}
						>
							<ButtonText>Adicionar produto</ButtonText>
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
		primary: '#63C5DA',
	},
};

export default RegisterProduct;
