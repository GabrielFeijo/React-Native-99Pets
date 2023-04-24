import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
//Create the Auth Context with the data type specified
//and a empty object
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [authData, setAuthData] = useState();

	//the AuthContext start with loading equals true
	//and stay like this, until the data be load from Async Storage
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		//Every time the App is opened, this provider is rendered
		//and call de loadStorage function.
		loadStorageData();
	}, []);

	async function loadStorageData() {
		try {
			//Try get the data from Async Storage
			const authDataSerialized = await AsyncStorage.getItem('token_user');
			if (authDataSerialized) {
				//If there are data, it's converted to an Object and the state is updated.
				const _authData = JSON.parse(authDataSerialized);
				setAuthData(_authData);
			}
		} catch (error) {
		} finally {
			//loading finished
			setLoading(false);
		}
	}

	const signIn = async (token) => {
		setAuthData(token);
	};

	const signOut = async () => {
		setAuthData(undefined);
	};

	return (
		//This component will be used to encapsulate the whole App,
		//so all components will have access to the Context
		<AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};

//A simple hooks to facilitate the access to the AuthContext
// and permit components to subscribe to AuthContext updates
function useAuth() {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
}

export { AuthContext, AuthProvider, useAuth };
