import React, { useEffect } from 'react';
import { View } from 'react-native';
import {
	Titulo,
	Text,
	styles,
	Pet,
	ButtonRefuse,
	ButtonRefuseText,
} from './style';
import { Button, ButtonText } from '../../General/Home/style';
import { Image } from 'react-native';
import { useState } from 'react';

const ClassifyPet = ({ predict, picture, handleClick }) => {
	const [animal, setAmimal] = useState('');

	function findNearestAnimal() {
		let bestScore = 0;
		let bestAnimal = '';

		for (let i = 0; i < predict.length; i++) {
			const animal = predict[i];
			const score = animal.score;

			if (score > bestScore) {
				bestScore = score;
				bestAnimal = animal.class;
			}
		}
		console.log(predict);
		console.log(bestAnimal);
		setAmimal(bestAnimal);
	}

	useEffect(() => {
		findNearestAnimal();
	}, []);

	return (
		<>
			<View style={styles.wrap}>
				<View>
					<Titulo>Seu Pet</Titulo>
					<Text>
						Identificamos que seu pet é um: <Pet>{animal}</Pet>. Isso está
						correto?
					</Text>
				</View>
				<Image
					style={{ width: '100%', height: '65%', borderRadius: 16 }}
					source={{
						uri: picture,
					}}
				/>
				<View>
					<Button onPress={() => handleClick(true)}>
						<ButtonText>Está correto!</ButtonText>
					</Button>
					<ButtonRefuse onPress={() => handleClick(false)}>
						<ButtonRefuseText>Não está correto</ButtonRefuseText>
					</ButtonRefuse>
				</View>
			</View>
		</>
	);
};

export default ClassifyPet;
