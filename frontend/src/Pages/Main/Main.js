import React from 'react';

import ThreadCard from './Components/ThreadCard';

const demoData = [
	{
		id: 1,
		title: 'Bob Dylan is the best song writer of our generation',
		desc: 'Bob Dylan is an American folk singer and song writer.',
		loves: 1343,
		genre: 'Music'
	},

	{
		id: 2,
		title: 'Metallica is the thrashiest Band out there.',
		desc: 'Metallica is an American Thrash Metal Band.',
		loves: 1219,
		genre: 'Music'
	}
];

const Main = () => {
	return (
		<React.Fragment>
			<div id="body" className="flex-1 overflow-y-auto mx-auto space-y-4">
				{demoData.map((data) => {
					return <ThreadCard {...data} key={data.id} />;
				})}
			</div>
		</React.Fragment>
	);
};

export default Main;
