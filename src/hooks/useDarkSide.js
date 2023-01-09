import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function useDarkSide() {
	const { theme, toggleTheme } = useTheme();
	const colorTheme = theme === 'dark' ? 'light' : 'dark';

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(colorTheme);
		root.classList.add(theme);
	}, [theme]);

	return [theme, toggleTheme];
}
