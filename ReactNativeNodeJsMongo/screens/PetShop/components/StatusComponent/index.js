import React from 'react';
import { View } from 'react-native';
import { DateText, Flex, Text } from './style';
import { Checkbox } from 'react-native-paper';
import { format } from 'date-fns';

const StatusComponent = ({ status }) => {
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
				status={status.value ? 'checked' : 'unchecked'}
				color={'black'}
			/>
		</Flex>
	);
};

export default StatusComponent;
