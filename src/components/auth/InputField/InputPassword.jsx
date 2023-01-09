import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { useTranslation } from 'react-i18next';

function InputPassword({
	isConfirmPassword = false,
	password,
	onChangePassword,
}) {
	const [hide, sethide] = useState(true);
	const { t } = useTranslation();
	const iconClass = useMemo(
		() => ({
			className: 'text-gray-400 dark:text-indigo-600',
		}),
		[]
	);

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
					className='w-full rounded-lg bg-gray-50 dark:bg-black  focus:border-indigo-600 text-gray-500 dark:text-white p-4 pr-12 text-sm shadow-sm'
					placeholder={PLACEHOLDER}
				/>

				<span className='absolute inset-y-0 right-4 inline-flex items-center'>
					<button type='button' onClick={onHandleClick}>
						<IconContext.Provider value={iconClass}>
							{hide ? <FiEyeOff /> : <FiEye />}
						</IconContext.Provider>
					</button>
				</span>
			</div>
		</div>
	);
}

InputPassword.propTypes = {
	isConfirmPassword: PropTypes.bool,
	password: PropTypes.string.isRequired,
	onChangePassword: PropTypes.func.isRequired,
};

export default InputPassword;
