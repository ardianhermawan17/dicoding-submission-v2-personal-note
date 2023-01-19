/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line object-curly-newline
function FormField({
	type,
	name,
	value,
	maxLength = 12,
	onHandleChange,
	placeholder,
	className,
}) {
	const [wordCount, setWordCount] = useState(0);
	const { t } = useTranslation();

	function onWordChange(event) {
		if (event.key === 'Backspace' && wordCount <= maxLength) {
			setWordCount(wordCount - 1);
		} else if (wordCount < maxLength) setWordCount(wordCount + 1);
	}

	return (
		<div className='flex flex-col w-full'>
			<h4 className='text-gray-700 dark:text-white'>
				{t('Sisa karakter')} : {maxLength - wordCount}{' '}
			</h4>
			<input
				type={type}
				id={name}
				value={value}
				maxLength={maxLength}
				onChange={(event) => onHandleChange(event)}
				onKeyDown={onWordChange}
				name={name}
				placeholder={placeholder}
				className={`${className} p-3 py-4 text-lg roboto-regular bg-gray-50 dark:bg-black  focus:border-indigo-600 text-gray-500 dark:text-white border-2 rounded-lg focus:outline-none m-3 shadow-lg placeholder:font-hand placeholder:text-2xl`}
			/>
		</div>
	);
}

FormField.propTypes = {
	type: PropTypes.string.isRequired,
	maxLength: PropTypes.number,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	onHandleChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export default FormField;
