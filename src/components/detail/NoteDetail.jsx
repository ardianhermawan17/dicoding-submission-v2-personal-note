/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FiArchive, FiBookOpen } from 'react-icons/fi';
import NoteDetailButton from './NoteDetailButton';
import { showFormattedDate } from '../../utils/index';

function NoteDetail({ id, title, body, archived, createdAt }) {
	const reactIconStyling = useMemo(() => ({ size: '2rem' }));
	return (
		<section>
			<div className=' max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16'>
					<div className='mx-auto max-w-lg text-center lg:mx-0 lg:text-left'>
						<h2 className='text-3xl font-bold dark:text-sky-400 sm:text-4xl'>
							{title}
						</h2>
						<div className='flex flex-row items-center'>
							<h2 className='m-2 font-bold dark:text-white'>
								{showFormattedDate(createdAt)}
							</h2>
							<div className='my-2'>
								<IconContext.Provider value={reactIconStyling}>
									{archived ? (
										<div className='text-red-500'>
											<FiArchive />
										</div>
									) : (
										<div className='text-blue-500'>
											<FiBookOpen />
										</div>
									)}
								</IconContext.Provider>
							</div>
						</div>

						<p className='mt-4 text-gray-600 dark:text-white'>{body}</p>

						<NoteDetailButton id={id} archived={archived} />
					</div>
				</div>
			</div>
		</section>
	);
}

NoteDetail.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	archived: PropTypes.bool.isRequired,
	createdAt: PropTypes.string.isRequired,
};

export default NoteDetail;
