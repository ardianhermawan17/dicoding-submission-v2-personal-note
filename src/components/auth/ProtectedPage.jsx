import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../helpers/hooks/useAuth';

export default function ProtectedPage({ children }) {
	const { user } = useAuth();

	if (!user) {
		return <Navigate to='/login' />;
	}

	return children;
}
