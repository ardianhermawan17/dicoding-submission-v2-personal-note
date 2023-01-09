import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NoteItemBody({ id, title, body }) {
	return (
		<div className='pt-3 ml-4 mr-2 mb-3'>
			<Link
				to={`note/${id}`}
				className='text-xl text-gray-900 dark:text-white dark:hover:text-sky-400 hover:text-sky-400'
			>
				{title}
			</Link>

			<p className='text-gray-400 dark:text-gray-300 text-sm mt-1'>{body}</p>
		</div>
	);
}

NoteItemBody.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
};

export default NoteItemBody;
