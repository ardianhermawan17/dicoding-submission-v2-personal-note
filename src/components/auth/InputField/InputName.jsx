import React from 'react';
import { FiUser } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

function InputName({ name, onChangeName }) {
	const { t } = useTranslation();
	return (
		<div>
			<label htmlFor='name' className='sr-only'>
				{t('name')}
			</label>

			<div className='relative'>
				<input
					type='name'
					name='name'
					defaultValue={name}
					onChange={onChangeName}
					className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
					placeholder={t('Masukkan nama')}
				/>

				<span className='absolute inset-y-0 right-4 inline-flex items-center'>
					<FiUser />
				</span>
			</div>
		</div>
	);
}

export default InputName;
