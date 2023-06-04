import React, { useState, useEffect } from 'react';
import { View, Modal, Alert, ActivityIndicator } from 'react-native';
import { Titulo, Text, MainButton, styles } from './style';

import { NineMenu } from '../../NavBar/Menu';
import { Image } from 'react-native';
import { ButtonText } from '../../General/Home/style';
import { Button } from 'react-native-paper';
import Pet from '../../../assets/images/petdog.png';
import * as ImagePicker from 'expo-image-picker';
import api from '../../../axios/config';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const InfoPhoto = (props) => {
	const [modal, setModal] = useState(false);
	const [loading, setLoading] = useState(false);

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
			}
		} else {
			Alert.alert('você precisa de permissão para isso');
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
		setLoading(true);
		setModal(false);
		const data = new FormData();
		data.append('file', image);
		data.append('upload_preset', 'ml_default');
		data.append('cloud_name', 'doyx0y9ek');

		const userStorage = await AsyncStorage.getItem('token_user');
		if (userStorage != null) {
			const userJson = JSON.parse(userStorage);

			try {
				const imgResponse = await axios.post(
					`https://api.cloudinary.com/v1_1/doyx0y9ek/image/upload`,
					data
				);
				const update = JSON.stringify({
					update: {
						pictureUrl: imgResponse.data.url,
					},
				});
				await api.put(`/api/updateShop`, update, {
					headers: {
						id: userJson.id,
						token: userJson.token,
					},
				});
				setLoading(false);
				props.navigation.navigate('AccountCreated');
			} catch (err) {
				setLoading(false);
				Alert.alert('erro durante o upload');
			}
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
			<NineMenu />
			<View style={styles.wrap}>
				<View>
					<Titulo>Tirar foto do Petshop</Titulo>
					<Text>
						Tire uma foto do seu Petshop, para que os tutores possam ver onde
						estarão seus pets!
					</Text>
				</View>
				<Image source={Pet} />
				<MainButton onPress={() => setModal(true)}>
					<ButtonText>Tirar foto</ButtonText>
				</MainButton>
			</View>
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
		</>
	);
};
const theme = {
	colors: {
		primary: '#63C5DA',
	},
};
export default InfoPhoto;
