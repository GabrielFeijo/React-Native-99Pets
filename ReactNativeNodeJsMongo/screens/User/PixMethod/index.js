import React, { useState } from 'react';
import { Alert, Image, View } from 'react-native';
import { styles, Text, FlexBox, Flex, CopyText } from './style';
import { Titulo } from '../ListPets/style';
import { NineMenu } from '../../NavBar/Menu';
import { Button, ButtonText } from '../../General/Home/style';
import QrCode from '../../../assets/images/qrcode.png';
import { DocumentCopy } from 'iconsax-react-native';
import * as Clipboard from 'expo-clipboard';
import ChatBot from '../ChatBot';

const PixMethod = (props) => {
	const services = props.route.params.services;
	const amount = props.route.params.amount;

	const setClipboardString = async () => {
		await Clipboard.setStringAsync('2448d7ca-11ef-45cf-98fc-6bd7010a456d');
		Alert.alert('Código copiado com sucesso!');
	};

	return (
		<>
			<NineMenu />
			<ChatBot />
			<View style={styles.wrap}>
				<Titulo>Código pix gerado</Titulo>

				<FlexBox>
					<View />
					<Image source={QrCode} />
					<Text>000.9278293.82.1234444/7723 2.codigo.pix/copia&cola/copia</Text>
					<Flex onPress={setClipboardString}>
						<CopyText>Copiar código pix</CopyText>
						<DocumentCopy color='#63C5DA' />
					</Flex>
					<Text>Total: R$ {amount.toFixed(2).replace('.', ',')}</Text>

					<Button
						style={{ width: '100%' }}
						onPress={() =>
							props.navigation.navigate('PaymentConfirmed', {
								services: services,
								amount: amount,
							})
						}
					>
						<ButtonText>Confirmar pagamento</ButtonText>
					</Button>
				</FlexBox>
			</View>
		</>
	);
};

export default PixMethod;
