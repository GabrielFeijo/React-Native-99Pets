import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './style';
import { Titulo, Text } from '../../User/ListPets/style';
import { NineMenu } from '../../NavBar/Menu';

const InitialPetShop = (props) => {
	return (
		<>
			<View style={styles.wrap}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					<NineMenu />
					<Titulo>Exemplo de Página do PetSHop</Titulo>
					<Text>
						Um texto bem legal aqui, espero que o PetSHop venha trabalhar
						conosco bem feliz mesmo.
					</Text>
				</ScrollView>
			</View>
		</>
	);
};

export default InitialPetShop;
