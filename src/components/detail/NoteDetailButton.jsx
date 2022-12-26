/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FiArchive, FiBookOpen, FiTrash } from 'react-icons/fi';
import { deleteNote, archiveNote, unarchiveNote } from '../../utils/local-data';

function NoteDetailButton({ id, archived }) {
	const reactIconStyling = useMemo(() => ({ size: '20px' }));
	const navigate = useNavigate();

	function onDeleteNote(noteId) {
		deleteNote(noteId);
		console.log('aoasas');
		navigate('/');
	}

	function onArchiveNote(noteId) {
		archiveNote(noteId);
		navigate('/');
	}

	function onUnarchiveNote(noteId) {
		unarchiveNote(noteId);
		navigate('/');
	}

	return (
		<div className='absolute bottom-0 right-0 flex   text-white border-2 border-solid border-zinc-600 rounded-lg m-10 p-4 '>
			<IconContext.Provider value={reactIconStyling}>
				{!archived ? (
					<button type='button' className='p-4 mx-2 rounded-full bg-blue-400'>
						<FiArchive onClick={() => onArchiveNote(id)} />
					</button>
				) : (
					<button type='button' className='p-4 mx-2 rounded-full bg-blue-400'>
						<FiBookOpen onClick={() => onUnarchiveNote(id)} />
					</button>
				)}
			</IconContext.Provider>
			<button type='button' className='p-4 mx-2 rounded-full bg-red-400'>
				<IconContext.Provider value={reactIconStyling}>
					<FiTrash onClick={() => onDeleteNote(id)} />
				</IconContext.Provider>
			</button>
		</div>
	);
}

NoteDetailButton.propsTypes = {
	id: PropTypes.string.isRequired,
	archived: PropTypes.bool.isRequired,
};

export default NoteDetailButton;
