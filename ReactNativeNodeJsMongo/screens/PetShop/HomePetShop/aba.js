import {
	BagHappy,
	Diagram,
	EmojiHappy,
	EmptyWallet,
	MoneySend,
	Pet,
	Reserve,
} from 'iconsax-react-native';

export const lista = [
	{
		index: 0,
		icon: (
			<Pet
				size='48'
				color='#FBAF5E'
			/>
		),
		nome: 'Pets',
		navigate: 'Pets',
	},
	{
		index: 1,
		icon: (
			<Reserve
				size='48'
				color='#FBAF5E'
			/>
		),
		nome: 'Serviços',
		navigate: 'ServicesPage',
	},
	{
		index: 2,
		icon: (
			<EmptyWallet
				size='48'
				color='#FBAF5E'
			/>
		),
		nome: 'Carteira',
	},
	{
		index: 3,
		icon: (
			<MoneySend
				size='48'
				color='#FBAF5E'
			/>
		),
		nome: 'Produtos',
	},
	{
		index: 4,
		icon: (
			<Diagram
				size='48'
				color='#FBAF5E'
			/>
		),
		nome: 'Avaliações',
	},
	{
		index: 5,
		icon: (
			<BagHappy
				size='48'
				color='#FBAF5E'
			/>
		),
		nome: 'Meu Petshop',
	},
];
