/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FiArchive, FiBookOpen, FiTrash } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import noteService from '../../services/note.service';
import archiveNoteService from '../../services/archiveNote.service';

function NoteDetailButton({ id, archived }) {
	const reactIconStyling = useMemo(() => ({ size: '20px' }));
	const navigate = useNavigate();

	async function onDeleteNote(noteId) {
		const response = await noteService.delete(noteId);
		if (response.status !== 200) {
			toast.error(response.data.message);
		} else {
			toast.success(response.data.message);
			navigate('/');
		}
	}

	async function onArchiveNote(noteId) {
		const response = await archiveNoteService.archiveNote(noteId);
		console.log(response);
		if (response.status !== 200) {
			toast.error(response.data.message);
		} else {
			toast.success(response.data.message);
			navigate('/');
		}
	}

	async function onUnarchiveNote(noteId) {
		const response = await archiveNoteService.unArchiveNote(noteId);
		if (response.status !== 200) {
			toast.error(response.data.message);
		} else {
			toast.success(response.data.message);
			navigate('/');
		}
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
