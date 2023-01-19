import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import noteService from '../services/note.service';
import NoteDetail from '../components/detail/NoteDetail';
import LoadingCard from '../components/base/LoadingCard';
// import { getNote } from '../utils/local-data';

function DetailPage() {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [note, setNote] = useState('');

	useEffect(() => {
		noteService
			.detail(id)
			.then((res) => {
				setIsLoading(false);
				setNote(res.data.data);
			})
			.catch((err) => console.error(err));
	}, [id]);

	return (
		<section>
			{isLoading ? (
				<LoadingCard />
			) : (
				<NoteDetail
					id={note.id}
					title={note.title}
					body={note.body}
					archived={note.archived}
					createdAt={note.createdAt}
				/>
			)}
		</section>
	);
}

export default DetailPage;
