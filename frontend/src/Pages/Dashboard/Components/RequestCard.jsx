import React from 'react';

export default function RequestCard({ title, desc, genre }) {
	return (
		<React.Fragment>
			<div
				id="requestCard"
				className="border-2 rounded-sm bg-black space-y-2 flex flex-col text-white px-4 py-2 text-gray-300"
			>
				<div>
					<div id="title" className="flex">
						<h4 className="">Title:</h4>

						<p className=" text-xl font-semibold px-4">{title}</p>
					</div>

					<div id="desc" className="flex">
						<h4 className="">Desc:</h4>

						<p className="px-4">{desc}</p>
					</div>

					<div id="genre" className="flex">
						<h4 className="">Genre:</h4>

						<p className="px-4">{genre}</p>
					</div>
				</div>

				<div className="flex flex-row justify-around">
					<a href="#" className="border px-4 py-1 rounded-sm text-white hover:bg-white hover:text-black">
						Approve
					</a>

					<a href="#" className="border px-4 py-1 rounded-sm text-white hover:bg-white hover:text-black">
						Deny
					</a>
				</div>
			</div>
		</React.Fragment>
	);
}
