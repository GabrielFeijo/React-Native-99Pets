import React, { useState, useEffect } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { Titulo, Text, styles } from './style';
import { NineMenu } from '../../NavBar/Menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../axios/config';
import { CommentCard } from '../../General/Card';

const Comments = (props) => {
	const [comments, setComments] = useState([]);

	function fetchData() {
		(async () => {
			const userStorage = await AsyncStorage.getItem('token_user');
			if (userStorage !== null) {
				// value previously stored
				const userJson = JSON.parse(userStorage);

				try {
					const response = await api.get(`/api/shopComments`, {
						headers: {
							id: userJson.id,
							token: userJson.token,
						},
					});
					setComments(response.data);
				} catch (error) {
					console.log(error);
					Alert.alert(error.response.data);
				}
			}
		})();
	}
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<>
			<NineMenu />
			<View style={styles.wrap}>
				<Titulo>Comentários</Titulo>
				<Text>
					Aqui você pode ver quais cmentários estão sendo feitos sobre seu
					estabelecimento
				</Text>
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					{comments.length > 0 ? (
						comments.map((comment, index) => (
							<CommentCard
								comment={comment}
								key={index}
							/>
						))
					) : (
						<Text>Você ainda não possui nenhuma avaliação!</Text>
					)}
				</ScrollView>
			</View>
		</>
	);
};

export default Comments;
