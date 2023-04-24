import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Titulo, Text } from '../../User/ListPets/style';
import { styles } from './style';
import { NineMenu } from '../Menu';
import { CardEquipe } from '../../User/Card';
import Squad from '../Squad';

const ListSquad = (props) => {
	return (
		<>
			<NineMenu />
			<View style={styles.wrap}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					<Titulo>Conheça a nossa equipe!</Titulo>
					<Text>
						Somos uma equipe apaixonada por Pets que possuem o objetivo de dar
						um conforto maior do Tutor ao Pet.
					</Text>

					{Squad.map((person, index) => (
						<CardEquipe
							key={index}
							url={person.url}
							nome={person.nome}
							info={person.info}
						/>
					))}
				</ScrollView>
			</View>
		</>
	);
};

export default ListSquad;
