// eslint-disable-next-line object-curly-newline
import React, { useContext, useMemo, createContext } from 'react';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../hooks/useLocalStorage';

const localeContext = createContext('');

function LocaleProvider({ children }) {
	const [locale, setLocale] = useLocalStorage('locale', 'en');
	const { i18n } = useTranslation();

	function toggleLocale() {
		setLocale(locale === 'id' ? 'en' : 'id');
		i18n.changeLanguage(locale === 'id' ? 'en' : 'id');
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
