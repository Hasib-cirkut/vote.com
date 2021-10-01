import React from 'react';

import { useState, useEffect } from 'react';

import NotiCard from './Components/NotiCard';

const Notification = () => {
	const [ navInfo, setNavInfo ] = useState('notification');

	useEffect(() => {
		localStorage.setItem('navInfo', navInfo);
	}, []);

	return (
		<React.Fragment>
			<div className="flex flex-col mx-auto">
				<NotiCard />
			</div>
		</React.Fragment>
	);
};

export default Notification;
