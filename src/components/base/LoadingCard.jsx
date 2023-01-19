import React from 'react';

function LoadingCard() {
	return (
		<div className='flex items-center justify-center space-x-2 animate-bounce pt-20'>
			<div className='w-8 h-8 bg-blue-400 rounded-full' />
			<div className='w-8 h-8 bg-green-400 rounded-full' />
			<div className='w-8 h-8 dark:bg-dark bg-white rounded-full' />
		</div>
	);
}

export default LoadingCard;
