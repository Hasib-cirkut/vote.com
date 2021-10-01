import React from 'react';

import BottomNavigation from '../../Components/BottomNavigation';

import VoteCard from './Components/VoteCard';

const Post = () => {
	return (
		<React.Fragment>
			<div id="body" className="flex-1 overflow-y-auto">
				<VoteCard />
				<VoteCard />
			</div>
		</React.Fragment>
	);
};

export default Post;
