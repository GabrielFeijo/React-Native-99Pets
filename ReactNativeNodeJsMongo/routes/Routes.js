import { useAuth } from '../contexts/Auth';
import Login from '../screens/General/Login/index';
import Register from '../screens/General/Register/index';
import ResetPassword from '../screens/General/Reset/index';
import Code from '../screens/General/Code/index';
import RegisterPet from '../screens/User/RegisterPet/index';
import ListPets from '../screens/User/ListPets/index';
import ServicePet from '../screens/User/ServicePet/index';
import ListLocations from '../screens/User/ListLocations/index';
import InfoLocation from '../screens/User/InfoLocation/index';
import DriverLocation from '../screens/User/DriverLocation/index';
import ListSquad from '../screens/NavBar/ListSquad/index';
import ListAllLocations from '../screens/NavBar/ListAllLocations/index';
import EditPet from '../screens/User/EditPet/index';
import Home from '../screens/General/Home';
import Main from '../screens/Driver/Main/index';

import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Role from '../screens/General/Role';
import RegisterShop from '../screens/PetShop/RegisterShop';
import Bank from '../screens/PetShop/Bank';
import RegisterDriver from '../screens/Driver/RegisterDriver';
import Vehicle from '../screens/Driver/Vehicle';
import InitialPetShop from '../screens/PetShop/InitialPetShop';
import InfoPhoto from '../screens/PetShop/InfoPhoto';
import AccountCreated from '../screens/PetShop/AccountCreated';
import DriverPhoto from '../screens/Driver/DriverPhoto';
import HomePetShop from '../screens/PetShop/HomePetShop';
import Pets from '../screens/PetShop/Pets';
import PetDetails from '../screens/PetShop/PetDetails';
import ServicesPage from '../screens/PetShop/ServicesPage';
import EditService from '../screens/PetShop/EditService';
import StatusPet from '../screens/PetShop/StatusPet';

const Stack = createStackNavigator();

const myOptions = {
	title: '99 Pets',
	headerTintColor: 'white',
	headerStyle: {
		backgroundColor: '#FFBD59',
	},
};

function General() {
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
					name='Role'
					component={Role}
					options={{ ...myOptions, title: 'Tipo de Cadastro' }}
				/>
				<Stack.Screen
					name='Cadastro'
					component={Register}
					options={{ ...myOptions, title: 'Cadastro' }}
				/>
				<Stack.Screen
					name='CadastroPetShop'
					component={RegisterShop}
					options={{ ...myOptions, title: 'Cadastro do PetShop' }}
				/>
				<Stack.Screen
					name='CadastroDriver'
					component={RegisterDriver}
					options={{ ...myOptions, title: 'Cadastro do Motorista' }}
				/>
				<Stack.Screen
					name='RegisterPet'
					component={RegisterPet}
					options={{ ...myOptions, title: 'Cadastro de Pet' }}
				/>
				<Stack.Screen
					name='Bank'
					component={Bank}
					options={{ ...myOptions, title: 'Dados bancários' }}
				/>
				<Stack.Screen
					name='Vehicle'
					component={Vehicle}
					options={{ ...myOptions, title: 'Dados do Veículo' }}
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
					name='InfoPhoto'
					component={InfoPhoto}
					options={{ ...myOptions, title: 'Seu PetShop' }}
				/>
				<Stack.Screen
					name='DriverPhoto'
					component={DriverPhoto}
					options={{ ...myOptions, title: 'Sua foto' }}
				/>
				<Stack.Screen
					name='AccountCreated'
					component={AccountCreated}
					options={{ ...myOptions, title: 'Conta Criada' }}
				/>
			</Stack.Navigator>
		</View>
	);
}

function User() {
	return (
		<View style={styles.container}>
			<Stack.Navigator>
				<Stack.Screen
					name='ListPets'
					component={ListPets}
					options={{ ...myOptions, title: 'Meus Pets', headerLeft: null }}
				/>
				<Stack.Screen
					name='CadastroPet'
					component={RegisterPet}
					options={{ ...myOptions, title: 'Cadastro de Pet' }}
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

function Driver() {
	return (
		<View style={styles.container}>
			<Stack.Navigator>
				<Stack.Screen
					name='Inicial'
					component={Main}
					options={{ ...myOptions, title: 'Inicial Motorista' }}
				/>
			</Stack.Navigator>
		</View>
	);
}

function PetShop() {
	return (
		<View style={styles.container}>
			<Stack.Navigator>
				<Stack.Screen
					name='HomePetShop'
					component={HomePetShop}
					options={{ ...myOptions, title: 'PetShop' }}
				/>
				<Stack.Screen
					name='Pets'
					component={Pets}
					options={{ ...myOptions, title: 'Pets em atendimento' }}
				/>
				<Stack.Screen
					name='PetDetails'
					component={PetDetails}
					options={{ ...myOptions, title: 'Detalhes do Pet' }}
				/>
				<Stack.Screen
					name='ServicesPage'
					component={ServicesPage}
					options={{ ...myOptions, title: 'Serviços' }}
				/>
				<Stack.Screen
					name='EditService'
					component={EditService}
					options={{ ...myOptions, title: 'Editar Serviços' }}
				/>
				<Stack.Screen
					name='StatusPet'
					component={StatusPet}
					options={{ ...myOptions, title: 'Status do Pet' }}
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
			{authData?.token ? (
				(authData.roles[0] === 'user' && <User />) ||
				(authData.roles[0] === 'driver' && <Driver />) ||
				(authData.roles[0] === 'petshop' && <PetShop />)
			) : (
				<General />
			)}
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e0e0e0',
	},
});
