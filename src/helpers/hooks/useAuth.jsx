import React, { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from './useLocalStorage';

const AuthContext = createContext('');

function AuthProvider({ children }) {
	const [user, setUser] = useLocalStorage('user', null);
	const navigate = useNavigate();

	// call fucntion when authenticate user
	async function login(data) {
		setUser(data);
		navigate('/');
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
