import React from 'react';
import { useLocale } from '../../context/LocaleContext';

function TransButton() {
	const { locale, toggleLocale } = useLocale();

	return (
		<button
			type='button'
			onClick={() => toggleLocale()}
			className='text-lg uppercase py-2 md:px-4 dark:text-white'
		>
			{locale}
		</button>
	);
}

export default TransButton;
