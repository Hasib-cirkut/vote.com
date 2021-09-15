import React from 'react';

import ThreadCard from './Components/ThreadCard';
import BottomNavigation from '../../Components/BottomNavigation';

const Main = () => {
	return (
		<React.Fragment>
			<div className="bg-indigo-50 h-screen flex flex-col">
				<div id="body" className="flex-1 overflow-y-auto">
					<ThreadCard />
					<ThreadCard />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Main;
