import React, { useEffect, useState } from 'react';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { Icon } from 'react-native-elements';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../../contexts/Auth';
import {
	BagHappy,
	EmptyWallet,
	HambergerMenu,
	Logout,
	RouteSquare,
	Routing,
} from 'iconsax-react-native';

export const NineMenu = (props) => {
	const [visible, setVisible] = useState(false);
	const [role, setRole] = useState('user');
	const hideMenu = () => setVisible(false);
	const auth = useAuth();

	const showMenu = () => setVisible(true);
	const navigation = useNavigation();

	async function fetchData() {
		const userStorage = await AsyncStorage.getItem('token_user');
		if (userStorage !== null) {
			// value previously stored
			const userJson = JSON.parse(userStorage);
			setRole(userJson.roles[0]);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	const user = (
		<>
			<MenuItem
				onPress={() => {
					hideMenu();
					navigation.navigate('ListPets');
				}}
				style={styles.menu}
			>
				<View style={styles.viewMenu}>
					<Icon
						name='guide-dog'
						type='foundation'
						size={35}
					/>
					<Text style={styles.menuText}>Meus Animais</Text>
				</View>
			</MenuItem>
			<MenuDivider />
			<MenuItem
				onPress={() => {
					hideMenu();
					navigation.navigate('ListAllLocations');
				}}
				style={styles.menu}
			>
				<View style={styles.viewMenu}>
					<Icon
						name='shop'
						type='entypo'
						size={35}
					/>
					<Text style={styles.menuText}>Pet Shops</Text>
				</View>
			</MenuItem>
		</>
	);
	const driver = (
		<>
			<MenuItem
				onPress={() => {
					hideMenu();
					navigation.navigate('RouteHistory');
				}}
				style={styles.menu}
			>
				<View style={styles.viewMenu}>
					<Routing
						size='35'
						color='#000000'
						variant='Bold'
					/>
					<Text style={styles.menuText}>Rotas</Text>
				</View>
			</MenuItem>
			<MenuDivider />
			<MenuItem
				onPress={() => {
					hideMenu();
					navigation.navigate('Wallet');
				}}
				style={styles.menu}
			>
				<View style={styles.viewMenu}>
					<EmptyWallet
						size='35'
						color='#000000'
						variant='Bold'
					/>
					<Text style={styles.menuText}>Carteira</Text>
				</View>
			</MenuItem>
		</>
	);
	const petshop = (
		<>
			<MenuItem
				onPress={() => {
					hideMenu();
					navigation.navigate('MyPetShop');
				}}
				style={styles.menu}
			>
				<View style={styles.viewMenu}>
					<BagHappy
						size='35'
						color='#000000'
						variant='Bold'
					/>
					<Text style={styles.menuText}>Meu PetShop</Text>
				</View>
			</MenuItem>
			<MenuDivider />
			<MenuItem
				onPress={() => {
					hideMenu();
					navigation.navigate('PetshopWallet');
				}}
				style={styles.menu}
			>
				<View style={styles.viewMenu}>
					<EmptyWallet
						size='35'
						color='#000000'
						variant='Bold'
					/>
					<Text style={styles.menuText}>Carteira</Text>
				</View>
			</MenuItem>
		</>
	);

	return (
		<View style={styles.flex}>
			<Menu
				visible={visible}
				anchor={
					<TouchableOpacity onPress={showMenu}>
						<HambergerMenu
							size='30'
							color='#000'
						/>
					</TouchableOpacity>
				}
				onRequestClose={hideMenu}
				style={styles.boxMenu}
			>
				{role == 'user' ? user : role == 'driver' ? driver : petshop}
				<MenuDivider />
				<MenuItem
					onPress={() => {
						hideMenu();
						navigation.navigate('ListSquad');
					}}
					style={styles.menu}
				>
					<View style={styles.viewMenu}>
						<Icon
							name='people'
							type='simplelineicons'
							size={35}
						/>
						<Text style={styles.menuText}>Equipe</Text>
					</View>
				</MenuItem>
			</Menu>
			<View></View>
			<TouchableOpacity
				onPress={async () => {
					hideMenu();
					await AsyncStorage.removeItem('token_user');
					auth.signOut();
				}}
			>
				<Logout
					size='30'
					color='#000'
				/>
			</TouchableOpacity>
		</View>
	);
};
