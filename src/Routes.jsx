import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import CreatePage from './pages/CreatePage';
import Page404 from './components/error-pages/404';
import ProtectedPage from './components/auth/ProtectedPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function ListRouter() {
	return (
		<Routes>
			<Route element={<ProtectedPage />}>
				<Route index path='/' element={<HomePage />} />
				<Route path='/add' element={<AddPage />} />
				<Route path='/archive' element={<ArchivePage />} />
				<Route path='/note/:id' element={<DetailPage />} />
				<Route path='/create' element={<CreatePage />} />
			</Route>

			<Route path='/register' element={<RegisterPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='*' element={<Page404 />} />
		</Routes>
	);
}
export default ListRouter;
