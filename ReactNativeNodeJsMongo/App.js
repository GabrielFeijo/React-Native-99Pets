import React from 'react';

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
import {
	OpenSans_300Light,
	OpenSans_400Regular,
	OpenSans_500Medium,
	OpenSans_600SemiBold,
	OpenSans_700Bold,
	OpenSans_800ExtraBold,
	OpenSans_300Light_Italic,
	OpenSans_400Regular_Italic,
	OpenSans_500Medium_Italic,
	OpenSans_600SemiBold_Italic,
	OpenSans_700Bold_Italic,
	OpenSans_800ExtraBold_Italic,
} from '@expo-google-fonts/open-sans';
import { AuthProvider, useAuth } from './contexts/Auth';
import { Router } from './routes/Routes';

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
		OpenSans_300Light,
		OpenSans_400Regular,
		OpenSans_500Medium,
		OpenSans_600SemiBold,
		OpenSans_700Bold,
		OpenSans_800ExtraBold,
		OpenSans_300Light_Italic,
		OpenSans_400Regular_Italic,
		OpenSans_500Medium_Italic,
		OpenSans_600SemiBold_Italic,
		OpenSans_700Bold_Italic,
		OpenSans_800ExtraBold_Italic,
	});
	if (!fontsLoaded) {
		return <></>;
	} else {
		return (
			<AuthProvider>
				<Router />
			</AuthProvider>
		);
	}
};
