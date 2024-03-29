import React, { useState } from 'react';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import { Titulo, Input } from '../../General/Login/style';
import { Button, ButtonText } from '../../General/Home/style';
import { Flex, FlexBox, Text, styles } from './style';
import { useAuth } from '../../../contexts/Auth';
import Checkbox from 'expo-checkbox';

export const TransferByPix = (props) => {
	const [enableshift, setenableShift] = useState(false);
	const [nome, onChangeNome] = useState('');
	const [Pix, onChangePix] = useState('');

	const [save, setSave] = useState(false);
	const [loading, setLoading] = useState(false);
	const auth = useAuth();

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
					<Titulo>Transferir saldo por Pix</Titulo>

					<Input
						value={nome}
						onChangeText={onChangeNome}
						placeholder='Nome completo'
						label='Nome completo'
						placeholderTextColor='#000000b3'
						onFocus={() => setenableShift(true)}
					/>
					<Input
						value={Pix}
						onChangeText={onChangePix}
						autoCapitalize='none'
						placeholder='Chave Pix'
						label='Chave Pix'
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
						<Text>Salvar essa chave</Text>
					</Flex>
				</View>
				<Button>
					<ButtonText>Transferir</ButtonText>
				</Button>
			</FlexBox>
		</>
	);
};

export const TransferByBank = (props) => {
	const [enableshift, setenableShift] = useState(false);
	const [nome, onChangeNome] = useState('');
	const [Bank, onChangeBank] = useState('');

	const [save, setSave] = useState(false);
	const [loading, setLoading] = useState(false);
	const auth = useAuth();

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
				<Titulo>Transferir saldo por conta bancária</Titulo>
				<ScrollView>
					<Input
						value={nome}
						onChangeText={onChangeNome}
						placeholder='Nome completo'
						label='Nome completo'
						placeholderTextColor='#000000b3'
						onFocus={() => setenableShift(true)}
					/>
					<Input
						value={Bank}
						onChangeText={onChangeBank}
						autoCapitalize='none'
						placeholder='Banco'
						label='Banco'
						placeholderTextColor='#000000b3'
						onFocus={() => setenableShift(true)}
					/>
					<Input
						value={Bank}
						onChangeText={onChangeBank}
						autoCapitalize='none'
						placeholder='Número da conta com dígito'
						label='Número da conta com dígito'
						placeholderTextColor='#000000b3'
						onFocus={() => setenableShift(true)}
					/>
					<Input
						value={Bank}
						onChangeText={onChangeBank}
						autoCapitalize='none'
						placeholder='Agência'
						label='Agência'
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
						<Text>Salvar essa conta</Text>
					</Flex>
				</ScrollView>
				<Button>
					<ButtonText>Transferir</ButtonText>
				</Button>
			</FlexBox>
		</>
	);
};
