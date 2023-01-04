import React, { useState } from 'react';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

function InputPassword({
	isConfirmPassword = false,
	password,
	onChangePassword,
}) {
	const [hide, sethide] = useState(true);
	const { t } = useTranslation();

	const PLACEHOLDER = isConfirmPassword
		? t('Masukkan konfirmasi Password')
		: t('Masukkan Password');

	function onHandleClick() {
		sethide(!hide);
	}
	return (
		<div>
			<label htmlFor='password' className='sr-only'>
				{t('Password')}
			</label>
			<div className='relative'>
				<input
					type={hide ? 'password' : 'text'}
					name='password'
					defaultValue={password}
					onChange={onChangePassword}
					className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
					placeholder={PLACEHOLDER}
				/>

				<span className='absolute inset-y-0 right-4 inline-flex items-center'>
					<button type='button' onClick={onHandleClick}>
						{hide ? <FiEyeOff /> : <FiEye />}
					</button>
				</span>
			</div>
		</div>
	);
}

export default InputPassword;
