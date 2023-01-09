import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../../utils/index';

function ArchiveNoteItemDate({ createdAt }) {
	return (
		<div className='ml-3'>
			<span className='block text-gray-400 dark:text-gray-300 text-sm'>
				{showFormattedDate(createdAt)}
			</span>
		</div>
	);
}

ArchiveNoteItemDate.propsTypes = {
	createdAt: PropTypes.string.isRequired,
};

export default ArchiveNoteItemDate;
