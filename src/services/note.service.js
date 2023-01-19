import axios from '../plugins/axios';

export default {
	create(payload) {
		return axios.post('/notes', payload);
	},
	getAll() {
		return axios.get('/notes');
	},
	detail(noteId) {
		return axios.get(`/notes/${noteId}`);
	},
	delete(noteId) {
		return axios.delete(`/notes/${noteId}`);
	},
};
