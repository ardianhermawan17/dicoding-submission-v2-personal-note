import React from 'react';
import PropTypes from 'prop-types';

function Jumbotron({ title, description }) {
	return (
		<section className=' text-white'>
			<div className='mx-auto  '>
				<div className='mx-auto  text-center'>
					<h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl'>
						{title}
					</h1>

					<h4 className='mx-auto text-blue-500 mt-4 max-w-xl sm:text-xl sm:leading-relaxed'>
						{description}
					</h4>
				</div>
			</div>
		</section>
	);
}

Jumbotron.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default Jumbotron;
