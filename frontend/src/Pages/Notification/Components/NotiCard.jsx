import React from 'react';

const NotiCard = () => {
	return (
		<div className="flex flex-row items-center bg-green-100 my-2">
			<div id="left" className="p-2 bg-green-400 h-full" />

			<div id="right" className="flex-1 px-2 py-2">
				<p className="text-base font-medium text-black">
					Your request for <span className="text-blue-600 cursor-pointer">Best Metallica Album</span> has been
					accepted.
				</p>
			</div>
		</div>
	);
};

export default NotiCard;
