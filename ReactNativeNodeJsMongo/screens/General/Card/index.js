import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
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
	StoreBox,
	StoreImage,
	Category,
	ItemBox,
	ItemPicture,
	Weight,
	ProductName,
	Price,
	InfoMarket,
	Title,
	MarketImage,
	MarketBox,
	HistoryTitle,
	HistoryInfo,
	AnimalText,
	RouteStatus,
	WalletText,
	HistoryBox,
	FlexBox,
	CommentBox,
	Name,
	Comment,
} from './style';
import market from '../../../assets/market.png';
import { Location, LocationTick } from 'iconsax-react-native';

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

export const PetShopCard = ({ id, url, nome, info, quantidade }) => {
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
			<Image source={{ uri: url }} />
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
			<Image source={{ uri: url }} />
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

export const WalletCard = ({ nome, icon, handleClick }) => {
	return (
		<MainBox onPress={handleClick}>
			{icon}
			<WalletText>{nome}</WalletText>
		</MainBox>
	);
};

export const MarketCard = ({ handleClick }) => {
	return (
		<MarketBox onPress={handleClick}>
			<View>
				<Title>Loja da 99Pets</Title>
				<InfoMarket>O que seu pet precisa, sem sair de casa!</InfoMarket>
			</View>
			<MarketImage source={market} />
		</MarketBox>
	);
};

export const StoreCard = ({ category, handleClick }) => {
	return (
		<StoreBox onPress={handleClick}>
			<Category>{category.name}</Category>
			<StoreImage source={category.image} />
		</StoreBox>
	);
};

export const ItemCard = ({ product, handleClick }) => {
	return (
		<ItemBox onPress={handleClick}>
			<ItemPicture
				source={{
					uri: product.image,
				}}
			/>
			<View style={{ width: '80%' }}>
				{product.weight && <Weight>{product.weight}KG</Weight>}
				<ProductName>{product.name}</ProductName>
				<Price>R$ {product.price.toFixed(2).replace('.', ',')}</Price>
			</View>
		</ItemBox>
	);
};

export const RouteCard = ({ route, number, handleClick }) => {
	return (
		<HistoryBox onPress={handleClick}>
			<Location color='#000000' />
			<View style={{ marginLeft: 10 }}>
				<HistoryTitle>Rota #{number}</HistoryTitle>
				<HistoryInfo>
					{route.address}, {route.number} -{' '}
					<RouteStatus>
						{route.finished ? 'Finalizada' : 'Corrida atual'}
					</RouteStatus>
				</HistoryInfo>
				<AnimalText>
					{route.pet.species} - {route.pet.breed}
				</AnimalText>
			</View>
		</HistoryBox>
	);
};

export const HistoryCard = ({ service }) => {
	return (
		<HistoryBox>
			<LocationTick color='#000000' />
			<View style={{ marginLeft: 10, width: '90%' }}>
				<FlexBox>
					<HistoryTitle>{service.name}</HistoryTitle>
					<HistoryTitle>
						R$ {service.price.toFixed(2).replace('.', ',')}
					</HistoryTitle>
				</FlexBox>
				<HistoryInfo>Pagamento via {service.payment_method}</HistoryInfo>
			</View>
		</HistoryBox>
	);
};

export const CommentCard = ({ comment }) => {
	let stars = [];
	for (let i = 0; i < comment.rating; i++) {
		stars.push(
			<Icon
				name='star'
				type='FontAwesome'
				size={20}
				color='#ffc107'
				key={'gg' + i}
			/>
		);
	}
	return (
		<CommentBox>
			<View style={{ width: '100%' }}>
				<FlexBox>
					<Name>{comment.name}</Name>
					<Text>{stars}</Text>
				</FlexBox>
				<Comment>{comment.comment}</Comment>
			</View>
		</CommentBox>
	);
};
