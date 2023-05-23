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
		navigate: 'PetshopWallet',
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
		navigate: 'Products',
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
		navigate: 'Comments',
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
		navigate: 'MyPetShop',
	},
];
