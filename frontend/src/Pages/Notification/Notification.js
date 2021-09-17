import React from 'react';

import NotiCard from './Components/NotiCard';

const Notification = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col bg-indigo-50 items-center h-screen py-2 px-4">
				<NotiCard />
			</div>
		</React.Fragment>
	);
};

export default Notification;
