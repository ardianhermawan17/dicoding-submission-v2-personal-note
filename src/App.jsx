import React from 'react';
import Header from './components/Header';
import Routes from './Routes';

function App() {
	return (
		<div className='bg-gray-100 pb-24 min-h-screen'>
			<Header />
			<main>
				<Routes />
			</main>
		</div>
	);
}

export default App;
