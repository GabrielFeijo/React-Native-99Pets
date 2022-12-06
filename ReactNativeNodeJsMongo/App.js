import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home/index';
import Login from './screens/Login/index';
import Register from './screens/Register/index';
import RegisterPet from './screens/RegisterPet/index';
import ListPets from './screens/ListPets/index';
import ServicePet from './screens/ServicePet/index';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

const store = createStore(reducer);
const Stack = createStackNavigator();


const myOptions = {
  title: '99 Pets',
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#FFBD59',
  },
};

export default () => {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer >   

          <Stack.Navigator >
            <Stack.Screen name="Home" component={Home} options={myOptions} />
            <Stack.Screen name="Login"component={Login} options={{ ...myOptions, title: 'Login' }} />
            <Stack.Screen name="Cadastro" component={Register} options={{ ...myOptions, title: 'Cadastro' }} />
            <Stack.Screen name="CadastroPet" component={RegisterPet} options={{ ...myOptions, title: 'Cadastro de Pet' }} />
            <Stack.Screen name="ListPets" component={ListPets} options={{ ...myOptions, title: 'Meus Pets', headerLeft: null}}   />
            <Stack.Screen name="ServicePet" component={ServicePet} options={{ ...myOptions, title: 'Escolha um serviço'}}   />
         
        </Stack.Navigator>       
                  
      
        </NavigationContainer>
      </Provider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});
