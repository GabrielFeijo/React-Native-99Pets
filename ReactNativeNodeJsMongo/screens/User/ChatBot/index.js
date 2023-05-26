import React, { useRef } from 'react';
import {
	Backgound,
	Box,
	ChatBox,
	Close,
	FlexBox,
	Image,
	Input,
	Line,
	Nine,
	ScrollView,
	SendButton,
	Titulo,
} from './style';
import Chatbot from '../../../assets/images/chatbot.png';
import { useState } from 'react';
import { Send } from 'iconsax-react-native';
import { BotMessage, UserMessage } from '../MessagesCard';
import { Alert } from 'react-native';
import axios from 'axios';

const ChatBot = () => {
	const scrollViewRef = useRef(null);
	const [visibility, setVisibility] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [text, onChangeText] = useState(null);
	const [messages, setMessages] = useState([]);

	const changeVisibility = () => {
		setVisibility(!visibility);
	};

	const sendMessage = async () => {
		if (text) {
			setDisabled(true);
			onChangeText(null);

			setMessages((prevState) => [
				...prevState,
				{
					text: text,
					type: 'user',
				},
			]);
			scrollViewRef.current.scrollToEnd({ animated: true });

			try {
				const post = {
					message: text,
				};
				const response = await axios.post(
					'http://nine-nine.eastus.cloudapp.azure.com/chatbot',
					post
				);

				setMessages((prevState) => [
					...prevState,
					{
						text: response.data.response,
						type: 'bot',
					},
				]);
				setDisabled(false);
			} catch (err) {
				console.log(err);
				Alert.alert('Erro na resposta da IA');
			}
			scrollViewRef.current.scrollToEnd({ animated: true });
		}
	};

	return (
		<>
			<ChatBox onPress={changeVisibility}>
				<Image source={Chatbot} />
			</ChatBox>
			{visibility && (
				<Backgound>
					<Close onPress={changeVisibility}></Close>

					<Box>
						<Line />
						<ScrollView
							showsVerticalScrollIndicator={false}
							showsHorizontalScrollIndicator={false}
							ref={scrollViewRef}
						>
							<Nine
								source={{
									uri: 'https://cdn.discordapp.com/attachments/943999603328569424/1111631618696810526/4500_1_01_1.jpg',
								}}
							/>
							<Titulo>Olá! Sou o Nine Nine, em que posso ajudar?</Titulo>

							{Object.keys(messages).length !== 0 &&
								messages.map((message, index) =>
									message.type === 'user' ? (
										<UserMessage
											text={message.text}
											key={index}
										/>
									) : (
										<BotMessage
											text={message.text}
											key={index}
										/>
									)
								)}
						</ScrollView>
						<FlexBox>
							<Input
								value={text}
								onChangeText={onChangeText}
								placeholder='Informe sua dúvida'
								label='Informe sua dúvida'
								placeholderTextColor='#000000b3'
							/>
							<SendButton
								disabled={disabled}
								onPress={sendMessage}
							>
								<Send
									size={30}
									color='#000'
								/>
							</SendButton>
						</FlexBox>
					</Box>
				</Backgound>
			)}
		</>
	);
};

export default ChatBot;
