import { useAuth } from '../contexts/Auth';
import Login from '../screens/Login/index';
import Register from '../screens/Register/index';
import ResetPassword from '../screens/Reset/index';
import Code from '../screens/Code/index';
import RegisterPet from '../screens/RegisterPet/index';
import ListPets from '../screens/ListPets/index';
import ServicePet from '../screens/ServicePet/index';
import ListLocations from '../screens/ListLocations/index';
import InfoLocation from '../screens/InfoLocation/index';
import DriverLocation from '../screens/DriverLocation/index';
import ListSquad from '../screens/ListSquad/index';
import ListAllLocations from '../screens/ListAllLocations/index';
import EditPet from '../screens/EditPet/index';
import Home from '../screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const myOptions = {
	title: '99 Pets',
	headerTintColor: 'white',
	headerStyle: {
		backgroundColor: '#FFBD59',
	},
};

function User() {
	return (
		<View style={styles.container}>
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					component={Home}
					options={myOptions}
				/>
				<Stack.Screen
					name='Login'
					component={Login}
					options={{ ...myOptions, title: 'Login' }}
				/>
				<Stack.Screen
					name='Cadastro'
					component={Register}
					options={{ ...myOptions, title: 'Cadastro' }}
				/>
				<Stack.Screen
					name='Reset'
					component={ResetPassword}
					options={{ ...myOptions, title: 'Redefinir senha' }}
				/>
				<Stack.Screen
					name='Code'
					component={Code}
					options={{ ...myOptions, title: 'Código de redefinição' }}
				/>
				<Stack.Screen
					name='CadastroPet'
					component={RegisterPet}
					options={{ ...myOptions, title: 'Cadastro de Pet' }}
				/>
				<Stack.Screen
					name='ListPets'
					component={ListPets}
					options={{ ...myOptions, title: 'Meus Pets', headerLeft: null }}
				/>
				<Stack.Screen
					name='ServicePet'
					component={ServicePet}
					options={{ ...myOptions, title: 'Escolha um serviço' }}
				/>
				<Stack.Screen
					name='EditPet'
					component={EditPet}
					options={{ ...myOptions, title: 'Editar Pet' }}
				/>
				<Stack.Screen
					name='Locations'
					component={ListLocations}
					options={{ ...myOptions, title: 'Escolha um Pet Shop' }}
				/>
				<Stack.Screen
					name='InfoLocation'
					component={InfoLocation}
					options={{ ...myOptions, title: 'Informações' }}
				/>
				<Stack.Screen
					name='DriverLocation'
					component={DriverLocation}
					options={{ ...myOptions, title: 'Acompanhe sua viagem' }}
				/>
				<Stack.Screen
					name='ListSquad'
					component={ListSquad}
					options={{ ...myOptions, title: 'Equipe 99 Pets' }}
				/>
				<Stack.Screen
					name='ListAllLocations'
					component={ListAllLocations}
					options={{ ...myOptions, title: 'Todos os Pet Shops' }}
				/>
			</Stack.Navigator>
		</View>
	);
}

function Main() {
	return (
		<View style={styles.container}>
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					component={Home}
					options={myOptions}
				/>
				<Stack.Screen
					name='Login'
					component={Login}
					options={{ ...myOptions, title: 'Login' }}
				/>
				<Stack.Screen
					name='Cadastro'
					component={Register}
					options={{ ...myOptions, title: 'Cadastro' }}
				/>
				<Stack.Screen
					name='Reset'
					component={ResetPassword}
					options={{ ...myOptions, title: 'Redefinir senha' }}
				/>
				<Stack.Screen
					name='Code'
					component={Code}
					options={{ ...myOptions, title: 'Código de redefinição' }}
				/>
			</Stack.Navigator>
		</View>
	);
}

export const Router = () => {
	const { authData, loading } = useAuth();

	if (loading) {
		//You can see the component implementation at the repository
		return <></>;
	}
	return (
		<NavigationContainer>
			{authData?.token ? <User /> : <Main />}
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e0e0e0',
	},
});
