import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FiPlus } from 'react-icons/fi';

function AddButton() {
	const reactIconStyling = useMemo(() => ({ size: '20px' }));
	const navigate = useNavigate();

	return (
		<div className='fixed bottom-0 right-0 flex   text-white  m-10 p-4 '>
			<button type='button' className='p-4 mx-2 rounded-full bg-blue-400'>
				<IconContext.Provider value={reactIconStyling}>
					<FiPlus onClick={() => navigate('/create')} />
				</IconContext.Provider>
			</button>
		</div>
	);
}

export default AddButton;
