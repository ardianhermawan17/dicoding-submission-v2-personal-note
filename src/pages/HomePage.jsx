/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import noteService from '../services/note.service';
import SearchBar from '../components/base/SearchBar';
import NoteList from '../components/home/NoteList';
import AddButton from '../components/base/AddButton';

function HomePage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const keywordSearch = searchParams.get('keyword');
	const [notes, setNotes] = useState([]);
	const [keyword, setKeyword] = useState(keywordSearch ?? '');

	useEffect(() => {
		noteService
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
			<NoteList notes={datas} />
			<AddButton />
		</section>
	);
}

export default HomePage;
