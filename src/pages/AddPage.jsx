import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';

function AddPage() {
	const navigate = useNavigate();

	function onAddNoteHandler(note) {
		addNote(note);
		navigate('/');
	}
	return (
		<section>
			<h2> Tambah Note</h2>
			<button type='button' onClick={onAddNoteHandler}>
				as
			</button>
		</section>
	);
}

export default AddPage;
