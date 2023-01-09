import React from 'react';
import PropTypes from 'prop-types';
import NoteItemImage from './NoteImage';
import NoteItemDate from './NoteItemDate';
import NoteItemBody from './NoteItemBody';

// eslint-disable-next-line object-curly-newline
function NoteItem({ id, title, img, body, createdAt }) {
	return (
		<article className='max-w-md min-w-full mx-auto mt-4 shadow-lg border rounded-md duration-300 dark:hover:border-cyan-500 hover:shadow-sm'>
			<div>
				<div className='flex items-center mt-2 pt-3 ml-4 mr-2'>
					<NoteItemImage imageUrl={img} title={title} />
					<NoteItemDate createdAt={createdAt} />
				</div>
				<NoteItemBody id={id} title={title} body={body} />
			</div>
		</article>
	);
}

NoteItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
