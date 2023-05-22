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

const data = [
	{ name: 'Alimentos', type: 'food', image: food },
	{ name: 'Brinquedos', type: 'toy', image: toy },
	{ name: 'Farmácia', type: 'pharmacy', image: pharmacy },
	{ name: 'Acessórios', type: 'accessory', image: accessory },
];

const MarketPlace = (props) => {
	const [search, setSearch] = useState('');
	const [categories, setCategories] = useState(data);

	const onChange = (e) => {
		setCategories(
			data.filter((category) =>
				category.name.toLowerCase().includes(e.toLowerCase())
			)
		);
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
					{categories.length > 0 &&
						categories.map((category, index) => (
							<StoreCard
								key={index}
								category={category}
								handleClick={() => handleClick(category.type)}
							/>
						))}
				</ScrollView>
			</View>
		</>
	);
};

export default MarketPlace;
