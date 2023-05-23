import styled from 'styled-components/native';
import { Platform, StyleSheet } from 'react-native';

export const Titulo = styled.Text`
	color: black;
	font-size: 24px;
	font-weight: bold;
	font-family: Montserrat_400Regular;
	margin-top: 20px;
`;

export const Text = styled.Text`
	font-family: OpenSans_600SemiBold;
	font-size: 20px;
	color: rgba(0, 0, 0, 0.57);
`;

export const TextInfo = styled.Text`
	font-family: OpenSans_400Regular;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.57);
	margin-top: 5px;
`;

export const Plate = styled.Text`
	font-family: Montserrat_600SemiBold;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.57);
	margin-top: 5px;
`;

export const Label = styled.Text`
	font-family: OpenSans_600SemiBold;
	font-size: 20px;
	color: rgba(251, 175, 94, 1);
`;

export const WalletText = styled.Text`
	font-family: OpenSans_600SemiBold;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.57);
`;
export const Image = styled.Image`
	width: 164px;
	height: 200px;
	border-radius: 16px;
`;
export const Description = styled.View`
	height: 150px;
	border-top-right-radius: 16px;
	border-bottom-right-radius: 16px;
	position: relative;
	padding: 5px;
	background-color: white;
	flex: 1;
	justify-content: center;
`;
export const MainBox = styled.TouchableOpacity`
	width: 170px;
	height: 150px;
	border-radius: 16px;

	display: flex;
	flex-wrap: wrap;
	align-items: center;
	align-content: center;
	justify-content: space-evenly;
	background: #ffffff;

	${Platform.OS === 'android'
		? `elevation: 3;`
		: `box-shadow: 0px 4px 2px rgba(12, 12, 12, 0.12);`}

	margin-bottom: 24px;
`;

export const MarketBox = styled.TouchableOpacity`
	width: 100%;
	height: 140px;
	border-radius: 16px;

	display: flex;
	flex-direction: row;
	align-items: center;
	align-content: center;
	justify-content: space-between;
	background: #ffffff;

	${Platform.OS === 'android'
		? `elevation: 3;`
		: `box-shadow: 0px 8px 24px rgba(12, 12, 12, 0.1);`}

	margin-bottom: 10px;
	padding: 20px;
`;

export const Title = styled.Text`
	font-family: Montserrat_600SemiBold;
	color: rgba(0, 0, 0, 0.57);
	font-size: 20px;
`;
export const InfoMarket = styled.Text`
	font-family: Montserrat_500Medium;
	color: rgba(0, 0, 0, 0.57);
	font-size: 16px;
	width: 184px;
	margin-top: 16px;
`;

export const MarketImage = styled.Image`
	width: 72px;
	height: 100%;
	border-radius: 16px;
`;

export const StoreBox = styled.TouchableOpacity`
	width: 100%;
	height: 120px;
	border-radius: 16px;

	display: flex;
	flex-direction: row;
	align-items: center;
	align-content: center;
	justify-content: space-between;
	background: #ffffff;

	${Platform.OS === 'android'
		? `elevation: 3;`
		: `box-shadow: 0px 8px 8px rgba(12, 12, 12, 0.1);`}

	margin-bottom: 34px;
	padding: 16px;
`;

export const Category = styled.Text`
	font-family: Montserrat_600SemiBold;
	font-size: 20px;
	color: rgba(0, 0, 0, 0.57);
`;

export const StoreImage = styled.Image`
	width: 64px;
	height: 100%;
	border-radius: 16px;
`;

export const ItemBox = styled.TouchableOpacity`
	width: 165px;
	display: flex;
	align-items: center;

	border-radius: 16px;
	background: #ffffff;
	padding: 20px 0;
	margin-bottom: 20px;
`;

export const ItemPicture = styled.Image`
	width: 144px;
	height: 160px;
	border-radius: 16px;
	margin-bottom: 5px;
`;

export const Weight = styled.Text`
	font-family: Montserrat_400Regular;
	color: rgba(0, 0, 0, 0.57);
	font-size: 14px;
`;

export const ProductName = styled.Text`
	font-family: Montserrat_500Medium;
	color: rgba(0, 0, 0, 0.57);
	margin: 5px 0;
`;

export const Price = styled.Text`
	font-family: Montserrat_700Bold;
	color: rgba(0, 0, 0, 0.57);
`;

export const HistoryBox = styled.TouchableOpacity`
	width: 100%;

	display: flex;
	flex-direction: row;
	align-items: center;
	align-content: center;
	margin-bottom: 24px;
	border-bottom-color: rgba(0, 0, 0, 0.2);
	border-bottom-width: 1px;
	padding-bottom: 20px;
`;

export const HistoryTitle = styled.Text`
	font-family: Montserrat_700Bold;
	color: rgba(0, 0, 0, 0.57);
	font-size: 16px;
`;

export const HistoryInfo = styled.Text`
	font-family: Montserrat_700Bold;
	color: rgba(0, 0, 0, 0.57);
	margin: 8px 0;
`;
export const RouteStatus = styled.Text`
	font-family: Montserrat_700Bold;
	color: #fbaf5e;
	margin: 8px 0;
`;
export const AnimalText = styled.Text`
	font-family: Montserrat_400Regular;
	color: rgba(0, 0, 0, 0.57);
	font-size: 12px;
`;

export const FlexBox = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const styles = StyleSheet.create({
	wrap: {
		minWidth: '100%',
		flexWrap: 'wrap',
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10,
	},
});
