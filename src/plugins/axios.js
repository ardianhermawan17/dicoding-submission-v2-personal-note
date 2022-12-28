/* eslint-disable dot-notation */
import axios from 'axios';
import { getAccessToken } from '../utils/network-data';

const instance = axios.create({
	baseURL: 'https://notes-api.dicoding.dev/v1',
	headers: {
		'Content-Type': 'application/json',
	},
});

instance.interceptors.request.use(
	(request) => {
		// Do something before request is sent
		if (request.url.includes('login') || request.url.includes('register')) {
			request.headers['Authorization'] = `Bearer ${getAccessToken()}`;
		}
		return request;
	},
	(error) => Promise.reject(error)
);

export default instance;
