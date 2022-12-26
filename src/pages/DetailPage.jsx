import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import NoteDetail from '../components/detail/NoteDetail';
import { getNote } from '../utils/local-data';

function DetailPage() {
	const { id } = useParams();
	const [note] = useState(() => getNote(id));

	return (
		<section>
			<NoteDetail
				id={note.id}
				title={note.title}
				body={note.body}
				archived={note.archived}
				createdAt={note.createdAt}
			/>
		</section>
	);
}

export default DetailPage;
