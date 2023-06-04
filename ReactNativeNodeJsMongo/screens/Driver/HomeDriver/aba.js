import { Car, EmptyWallet } from 'iconsax-react-native';

export const lista = [
	{
		index: 0,
		icon: (
			<Car
				size='48'
				color='#0492C2'
			/>
		),
		nome: 'Minhas rotas',
		navigate: 'RouteHistory',
	},
	{
		index: 1,
		icon: (
			<EmptyWallet
				size='48'
				color='#0492C2'
			/>
		),
		nome: 'Carteira',
		navigate: 'Wallet',
	},
];
