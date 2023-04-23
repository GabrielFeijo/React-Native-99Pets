import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './style';
import { Titulo, Text } from '../ListPets/style';
import { NineMenu } from '../Menu';
import { Card2 } from '../Card';
import PetShops from '../PetShops/main';

const AllLocations = (props) => {
	return (
		<>
			<NineMenu />
			<View style={styles.wrap}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					<Titulo>Nossos Pet Shops</Titulo>
					<Text>
						Estes são os Pet Shops mais bem avaliados do nosso aplicativo. Os
						Pet Shops passaram por uma série de avaliações para estarem hoje
						trabalhando conosco.
					</Text>
					{PetShops.map((Pet) => (
						<Card2
							key={Pet.index}
							url={Pet.url}
							nome={Pet.nome}
							info={Pet.info}
							quantidade={Pet.quantidade}
						/>
					))}
				</ScrollView>
			</View>
		</>
	);
};

export default AllLocations;
