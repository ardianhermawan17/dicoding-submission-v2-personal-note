import axios from '../plugins/axios';

export default {
	login(payload) {
		return axios.post('/login', payload);
	},
	register(payload) {
		return axios.post('/register', payload);
	},
	getUserLogged() {
		return axios.get('/users/me');
	},
};
