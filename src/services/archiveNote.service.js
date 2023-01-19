import axios from '../plugins/axios';

export default {
	getAll() {
		return axios.get('/notes/archived');
	},
	archiveNote(noteId) {
		return axios.post(`/notes/${noteId}/archive`);
	},
	unArchiveNote(noteId) {
		return axios.post(`/notes/${noteId}/unarchive`);
	},
};
