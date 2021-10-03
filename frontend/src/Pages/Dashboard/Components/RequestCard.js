import React from 'react';

export default function RequestCard({ title, desc, genre }) {
	return (
		<React.Fragment>
			<div id="requestCard" className="border-2 bg-black space-y-2 flex flex-col text-white px-4 py-2">
				<div id="title" className="flex">
					<h4 className="">Title:</h4>

					<p className="ml-4">{title}</p>
				</div>

				<div id="desc" className="flex">
					<h4 className="">Desc:</h4>

					<p className="ml-4">{desc}</p>
				</div>

				<div id="genre" className="flex">
					<h4 className="">Genre:</h4>

					<p className="ml-4">{genre}</p>
				</div>

				<div className="flex flex-row justify-around">
					<a href="#" className="bg-green-200 px-4 py-1 rounded-sm text-black">
						Approve
					</a>

					<a href="#" className="bg-red-200 px-4 py-1 rounded-sm text-black">
						Deny
					</a>
				</div>
			</div>
		</React.Fragment>
	);
}
