import React, { useState, useEffect } from 'react';

import RequestCard from './Components/RequestCard';
import { Link, Redirect } from 'react-router-dom';

import axios from 'axios';

export default function Dashboard() {
	const [ threadData, setthreadData ] = useState([]);

	const [ type, setType ] = useState('thread');

	useEffect(() => {
		async function getData() {
			let response = await fetch(`${process.env.VITE_LOCAL_API_URL}/admin/threads`);

			response = await response.json();

			//response.map((item) => console.log(item));

			setthreadData((prev) => {
				return [ ...prev, ...response ];
			});

			// setData((prev) => {
			// 	return response;
			// });
		}
		getData();
	}, []);

	if (localStorage.getItem('token')) {
		return (
			<React.Fragment>
				<div className="min-h-screen overflow-x-hidden w-screen bg-black">
					<div className="p-4 flex flex-col space-y-6 bg-black mx-auto max-w-2xl">
						<div className="flex flex-row justify-around text-xl text-white">
							<h1>Dashboard</h1>

							<Link to="/">
								<span>Home</span>
							</Link>
						</div>

						<div
							id="switch"
							className="flex flex-row py-1 px-1 space-x-2 mx-auto justify-around border rounded transition"
						>
							<div
								className={`px-8 py-2 rounded-sm font-semibold cursor-pointer ${type === 'thread'
									? 'bg-white text-black'
									: 'text-white hover:bg-gray-900'}  `}
								onClick={() => {
									setType((prev) => 'thread');
								}}
							>
								<h2>threads</h2>
							</div>

							<div
								className={`px-8 py-2 rounded-sm font-semibold cursor-pointer ${type === 'votes'
									? 'bg-white text-black'
									: 'text-white hover:bg-gray-900'}  `}
								onClick={() => {
									setType((prev) => 'votes');
								}}
							>
								<h2>votes</h2>
							</div>
						</div>

						<div className="">
							<div id="requestArea" className=" space-y-4 px-2 bg-black my-10">
								{threadData.map((item) => {
									return <RequestCard {...item} key={item._id} />;
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
