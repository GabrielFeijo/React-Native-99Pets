import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Titulo, Text, styles, Nome, FlexBox } from './style';
import { NineMenu } from '../../NavBar/Menu';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainCard } from '../../User/Card';
import { lista } from './aba';

const HomePetShop = (props) => {
	const [nome, setNome] = useState('Casa de Amigos');

	const isFocused = useIsFocused();

	function fetchData() {
		(async () => {
			const userStorage = await AsyncStorage.getItem('token_user');
			if (userStorage !== null) {
				// value previously stored
				const userJson = JSON.parse(userStorage);
				setNome(userJson.nome);
			}
		})();
	}

	useEffect(() => {
		fetchData();
	}, [isFocused]);

	return (
		<>
			<NineMenu />

			<View style={styles.wrap}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					<View style={styles.texto}>
						<Titulo>
							Olá, <Nome>{nome}!</Nome>
						</Titulo>
						<Text>
							Aqui você pode checar sua carteira, produtos vendidos, serviços
							solicitados
						</Text>
					</View>
					<FlexBox>
						{lista.map((item) => (
							<MainCard
								nome={item.nome}
								icon={item.icon}
								key={item.index}
							/>
						))}
					</FlexBox>
				</ScrollView>
			</View>
		</>
	);
};

export default HomePetShop;
