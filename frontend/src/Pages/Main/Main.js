import React from 'react';
import { useState, useEffect } from 'react';

import ThreadCard from './Components/ThreadCard';

const demoData = [
	{
		id: 1,
		title: 'Best Bob Dylan Album.',
		desc: 'Bob Dylan is an American folk singer and song writer.',
		loves: 1343,
		genre: 'Music'
	},

	{
		id: 2,
		title: 'Best Metallica Song.',
		desc: 'Metallica is an American Thrash Metal Band.',
		loves: 1219,
		genre: 'Music'
	}
];

const Main = () => {
	const [ navInfo, setNavInfo ] = useState('home');

	useEffect(() => {
		setNavInfo(() => 'home');
		localStorage.setItem('navInfo', navInfo);
	}, []);

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
