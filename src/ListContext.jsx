import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { LocaleProvider } from './context/LocaleContext';

function ListContext({ children }) {
	return (
		<AuthProvider>
			<LocaleProvider>{children}</LocaleProvider>
		</AuthProvider>
	);
}

export default ListContext;
