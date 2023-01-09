import React from 'react';
import PropTypes from 'prop-types';
import ArchiveNoteItemImage from './ArchiveNoteImage';
import ArchiveNoteItemDate from './ArchiveNoteItemDate';
import ArchiveNoteItemBody from './ArchiveNoteItemBody';

// eslint-disable-next-line object-curly-newline
function ArchiveNoteItem({ id, title, img, body, createdAt }) {
	return (
		<article className='max-w-md min-w-full mx-auto mt-4 shadow-lg border rounded-md duration-300 dark:hover:border-cyan-500 hover:shadow-sm'>
			<div>
				<div className='flex items-center mt-2 pt-3 ml-4 mr-2'>
					<ArchiveNoteItemImage imageUrl={img} title={title} />
					<ArchiveNoteItemDate createdAt={createdAt} />
				</div>
				<ArchiveNoteItemBody id={id} title={title} body={body} />
			</div>
		</article>
	);
}

ArchiveNoteItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
};

export default ArchiveNoteItem;
