import React from 'react';
import { View } from 'react-native';
import { DateText, Flex, Text } from './style';
import { format } from 'date-fns';
import Checkbox from 'expo-checkbox';

const StatusComponent = ({ status, handleChange }) => {
	return (
		<Flex>
			<View>
				<Text>{status.name}</Text>
				<DateText>
					{status.updated_at
						? format(new Date(status.updated_at), 'dd/MM/yyyy HH:mm:ss')
						: 'Não definido'}
				</DateText>
			</View>
			<Checkbox
				value={status.value}
				onValueChange={() => handleChange(status)}
				color={'black'}
				style={{ borderRadius: 20 }}
			/>
		</Flex>
	);
};

export default StatusComponent;
