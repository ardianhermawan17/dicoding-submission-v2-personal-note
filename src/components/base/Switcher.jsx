import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide from '../../hooks/useDarkSide';

export default function Switcher() {
	const [colorTheme, setColorTheme] = useDarkSide();

	function toggleDarkMode() {
		setColorTheme(colorTheme === 'dark' ? 'light' : 'dark');
	}

	return (
		<DarkModeSwitch
			checked={colorTheme === 'dark'}
			onChange={() => toggleDarkMode()}
			size={40}
		/>
	);
}
