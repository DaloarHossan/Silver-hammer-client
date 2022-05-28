import React from 'react';

const Help = () => {
	return (
		<div className='my-24 lg:mx-12'>
			<div><h1 className='text-4xl text-center font-bold'>NEED HELP?</h1></div>
			<div class="divider"></div> 
			<div className='grid md:grid-cols-3'>
				<div>
					<h1 className='text-xl font-bold'>1-88-634-1189</h1>
					<h2>Mon-Fri,8.00am-4:30pm</h2>
				</div>
				<div >
					<h1 className='text-xl font-bold'>Live Chat</h1>
					<h2>Mon-Fri,8.00am-4:30pm</h2>

				</div>
				<div>
					<h1 className='text-xl font-bold'>Email us</h1>
					<h2>We will respond as quickly as we can</h2>

				</div>
				

			</div>
			<div class="divider"></div> 
		</div>
	);
};

export default Help;