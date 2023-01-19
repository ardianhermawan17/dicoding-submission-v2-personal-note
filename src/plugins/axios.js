/* eslint-disable dot-notation */
import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://notes-api.dicoding.dev/v1',
	headers: {
		'Content-Type': 'application/json',
	},
});

instance.interceptors.request.use(
	(request) => {
		// Do something before request is sent
		const ACCESS_TOKEN = JSON.parse(window.localStorage.getItem('accessToken'));
		if (request.url.includes('login') || request.url.includes('register')) {
			return request;
		}
		request.headers['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
		return request;
	},
	(error) => Promise.reject(error)
);

export default instance;
