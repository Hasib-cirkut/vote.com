import React from 'react';

const ThreadCard = ({ title, desc, loves, genre }) => {
	return (
		<div id="body" className="px-4 pt-4">
			<div
				id="ThreadCard"
				className="flex-row px-4 py-2 border-2 rounded cursor-pointer border-gray-600 hover:border-gray-400 hover:cursor-pointer transition"
			>
				<h4 className="text-xl font-medium">{title}</h4>
				<p className="text-sm font-thin">{desc}</p>

				<div className="flex pt-5 justify-between">
					<div className="flex space-x-1 items-center">
						<p className="font-thin">{loves}</p>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path
								fillRule="evenodd"
								d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
								clipRule="evenodd"
							/>
						</svg>
					</div>

					<p className="text-red-500">{genre}</p>
				</div>
			</div>
		</div>
	);
};

export default ThreadCard;
