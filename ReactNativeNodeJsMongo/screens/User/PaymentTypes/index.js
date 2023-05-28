import React, { useState } from 'react';
import { View, ActivityIndicator, ScrollView, Alert } from 'react-native';
import { Titulo, Input } from '../../General/Login/style';
import { Button, ButtonText } from '../../General/Home/style';
import { Flex, FlexBox, Price, Text, styles } from './style';
import { useAuth } from '../../../contexts/Auth';
import Checkbox from 'expo-checkbox';

export const TransferByPix = ({ handleClick, amount }) => {
	const [enableshift, setenableShift] = useState(false);
	const [coupon, onChangeCoupon] = useState('');

	const [loading, setLoading] = useState(false);

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
			<FlexBox>
				<View>
					<Titulo>Pagar com Pix</Titulo>

					<Input
						value={coupon}
						onChangeText={onChangeCoupon}
						placeholder='Adicionar cupom de desconto'
						label='Adicionar cupom de desconto'
						placeholderTextColor='#000000b3'
						onFocus={() => setenableShift(true)}
					/>
					<Price>Total: R$ {amount.toFixed(2).replace('.', ',')}</Price>
				</View>
				<Button onPress={handleClick}>
					<ButtonText>Gerar pix</ButtonText>
				</Button>
			</FlexBox>
		</>
	);
};

export const TransferByBank = ({ handleClick, amount }) => {
	const [enableshift, setenableShift] = useState(false);
	const [nome, onChangeNome] = useState(null);
	const [cardNumber, onChangeCardNumber] = useState(null);
	const [CVV, onChangeCVV] = useState(null);
	const [coupon, onChangeCoupon] = useState(null);
	const [save, setSave] = useState(false);
	const [loading, setLoading] = useState(false);
	const auth = useAuth();

	const processPayment = () => {
		if (nome && cardNumber && CVV) {
			handleClick();
		} else {
			Alert.alert('Preencha todas as informações!');
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
			<FlexBox>
				<Titulo>Pagar com conta bancária</Titulo>
				<ScrollView>
					<Input
						value={nome}
						onChangeText={onChangeNome}
						placeholder='Nome no cartão'
						label='Nome no cartão'
						placeholderTextColor='#000000b3'
						onFocus={() => setenableShift(true)}
					/>
					<Input
						value={cardNumber}
						onChangeText={onChangeCardNumber}
						autoCapitalize='none'
						placeholder='Número do cartão'
						label='Número do cartão'
						keyboardType='numeric'
						placeholderTextColor='#000000b3'
						onFocus={() => setenableShift(true)}
					/>
					<Input
						value={CVV}
						onChangeText={onChangeCVV}
						autoCapitalize='none'
						placeholder='CVV'
						label='CVV'
						keyboardType='numeric'
						placeholderTextColor='#000000b3'
						onFocus={() => setenableShift(true)}
					/>

					<Flex>
						<Checkbox
							value={save}
							onValueChange={setSave}
							color={'green'}
							style={{ borderRadius: 20 }}
						/>
						<Text>Salvar esse cartão</Text>
					</Flex>
					<Input
						value={coupon}
						onChangeText={onChangeCoupon}
						placeholder='Adicionar cupom de desconto'
						label='Adicionar cupom de desconto'
						placeholderTextColor='#000000b3'
						onFocus={() => setenableShift(true)}
					/>
					<Price>Total: R$ {amount.toFixed(2).replace('.', ',')}</Price>
				</ScrollView>

				<Button onPress={processPayment}>
					<ButtonText>Pagar com cartão</ButtonText>
				</Button>
			</FlexBox>
		</>
	);
};
