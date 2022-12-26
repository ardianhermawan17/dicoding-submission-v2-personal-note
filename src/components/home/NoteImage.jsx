import React from 'react';
import PropTypes from 'prop-types';

function NoteItemImage({ imageUrl, title }) {
	return (
		<div className='flex-none w-10 h-10 rounded-full'>
			<img src={imageUrl} className='w-full h-full rounded-full' alt={title} />
		</div>
	);
}

NoteItemImage.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default NoteItemImage;
