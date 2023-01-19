import React from 'react';
import { useTranslation } from 'react-i18next';

function NullNote() {
	const { t } = useTranslation();
	return (
		<div className='flex justify-center align-center'>
			<h4 className='mx-auto text-blue-500 mt-4 max-w-xl sm:text-xl sm:leading-relaxed'>
				{t('Catatan kosong')}
			</h4>
		</div>
	);
}

export default NullNote;
