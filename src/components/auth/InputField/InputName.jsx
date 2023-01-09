import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FiUser } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { useTranslation } from 'react-i18next';

function InputName({ name, onChangeName }) {
	const { t } = useTranslation();
	const iconClass = useMemo(
		() => ({
			className: 'text-gray-400 dark:text-indigo-600',
		}),
		[]
	);
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
					className='w-full rounded-lg bg-gray-50 border border-slate-500 dark:bg-black focus:border-indigo-600 text-gray-500 dark:text-white p-4 pr-12 text-sm shadow-sm'
					placeholder={t('Masukkan nama')}
				/>

				<span className='absolute inset-y-0 right-4 inline-flex items-center'>
					<IconContext.Provider value={iconClass}>
						<FiUser />
					</IconContext.Provider>
				</span>
			</div>
		</div>
	);
}

InputName.propTypes = {
	name: PropTypes.string.isRequired,
	onChangeName: PropTypes.func.isRequired,
};

export default InputName;
