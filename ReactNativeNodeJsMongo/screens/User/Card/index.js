import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import {
	Text,
	TextInfo,
	Image,
	Description,
	styles,
	MainBox,
	Label,
	Plate,
} from './style';

export const Card = ({ id, nome, info, info2, url }) => {
	return (
		<TouchableOpacity style={styles.wrap}>
			<Image source={{ uri: url }} />
			<Description>
				<Text>{nome}</Text>
				<TextInfo>{info}</TextInfo>
				<TextInfo>{info2}</TextInfo>
			</Description>
		</TouchableOpacity>
	);
};

export const Card2 = ({ id, url, nome, info, quantidade }) => {
	let stars = [];
	for (let i = 0; i < quantidade; i++) {
		stars.push(
			<Icon
				name='star'
				type='FontAwesome'
				size={30}
				color='#ffc107'
				key={'gg' + i}
			/>
		);
	}

	return (
		<TouchableOpacity style={styles.wrap}>
			<Image source={url} />
			<Description>
				<Text>{nome}</Text>
				<TextInfo>{info}</TextInfo>
				<TextInfo>{stars}</TextInfo>
			</Description>
		</TouchableOpacity>
	);
};

export const DriverCard = ({ id, url, nome, info, quantidade }) => {
	let stars = [];
	for (let i = 0; i < quantidade; i++) {
		stars.push(
			<Icon
				name='star'
				type='FontAwesome'
				size={22}
				color='#ffc107'
				key={'gg' + i}
			/>
		);
	}

	return (
		<TouchableOpacity style={styles.wrap}>
			<Image source={url} />
			<Description>
				<Text>{nome}</Text>
				<Plate>Placa {info}</Plate>
				<TextInfo>Motorista</TextInfo>
				<TextInfo>{stars}</TextInfo>
			</Description>
		</TouchableOpacity>
	);
};

export const TeamCard = ({ nome, info, info2, url }) => {
	return (
		<TouchableOpacity style={styles.wrap}>
			<Image source={url} />
			<Description>
				<Text>{nome}</Text>
				<TextInfo>{info}</TextInfo>
				<TextInfo>{info2}</TextInfo>
			</Description>
		</TouchableOpacity>
	);
};

export const MainCard = ({ nome, icon, handleClick }) => {
	return (
		<MainBox onPress={handleClick}>
			{icon}
			<Label>{nome}</Label>
		</MainBox>
	);
};
