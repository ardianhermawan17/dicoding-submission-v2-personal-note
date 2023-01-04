// eslint-disable-next-line object-curly-newline
import React, { useContext, useMemo, createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const localeContext = createContext('');

function LocaleProvider({ children }) {
	const [locale, setLocale] = useLocalStorage('locale', 'id');

	function toggleLocale() {
		setLocale((prevLocale) => (prevLocale === 'id' ? 'id' : 'en'));
	}

	const value = useMemo(
		() => ({
			locale,
			toggleLocale,
		}),
		[locale]
	);

	return (
		<localeContext.Provider value={value}>{children}</localeContext.Provider>
	);
}

function useLocale() {
	return useContext(localeContext);
}

export { useLocale, LocaleProvider };
