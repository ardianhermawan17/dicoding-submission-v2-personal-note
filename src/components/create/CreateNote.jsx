/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../../utils/local-data';
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

	function onSaveNote() {
		addNote({ title: note.title, body: note.body });

		navigate('/');
	}

	return (
		<div className='flex flex-col  items-center justify-around w-full h-auto p-4  bg-primary-600 rounded-xl'>
			<form className='flex flex-col mt-2 items-center justify-between w-11/12 max-w-[600px] '>
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
					className='p-3 my-3 mx-4 placeholder:font-hand placeholder:text-2xl w-full text-lg border-primary-300 roboto-regular  rounded-lg h-[200px] shadow-lg focus:outline-none'
					placeholder='Enter your message...'
				/>
				<input
					onClick={() => onSaveNote()}
					type='submit'
					name='Send'
					value='Send'
					className='p-3 px-4 mx-auto mt-3 text-lg bg-blue-400 text-white rounded-lg shadow-md cursor-pointer text-primary-600 font-sans-bb h-3/4 hover:bg-sky-400'
				/>
			</form>
		</div>
	);
}

export default CreateNote;
