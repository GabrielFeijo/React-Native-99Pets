import React from 'react';
import { Flex, Name, Species, styles } from './style';
import { Pet } from 'iconsax-react-native';
import { View } from 'react-native';

const InfoPet = ({ pet, navigate }) => {
	return (
		<Flex onPress={navigate}>
			<Pet
				size={28}
				color='rgba(0, 0, 0, 0.57)'
			/>
			<View style={styles.gap}>
				<Name>{pet.name}</Name>
				<Species>
					{pet.species} - {pet.breed}
				</Species>
			</View>
		</Flex>
	);
};

export default InfoPet;
