import React, { useMemo } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { useAuth } from '../../context/AuthContext';

function LogOutButton() {
	const { user, logout } = useAuth();

	const iconClass = useMemo(
		() => ({
			size: 28,
			className: 'text-red-600 dark:text-red-500',
		}),
		[]
	);

	function handleLogout() {
		logout();
	}
	return (
		<IconContext.Provider value={iconClass}>
			<div className='flex justify-center items-center mx-4'>
				<button type='button'>
					{user === null ? '' : <FiLogOut onClick={() => handleLogout()} />}
				</button>
			</div>
		</IconContext.Provider>
	);
}

export default LogOutButton;
