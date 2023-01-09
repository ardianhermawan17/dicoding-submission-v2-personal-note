import React, { useContext, useMemo, createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const themeContext = createContext('');

function ThemeProvider({ children }) {
	const [theme, setTheme] = useLocalStorage('theme', 'light');

	function toggleTheme() {
		// setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	const value = useMemo(
		() => ({
			theme,
			toggleTheme,
		}),
		[theme]
	);

	return (
		<themeContext.Provider value={value}>{children}</themeContext.Provider>
	);
}

function useTheme() {
	return useContext(themeContext);
}

export { useTheme, ThemeProvider };
