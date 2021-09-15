import React from 'react';

const VoteCard = () => {
	return (
		<div id="body" className="px-4 pt-4">
			<div id="ThreadCard" className="flex px-4 py-2 border-2 rounded border-gray-500">
				<div id="left" className="flex-1 pr-4">
					<h4 className="text-xl font-serif font-medium mb-2">Blonde on Blonde</h4>

					<p className="text-sm font-thin">
						Blonde on Blonde was released on 1966. It contains songs like Just Like a Women, I want you.
					</p>

					<span>0 votes</span>
				</div>

				<div id="right" className="flex flex-col justify-between items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-arrow-up-circle"
					>
						<circle cx="12" cy="12" r="10" />
						<polyline points="16 12 12 8 8 12" />
						<line x1="12" y1="16" x2="12" y2="8" />
					</svg>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-arrow-down-circle"
					>
						<circle cx="12" cy="12" r="10" />
						<polyline points="8 12 12 16 16 12" />
						<line x1="12" y1="8" x2="12" y2="16" />
					</svg>
				</div>
			</div>
		</div>
	);
};

export default VoteCard;
