import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Titulo, Text, styles, Flex, HistoryText } from './style';
import { NineMenu } from '../../NavBar/Menu';
import { MainCard, RouteCard, WalletCard } from '../../General/Card';
import { EmptyWallet } from 'iconsax-react-native';

const Wallet = (props) => {
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
						nome={'Saldo: R$88,22'}
						icon={
							<EmptyWallet
								size='48'
								color='#FBAF5E'
							/>
						}
					/>
					<WalletCard
						nome={'Transferir'}
						icon={
							<EmptyWallet
								size='48'
								color='#FBAF5E'
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
					<RouteCard />
					<RouteCard />
					<RouteCard />
					<RouteCard />
					<RouteCard />
				</ScrollView>
			</View>
		</>
	);
};

export default Wallet;
