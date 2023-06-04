import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Titulo, Text, styles, Flex, HistoryText } from './style';
import { NineMenu } from '../../NavBar/Menu';
import { HistoryCard, ServiceCard, WalletCard } from '../../General/Card';
import { EmptyWallet } from 'iconsax-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../axios/config';

const PetshopWallet = (props) => {
	const [services, setServices] = useState([]);
	const [wallet, setWallet] = useState(0);

	function fetchData() {
		(async () => {
			const userStorage = await AsyncStorage.getItem('token_user');
			if (userStorage !== null) {
				// value previously stored
				const userJson = JSON.parse(userStorage);

				try {
					const response = await api.get(`/api/shop`, {
						headers: {
							id: userJson.id,
							token: userJson.token,
						},
					});
					setServices(response.data.serviceHistory);
					setWallet(Number(response.data.wallet_value));
				} catch (error) {
					console.log(error);

					Alert.alert(error.response.data);
				}
			}
		})();
	}
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<>
			<NineMenu />
			<View style={styles.wrap}>
				<Titulo>Carteira</Titulo>
				<Text>
					Aqui você pode checar seu saldo atual, histórico de ganhos e fazer
					suas transferências
				</Text>
				<Flex>
					<WalletCard
						nome={`Saldo: R$${wallet.toFixed(2).replace('.', ',')}`}
						icon={
							<EmptyWallet
								size='48'
								color='#0492C2'
							/>
						}
					/>
					<WalletCard
						nome={'Transferir'}
						icon={
							<EmptyWallet
								size='48'
								color='#0492C2'
							/>
						}
						handleClick={() => props.navigation.navigate('TransferMoney')}
					/>
				</Flex>
				<HistoryText>Histórico de ganhos</HistoryText>
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					{services.length > 0 ? (
						services.map((service, index) => (
							<HistoryCard
								service={service}
								key={index}
							/>
						))
					) : (
						<Text>Você ainda possui nenhum ganho!</Text>
					)}
				</ScrollView>
			</View>
		</>
	);
};

export default PetshopWallet;
