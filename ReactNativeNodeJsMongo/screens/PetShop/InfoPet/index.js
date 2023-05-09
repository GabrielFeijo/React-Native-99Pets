import React from 'react';
import { Flex, Name, Species } from './style';
import { Pet } from 'iconsax-react-native';
import { View } from 'react-native';

const InfoPet = () => {
	return (
		<Flex>
			<Pet
				size={28}
				color='rgba(0, 0, 0, 0.57)'
			/>
			<View>
				<Name>Mingau</Name>
				<Species> Gato - SRD</Species>
			</View>
		</Flex>
	);
};

export default InfoPet;
