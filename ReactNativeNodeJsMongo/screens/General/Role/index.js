import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Button, ButtonText } from '../Home/style';
import { styles } from './style';
import { Titulo } from '../Login/style';

const Role = (props) => {
	return (
		<View style={styles.root}>
			<View>
				<Image
					style={styles.logo}
					source={require('../../../assets/images/role.png')}
				/>
				<Titulo style={styles.titulo}>Tipo de Cadastro</Titulo>
			</View>
			<View>
				<Button
					onPress={() => {
						props.navigation.navigate('Cadastro');
					}}
				>
					<ButtonText>Sou tutor</ButtonText>
				</Button>
				<Button
					onPress={() => {
						props.navigation.navigate('CadastroPetShop');
					}}
					style={styles.margin}
				>
					<ButtonText>Sou Petshop</ButtonText>
				</Button>
				<Button
					onPress={() => {
						props.navigation.navigate('CadastroDriver');
					}}
				>
					<ButtonText>Sou motorista do app</ButtonText>
				</Button>
			</View>
		</View>
	);
};

export default Role;
