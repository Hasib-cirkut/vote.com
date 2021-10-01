import React, { useState, useEffect } from 'react';

import InputBox from './Components/InputBox';

const Request = () => {
	const [ navInfo, setNavInfo ] = useState('request');

	useEffect(() => {
		localStorage.setItem('navInfo', navInfo);
	}, []);

	return (
		<React.Fragment>
			<div className="items-center h-screen max-w-lg w-full mx-auto px-2">
				<div id="type" className="bg-red-400 text-white py-2 px-3 rounded w-full text-center">
					<span>You have requested for a thread post</span>
				</div>

				<InputBox />
			</div>
		</React.Fragment>
	);
};

export default Request;
