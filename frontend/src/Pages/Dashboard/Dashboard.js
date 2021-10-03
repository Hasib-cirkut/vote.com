import React from 'react';

import RequestCard from './Components/RequestCard';
import { Link, Redirect } from 'react-router-dom';

const demoData = [
	{
		id: 1,
		title: 'Best Mohiner ghoraguli Song.',
		desc: "মহীনের ঘোড়াগুলি was a Kolkata based band which was active during 1970's.",
		genre: 'Music'
	},

	{
		id: 2,
		title: 'Best Artcell Song',
		desc: "Artcell is a Bangladeshi Progressive Rock Band which started it's journey in early 2000",
		genre: 'Music'
	}
];

export default function Dashboard() {
	if (localStorage.getItem('token')) {
		return (
			<React.Fragment>
				<div className="h-screen w-screen overflow-y-hidden bg-black">
					<div className="p-4 flex flex-col space-y-6 bg-black max-w-md mx-auto">
						<div className="flex flex-row justify-around text-xl text-white">
							<h1>Dashboard</h1>

							<Link to="/">
								<span>Home</span>
							</Link>
						</div>

						<div
							id="switch"
							className="flex flex-row py-1 px-1 cursor-pointer space-x-2 mx-auto justify-around border rounded transition"
						>
							<div className="px-8 py-2 bg-white text-black rounded-sm">
								<h2>threads</h2>
							</div>

							<div className="px-8 py-2">
								<h2 className="text-white rounded-sm">votes</h2>
							</div>
						</div>

						<div className="h-screen">
							<div id="requestArea" className="max-h-96 space-y-4 px-2 overflow-y-auto bg-black my-10">
								{demoData.map((data) => {
									return <RequestCard {...data} key={data.id} />;
								})}
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	} else {
		return <Redirect to="/login" />;
	}
}
