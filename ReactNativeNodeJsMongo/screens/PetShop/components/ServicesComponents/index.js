import React from 'react';
import {
	Flex,
	Price,
	ServiceText,
	ServiceTextEdit,
	Text,
	View,
	styles,
} from './style';
import { Alert, ScrollView } from 'react-native';

import CurrencyInput from 'react-native-currency-input';

export const ListServices = ({ services }) => {
	return (
		<>
			<ScrollView
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				style={{
					maxHeight: '80%',
					width: '97%',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginBottom: 10,
				}}
			>
				<Flex>
					<Text>Serviço</Text>
					<Text>Valor</Text>
				</Flex>
				{services.length > 0 ? (
					services.map((service, index) => (
						<Flex key={index}>
							<ServiceText>{service.type}</ServiceText>
							<Price>R$ {service.price.toFixed(2).replace('.', ',')}</Price>
						</Flex>
					))
				) : (
					<ServiceText>Nenhum serviço encontrado</ServiceText>
				)}
			</ScrollView>
		</>
	);
};

export const EditServices = ({ services, handleChange, handleNumber }) => {
	return (
		<>
			<ScrollView
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				style={{
					maxHeight: '80%',
					width: '97%',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginBottom: 10,
				}}
			>
				<Flex>
					<Text>Serviço</Text>
					<Text>Valor</Text>
				</Flex>
				{services.map((service, index) => (
					<Flex key={index}>
						<ServiceTextEdit
							value={service.type}
							name={service.type}
							onChangeText={(evt) => handleChange(evt, index)}
						/>

						<View>
							<CurrencyInput
								value={service.price}
								onChangeValue={(newValue) => handleNumber(newValue, index)}
								prefix='R$'
								delimiter='.'
								separator=','
								precision={2}
								minValue={0}
								style={styles.priceEdit}
							/>
						</View>
					</Flex>
				))}
			</ScrollView>
		</>
	);
};
