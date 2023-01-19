import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import InputName from '../components/auth/InputField/InputName';
import InputEmail from '../components/auth/InputField/InputEmail';
import InputPassword from '../components/auth/InputField/InputPassword';
import useInput from '../hooks/useInput';

function RegisterPage() {
	const [isError, handleIsError] = useState(false);
	const [email, handleEmailChange] = useInput('');
	const [password, handlePasswordChange] = useInput('');
	const [confirmPassword, handleConfirmPasswordChange] = useInput('');
	const [name, handleNameChange] = useInput('');
	const { register } = useAuth();
	const { t } = useTranslation();

	function checkConfirmPassword() {
		if (password === confirmPassword) {
			handleIsError(false);
		} else {
			handleIsError(true);
		}
	}
	async function handleSubmit(event) {
		event.preventDefault();
		checkConfirmPassword();
		await register({ name, email, password });
	}
	return (
		<div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
			<div className='mx-auto max-w-lg text-center'>
				<h1 className='py-3 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl'>
					{t('Daftar dulu okay!')}
				</h1>

				<p className='mt-4 text-gray-500'>{t('semoga bintang 5')}</p>
			</div>

			<form
				onSubmit={handleSubmit}
				className='mx-auto mt-8 mb-0 max-w-md space-y-4'
			>
				<InputName name={name} onChangeName={handleNameChange} />

				<InputEmail email={email} onChangeEmail={handleEmailChange} />

				<InputPassword
					password={password}
					onChangePassword={handlePasswordChange}
				/>

				<InputPassword
					isConfirmPassword
					password={confirmPassword}
					onChangePassword={handleConfirmPasswordChange}
				/>

				{isError ? (
					<span className='text-sm text-red-500'>
						{t('Password tidak sama')}
					</span>
				) : (
					''
				)}
				<div className='flex items-center justify-end'>
					<button
						type='submit'
						className='ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white'
					>
						{t('daftar')}
					</button>
				</div>
			</form>
		</div>
	);
}

export default RegisterPage;
