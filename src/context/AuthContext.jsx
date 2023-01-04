import React, { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import authenticateService from '../services/authenticate.service';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext('');

function AuthProvider({ children }) {
	const [user, setUser] = useLocalStorage('accessToken', null);
	const navigate = useNavigate();

	// call function when authenticate user
	async function login(data) {
		const response = await authenticateService.login(data);
		if (response.error) {
			return response;
		}
		setUser(response.data.data.accessToken);
		navigate('/');
		return response.data;
	}

	// call function to sign out
	function logout() {
		setUser(null);
		navigate('/', { replace: true });
	}

	const value = useMemo(
		() => ({
			user,
			login,
			logout,
		}),
		[user]
	);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
	return useContext(AuthContext);
}

export { useAuth, AuthProvider };
