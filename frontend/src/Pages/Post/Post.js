import React from 'react';

import BottomNavigation from '../../Components/BottomNavigation';

import VoteCard from './Components/VoteCard';

const Post = () => {
	return (
		<React.Fragment>
			<div className="bg-indigo-50 h-screen flex flex-col">
				<div id="body" className="flex-1 overflow-y-auto">
					<VoteCard />
					<VoteCard />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Post;
