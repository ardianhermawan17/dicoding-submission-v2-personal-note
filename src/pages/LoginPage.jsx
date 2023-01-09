/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import InputEmail from '../components/auth/InputField/InputEmail';
import InputPassword from '../components/auth/InputField/InputPassword';
import { useAuth } from '../context/AuthContext';
import useInput from '../hooks/useInput';

function LoginPage() {
	const [email, handleEmailChange] = useInput('');
	const [password, handlePasswordChange] = useInput('');
	const { login } = useAuth();
	const { t } = useTranslation();

	async function handleSubmit(event) {
		event.preventDefault();
		await login({
			email,
			password,
		});
	}

	return (
		<div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
			<div className='mx-auto max-w-lg text-center'>
				<h1 className='py-3 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl'>
					{t('Login dulu okay!')}
				</h1>

				<p className='mt-4 text-gray-500'>{t('semoga bintang 5')}</p>
			</div>

			<form
				onSubmit={handleSubmit}
				className='mx-auto mt-8 mb-0 max-w-md space-y-4'
			>
				<InputEmail email={email} onChangeEmail={handleEmailChange} />

				<InputPassword
					password={password}
					onChangePassword={handlePasswordChange}
				/>
				<div className='flex items-center justify-between'>
					<p className='text-sm text-gray-500'>
						{t('Tidak ada akun?')}
						<Link to='/register' className='underline'>
							{t('daftar')}
						</Link>
					</p>

					<button
						type='submit'
						className='ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white'
					>
						{t('masuk')}
					</button>
				</div>
			</form>
		</div>
	);
}

export default LoginPage;
