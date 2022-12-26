/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import InputEmail from '../components/auth/login/InputEmail';
import InputPassword from '../components/auth/login/InputPassword';
import { useAuth } from '../hooks/useAuth';
import useInput from '../hooks/useInput';

function LoginPage() {
	const [email, handleEmailChange] = useInput('');
	const [password, handlePasswordChange] = useInput('');
	const { login } = useAuth();

	function handleSubmit(event) {
		event.preventDefault();
		login({
			email,
			password,
		});
	}

	return (
		<div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
			<div className='mx-auto max-w-lg text-center'>
				<h1 className='text-2xl font-bold sm:text-3xl'>Get started today!</h1>

				<p className='mt-4 text-gray-500'>Semoga bintang 5 :)</p>
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
						No account?
						<a className='underline' href='/'>
							Sign up
						</a>
					</p>

					<button
						type='submit'
						className='ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white'
					>
						Sign in
					</button>
				</div>
			</form>
		</div>
	);
}

export default LoginPage;
