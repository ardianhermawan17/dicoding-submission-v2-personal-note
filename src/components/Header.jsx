/* eslint-disable no-script-url */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import Switcher from './base/Switcher';
import LogOutButton from './base/LogOutButton';
import TransButton from './base/TransButton';
import useDarkSide from '../hooks/useDarkSide';

// eslint-disable-next-line react/prefer-stateless-function

function Header() {
	const [toggle, setToggle] = useState(false);
	const { user } = useAuth();
	const [theme] = useDarkSide();
	const { t } = useTranslation();

	const navigation = [
		{ title: 'Note', path: '/' },
		{ title: `${t('Arsip')}`, path: '/archive' },
	];

	function onHandleToggle(toggleStatus) {
		setToggle(() => toggleStatus);
	}

	return (
		<nav className='bg-white dark:bg-black w-full border-b md:border-0 md:static'>
			<div className='items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8'>
				<div className='flex items-center justify-between py-3 md:py-5 md:block '>
					<Link to='/'>
						<button type='button'>
							{theme === 'light' ? (
								<img
									src='https://www.dicoding.com/blog/wp-content/uploads/2014/12/dicoding-header-logo.png'
									width={120}
									height={50}
									alt='Float UI logo'
								/>
							) : (
								<img
									src='https://www.dicoding.id/wp-content/uploads/2020/07/Logo-Dicoding-Putih.png'
									width={120}
									height={50}
									alt='Float UI logo'
								/>
							)}
						</button>
					</Link>
					<div className='md:hidden'>
						<button
							type='button'
							className='text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border'
							onClick={() => onHandleToggle(!toggle)}
						>
							{toggle ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6 fill-current dark:fill-white'
									viewBox='0 0 20 20'
								>
									<path
										fillRule='evenodd'
										d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
										clipRule='evenodd'
									/>
								</svg>
							) : (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6 fill-current dark:fill-white stroke-current dark:stroke-white'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 8h16M4 16h16'
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
				<div
					className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
						toggle ? 'block' : 'hidden'
					}`}
				>
					{user ? (
						<ul className='justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
							{navigation.map((item, idx) => (
								<li
									// eslint-disable-next-line react/no-array-index-key
									key={`${idx}`}
									className='text-gray-600 dark:text-white dark:hover:text-indigo-600  text-lg hover:text-indigo-600'
								>
									<Link to={item.path}>{item.title}</Link>
								</li>
							))}
						</ul>
					) : (
						''
					)}
				</div>
				<div
					className={`flex-0 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
						toggle ? 'block' : 'hidden'
					}`}
				>
					<div className='flex justify-between md:justify-start'>
						<TransButton />
						<Switcher />
						<LogOutButton />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Header;
