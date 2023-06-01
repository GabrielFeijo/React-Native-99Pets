import { Flex, FlexRight, Image, Text, Titulo, UserText, View } from './style';
import Profile from '../../../assets/images/coruja.png';
import Bot from '../../../assets/images/bot.png';

export const UserMessage = ({ text }) => {
	return (
		<View>
			<FlexRight>
				<Image
					source={Profile}
					style={{ width: 50, height: 50 }}
				/>
				<Titulo>Eu</Titulo>
			</FlexRight>
			<UserText>{text}</UserText>
		</View>
	);
};

export const BotMessage = ({ text }) => {
	return (
		<View>
			<Flex>
				<Image source={Bot} />
				<Titulo>Nine Nine</Titulo>
			</Flex>
			<Text>{text}</Text>
		</View>
	);
};
