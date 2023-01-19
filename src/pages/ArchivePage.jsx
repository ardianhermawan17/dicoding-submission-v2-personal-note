/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import archiveNoteService from '../services/archiveNote.service';
import SearchBar from '../components/base/SearchBar';
import ArchiveNoteList from '../components/archive/ArchiveNoteList';

function ArchivePage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const keywordSearch = searchParams.get('keyword');
	const [notes, setNotes] = useState([]);
	const [keyword, setKeyword] = useState(keywordSearch ?? '');

	useEffect(() => {
		archiveNoteService
			.getAll()
			.then((res) => {
				setNotes(res.data.data);
			})
			.catch((err) => console.error(err));
	}, []);

	function onKeywordChangeHandler(keywordText) {
		setKeyword(() => keywordText);
		setSearchParams({ keyword: keywordText });
	}

	const datas = notes.filter((note) =>
		note.title
			.toString()
			.toLowerCase()
			.includes(keyword.toString().toLowerCase())
	);

	return (
		<section>
			<SearchBar
				keyword={keyword}
				keywordChange={(value) => onKeywordChangeHandler(value)}
			/>
			<ArchiveNoteList notes={datas} />
		</section>
	);
}

export default ArchivePage;
