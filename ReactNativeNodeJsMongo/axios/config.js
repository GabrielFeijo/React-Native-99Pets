import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api-99-pets.vercel.app',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
	},
});

export default api;
