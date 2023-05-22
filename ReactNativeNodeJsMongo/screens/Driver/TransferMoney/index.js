import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Titulo, Text, styles, Flex, HistoryText } from './style';
import { NineMenu } from '../../NavBar/Menu';
import { MainCard, RouteCard, WalletCard } from '../../General/Card';
import { Card, EmptyWallet } from 'iconsax-react-native';
import Pix from '../../../assets/images/pix.png';
import { TransferByBank, TransferByPix } from '../TransferTypes';

const TransferMoney = (props) => {
	const [type, setType] = useState('Pix');
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
						nome={'Pix'}
						icon={<Image source={Pix} />}
						handleClick={() => setType('Pix')}
					/>
					<WalletCard
						nome={'Conta bancária'}
						icon={
							<Card
								size='40'
								color='#000000b3'
							/>
						}
						handleClick={() => setType('Bank')}
					/>
				</Flex>

				{type === 'Pix' ? <TransferByPix /> : <TransferByBank />}
			</View>
		</>
	);
};

export default TransferMoney;
