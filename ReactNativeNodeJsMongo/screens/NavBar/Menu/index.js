import React, { useState } from 'react';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { Icon } from 'react-native-elements';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../../contexts/Auth';
import { HambergerMenu, Logout } from 'iconsax-react-native';

export const NineMenu = (props) => {
	const [visible, setVisible] = useState(false);

	const hideMenu = () => setVisible(false);
	const auth = useAuth();

	const showMenu = () => setVisible(true);
	const navigation = useNavigation();
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
				{/* <MenuItem  style={styles.menu} >
              <View style={styles.viewMenu}>
                <Icon name='person' type='simplelineicons'  size={35} />
                <Text style={styles.menuText}>Meu Perfil</Text>
              </View>
            </MenuItem>
           <MenuDivider /> */}
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
