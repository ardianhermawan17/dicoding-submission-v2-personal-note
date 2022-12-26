import { useState } from 'react';

export default function useLocalStorage(keyName, defaultValue, isJSON = true) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const value = localStorage.getItem(keyName);
			if (value) {
				return isJSON ? JSON.parse(value) : value;
			}
			localStorage.setItem(
				keyName,
				isJSON ? JSON.stringify(defaultValue) : defaultValue
			);
			return defaultValue;
		} catch (err) {
			return defaultValue;
		}
	});

	const setValue = (newValue) => {
		try {
			localStorage.setItem(
				keyName,
				isJSON ? JSON.stringify(defaultValue) : defaultValue
			);
		} catch (err) {
			console.error(err);
		}
		setStoredValue(newValue);
	};

	return [storedValue, setValue];
}
