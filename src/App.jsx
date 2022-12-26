import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import CreatePage from './pages/CreatePage';
import Page404 from './components/error-pages/404';
import ProtectedPage from './components/auth/ProtectedPage';
import LoginPage from './pages/LoginPage';

function App() {
	function authPage(pages) {
		return <ProtectedPage>{pages}</ProtectedPage>;
	}
	return (
		<div className='bg-gray-100 pb-24 min-h-screen'>
			<Header />
			<main>
				<Routes>
					<Route index path='/' element={<HomePage />} />
					<Route path='/add' element={<AddPage />} />
					<Route path='/archive' element={<ArchivePage />} />
					<Route path='/note/:id' element={<DetailPage />} />
					<Route path='/create' element={authPage(<CreatePage />)} />

					<Route path='/login' element={<LoginPage />} />
					<Route path='*' element={<Page404 />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
