import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Titulo, Text } from '../../User/ListPets/style';
import { styles } from './style';
import { NineMenu } from '../Menu';
import { TeamCard } from '../../General/Card';
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
						<TeamCard
							key={index}
							person={person}
						/>
					))}
				</ScrollView>
			</View>
		</>
	);
};

export default ListSquad;
