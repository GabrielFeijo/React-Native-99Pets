import React from 'react';
import { Box, styles } from './style';
import { TextInput } from 'react-native';
import { SearchNormal1 } from 'iconsax-react-native';

const SearchBox = ({ handleChange, value }) => {
	return (
		<>
			<Box>
				<TextInput
					placeholder='Buscar Pet'
					placeholderTextColor={'rgba(0, 0, 0, 0.57)'}
					style={styles.input}
					value={value}
					onChangeText={handleChange}
				/>
				<SearchNormal1
					size={20}
					color='rgba(0, 0, 0, 0.57)'
					style={styles.icon}
				/>
			</Box>
		</>
	);
};

export default SearchBox;
