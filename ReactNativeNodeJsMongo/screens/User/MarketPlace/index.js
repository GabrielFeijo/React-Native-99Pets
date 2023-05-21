import React from 'react';
import { Text, View } from 'react-native';
import { Titulo, styles } from './style';
import { NineMenu } from '../../NavBar/Menu';
import SearchBox from '../../PetShop/SearchBox';
import { StoreCard } from '../../General/Card';
import { ScrollView } from 'react-native';
import { useState } from 'react';

import food from '../../../assets/images/food.png';
import toy from '../../../assets/images/toy.png';
import pharmacy from '../../../assets/images/pharmacy.png';
import accessory from '../../../assets/images/accessory.png';

const MarketPlace = (props) => {
	const [search, setSearch] = useState('');

	const onChange = (e) => {
		// setPets(
		// 	allPets.filter((pet) => pet.name.toLowerCase().includes(e.toLowerCase()))
		// );

		setSearch(e);
	};

	const handleClick = (category) => {
		props.navigation.navigate('StoreCategory', { category });
	};

	return (
		<>
			<NineMenu />
			<View style={styles.wrap}>
				<Titulo>Loja da 99Pets</Titulo>
				<SearchBox
					placeholder={'O que você precisa?'}
					value={search}
					handleChange={onChange}
				/>
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					style={{ marginTop: 20 }}
				>
					<StoreCard
						category={'Alimentos'}
						handleClick={() => handleClick('food')}
						image={food}
					/>
					<StoreCard
						category={'Brinquedos'}
						handleClick={() => handleClick('toy')}
						image={toy}
					/>
					<StoreCard
						category={'Farmácia'}
						handleClick={() => handleClick('pharmacy')}
						image={pharmacy}
					/>
					<StoreCard
						category={'Acessórios'}
						handleClick={() => handleClick('accessory')}
						image={accessory}
					/>
				</ScrollView>
			</View>
		</>
	);
};

export default MarketPlace;
