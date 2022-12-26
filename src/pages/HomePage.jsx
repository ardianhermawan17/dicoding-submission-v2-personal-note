/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { searchNotes } from '../utils/local-data';
import SearchBar from '../components/base/SearchBar';
import NoteList from '../components/home/NoteList';
import AddButton from '../components/base/AddButton';

function HomePage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const keywordSearch = searchParams.get('keyword');
	const [notes, setNotes] = useState(() => searchNotes('', true));
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
			<NoteList notes={datas} />
			<AddButton />
		</section>
	);
}

export default HomePage;
