/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { searchNotes } from '../utils/local-data';
import SearchBar from '../components/base/SearchBar';
import ArchiveNoteList from '../components/archive/ArchiveNoteList';

function ArchivePage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const keywordSearch = searchParams.get('keyword');
	const [notes, setNotes] = useState(() => searchNotes('', false));
	const [keyword, setKeyword] = useState(keywordSearch ?? '');

	function onKeywordChangeHandler(keywordText) {
		setKeyword(() => keywordText);
		setNotes(() => searchNotes(keywordText, true));
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
