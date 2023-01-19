/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import noteService from '../../services/note.service';
import FormField from '../base/FormField';

function CreateNote() {
	const [note, setNote] = useState({
		title: '',
		body: '',
	});
	const navigate = useNavigate();

	function onHandleChange(event, stateType) {
		setNote((prevState) => ({
			...prevState,
			[stateType]: event.target.value,
		}));
	}

	async function onSaveNote(event) {
		event.preventDefault();
		const response = await noteService.create({
			title: note.title,
			body: note.body,
		});
		if (response.status !== 201) {
			toast.error(response.data.message);
		} else {
			toast.success(response.data.message);
			navigate('/');
		}
	}

	return (
		<div className='flex flex-col  items-center justify-around w-full h-auto p-4  bg-primary-600 rounded-xl'>
			<form
				onSubmit={onSaveNote}
				className='flex flex-col mt-2 items-center justify-between w-11/12 max-w-[600px] '
			>
				<div className='flex flex-col w-full md:flex-row'>
					<FormField
						maxLength={12}
						value={note.title}
						onHandleChange={(event) => onHandleChange(event, 'title')}
						type='text'
						name='title'
						placeholder='title'
						className='ml-0 mr-0 md:mr-2 md:w-2/5 h-[40px]'
					/>
				</div>
				<textarea
					value={note.body}
					onChange={(event) => onHandleChange(event, 'body')}
					className='p-3 my-3 mx-4 placeholder:font-hand placeholder:text-2xl w-full text-lg bg-gray-50 dark:bg-black  focus:border-indigo-600 text-gray-500 dark:text-white roboto-regular  rounded-lg h-[200px] shadow-lg focus:outline-none'
					placeholder='Enter your message...'
				/>
				<button type='submit' className='p-4 mx-2 rounded-lg bg-blue-400'>
					Send
				</button>
			</form>
		</div>
	);
}

export default CreateNote;
