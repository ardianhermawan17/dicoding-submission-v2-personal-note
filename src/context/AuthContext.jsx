/* eslint-disable object-curly-newline */
import React, { createContext, useContext, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import authenticateService from '../services/authenticate.service';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext('');

function AuthProvider({ children }) {
	const [token, setToken] = useLocalStorage('accessToken', null);
	const [user, setUser] = useLocalStorage('user', null);
	const navigate = useNavigate();

	async function getUserLogged() {
		const response = await authenticateService.getUserLogged();
		if (response.error) {
			return response;
		}
		setUser(response.data.data);

		return response.data;
	}

	// call function to sign out
	function logout() {
		setUser(null);
		setToken(null);
		toast.success('Logout Successful');
		navigate('/login', { replace: true });
	}

	// call function when authenticate user
	function login(payload) {
		const response = authenticateService
			.login(payload)
			.catch((error) => {
				console.log(error);
				throw error;
			})
			.then(async (res) => {
				setToken(res.data.data.accessToken);
				await getUserLogged();
				navigate('/');
				return res;
			});

		toast.promise(response, {
			loading: 'Loading...',
			success: (res) => res.data.message,
			error: (res) => res.response.data.message,
		});

		return response.data;
	}

	async function register(payload) {
		const response = authenticateService
			.register(payload)
			.catch((error) => {
				console.log(error);
				throw error;
			})
			.then((res) => {
				console.log(res);
				if (user === null) navigate('/login');
				else logout();
				return res;
			});

		toast.promise(response, {
			loading: 'Loading',
			success: (res) => res.data.message,
			error: (res) => res.response.data.message,
		});

		return response.data;
	}

	const value = useMemo(
		() => ({
			user,
			token,
			login,
			register,
			logout,
			getUserLogged,
		}),
		[token, user]
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
	return useContext(AuthContext);
}

export { useAuth, AuthProvider };
