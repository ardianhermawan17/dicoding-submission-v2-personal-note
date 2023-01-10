import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import idTranslation from './id/idTranslation';
import enTranslation from './en/enTranslation';

// DOC
// https://github.com/i18next/react-i18next
// Default language on locale context
const language = JSON.parse(window.localStorage.getItem('locale'));

i18next.use(initReactI18next).init({
	lng: language,
	debug: true,
	resources: {
		en: {
			translation: enTranslation,
		},
		id: {
			translation: idTranslation,
		},
	},

	interpolation: {
		escapeValue: false,
	},

	fallbackLng: 'en',
});

export default i18next;
