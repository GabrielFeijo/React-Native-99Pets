import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Titulo, Text, styles } from './style';
import { NineMenu } from '../../NavBar/Menu';
import { RouteCard } from '../../General/Card';

const RouteHistory = (props) => {
	const navigate = (route) => {
		props.navigation.navigate('RouteDetails');
	};
	return (
		<>
			<NineMenu />
			<View style={styles.wrap}>
				<Titulo>Minhas rotas</Titulo>
				<Text>
					Aqui você pode checar suas rotas ativas e as já realizadas. Clique em
					cada rota para detalhes
				</Text>
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					<RouteCard
						handleClick={() => {
							navigate('teste');
						}}
					/>
					<RouteCard
						handleClick={() => {
							navigate('teste');
						}}
					/>
					<RouteCard
						handleClick={() => {
							navigate('teste');
						}}
					/>
					<RouteCard
						handleClick={() => {
							navigate('teste');
						}}
					/>
				</ScrollView>
			</View>
		</>
	);
};

export default RouteHistory;
