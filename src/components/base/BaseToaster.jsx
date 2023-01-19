import React from 'react';
import { Toaster } from 'react-hot-toast';

function BaseToaster() {
	return (
		// <Toaster
		// 	toastOptions={{
		// 		className: 'bg-gray-100 dark:bg-neutral-800',
		// 		duration: 50000,
		// 	}}
		// >
		// 	{(t) => (
		// 		<>
		// 			<ToastIcon toast={t} />
		// 			<p className='px-2'>{resolveValue(t.message)}</p>
		// 		</>
		// 	)}
		// </Toaster>
		<Toaster />
	);
}

export default BaseToaster;
