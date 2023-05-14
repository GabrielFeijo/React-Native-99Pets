import React from 'react';
import { Flex, Price, ServiceText, Text } from './style';
import { useState } from 'react';
import { useEffect } from 'react';
import { ScrollView } from 'react-native';

const CalculateService = ({ services }) => {
	const [amount, setAmount] = useState(0);

	useEffect(() => {
		let price = 0;
		services.map((service) => {
			price += service.price;
		});

		setAmount(price);
	}, []);
	return (
		<>
			<ScrollView
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				style={{ maxHeight: '50%' }}
			>
				{services.map((service, index) => (
					<Flex key={index}>
						<ServiceText>{service.type}</ServiceText>
						<Price>R$ {service.price},00</Price>
					</Flex>
				))}
			</ScrollView>
			<Flex>
				<Text>Total</Text>
				<Text>R$ {amount},00</Text>
			</Flex>
		</>
	);
};

export default CalculateService;
