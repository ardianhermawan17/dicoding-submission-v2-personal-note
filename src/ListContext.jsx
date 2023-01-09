import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { LocaleProvider } from './context/LocaleContext';
import { ThemeProvider } from './context/ThemeContext';

function ListContext({ children }) {
	return (
		<AuthProvider>
			<LocaleProvider>
				<ThemeProvider>{children}</ThemeProvider>
			</LocaleProvider>
		</AuthProvider>
	);
}

export default ListContext;
