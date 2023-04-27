import { View, Image } from 'react-native';
import { NineMenu } from '../../NavBar/Menu';
import { Titulo, Text, styles } from '../InfoPhoto/style';
import { Button, ButtonText } from '../../General/Home/style';
import Fish from '../../../assets/images/fish.png';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../../contexts/Auth';
import { TextColor } from './style';

const AccountCreated = (props) => {
	const auth = useAuth();
	const loginPet = async () => {
		const userStorage = await AsyncStorage.getItem('token_user');
		if (userStorage != null) {
			const userJson = JSON.parse(userStorage);
			await auth.signIn(userJson);
		}
	};
	return (
		<>
			<NineMenu />
			<View style={styles.wrap}>
				<View>
					<Titulo>Sua conta foi criada!</Titulo>
					<Text>
						Clique em <TextColor>Minha conta</TextColor> para acessar a página
						inicial do aplicativo
					</Text>
				</View>
				<Image source={Fish} />
				<Button onPress={loginPet}>
					<ButtonText>Minha conta</ButtonText>
				</Button>
			</View>
		</>
	);
};

export default AccountCreated;
