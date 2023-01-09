import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function InputEmail({ email, onChangeEmail }) {
	const { t } = useTranslation();
	return (
		<div>
			<label htmlFor='email' className='sr-only'>
				{t('email')}
			</label>

			<div className='relative'>
				<input
					type='email'
					name='email'
					defaultValue={email}
					onChange={onChangeEmail}
					className='w-full rounded-lg bg-gray-50 dark:bg-black  focus:border-indigo-600 text-gray-500 dark:text-white p-4 pr-12 text-sm shadow-sm'
					placeholder={t('Masukkan email')}
				/>

				<span className='absolute inset-y-0 right-4 inline-flex items-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 text-gray-400 dark:text-indigo-600'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
						/>
					</svg>
				</span>
			</div>
		</div>
	);
}

InputEmail.propTypes = {
	email: PropTypes.string.isRequired,
	onChangeEmail: PropTypes.func.isRequired,
};

export default InputEmail;
