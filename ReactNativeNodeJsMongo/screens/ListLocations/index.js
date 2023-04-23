import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './style';
import { Titulo, Text } from '../ListPets/style';
import { Icon } from 'react-native-elements';
import { NineMenu } from '../Menu';
import { Card2 } from '../Card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PetShops from '../PetShops/main';

const Locations = (props) => {
	console.log(props);

	const petid = props.route.params.petid;
	const services = props.route.params.services;

	return (
		<>
			<NineMenu />
			<View style={styles.wrap}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					<Titulo>Qual petshop?</Titulo>
					<Text>
						Os petshops dessa lista são os mais indicados para o serviço
						escolhido.
					</Text>
					{PetShops.map((Pet) => (
						<TouchableOpacity
							key={Pet.index}
							onPress={() => {
								props.navigation.navigate('InfoLocation', {
									petid,
									services,
									Pet,
								});
							}}
						>
							<Card2
								url={Pet.url}
								nome={Pet.nome}
								info={Pet.info}
								quantidade={Pet.quantidade}
							/>
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
		</>
	);
};

export default Locations;
