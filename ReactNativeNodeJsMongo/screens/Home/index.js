import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Button, ButtonText, LoginText, Line, styles, Box } from './style';

const Home = (props) => {
	return (
		<View style={styles.root}>
			<Image
				style={styles.logo}
				source={require('../../assets/images/logo.png')}
			/>
			<View>
				<View style={styles.mb}>
					<Box>
						<Line />
						<LoginText>Já tenho uma conta</LoginText>
					</Box>
					<Button
						onPress={() => {
							props.navigation.navigate('Login');
						}}
					>
						<ButtonText>Entrar</ButtonText>
					</Button>
				</View>
				<View>
					<Box>
						<Line />
						<LoginText>Ainda não tenho conta</LoginText>
					</Box>
					<Button
						onPress={() => {
							props.navigation.navigate('Cadastro');
						}}
					>
						<ButtonText>Cadastrar</ButtonText>
					</Button>
				</View>
			</View>
		</View>
	);
};

export default Home;

// .logo{
//     height: 30vh;
//     border-radius:50% ;
//     display: block;
//     margin: auto;

// }
