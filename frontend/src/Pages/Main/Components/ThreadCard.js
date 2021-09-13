import React from 'react';

const ThreadCard = () => {
	return (
		<div id="body" className="flex-1 overflow-y-auto px-4 pt-4">
			<div id="ThreadCard" className="flex-row px-4 py-2 border-2 rounded border-gray-500">
				<h4 className="text-xl font-serif font-medium">The Best Album of Bob Dylan</h4>
				<p className="text-sm font-thin">Bob Dylan is the greatest song writer of our generation.</p>

				<div className="flex pt-5 justify-between">
					<p className="font-thin">
						1245 <span className="text-green-500">upvotes</span>
					</p>
					<p className="text-red-500">Music</p>
				</div>
			</div>
		</div>
	);
};

export default ThreadCard;
