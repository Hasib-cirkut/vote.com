import React from 'react';

import InputBox from './Components/InputBox';

const Request = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col bg-indigo-50 items-center h-screen py-4 px-8">
				<div id="type" className="bg-red-400 text-white py-2 px-3 rounded w-full text-center">
					<span>You have requested for a thread post</span>
				</div>

				<InputBox />
			</div>
		</React.Fragment>
	);
};

export default Request;
