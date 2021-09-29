import React from 'react';

const InputBox = () => {
	return (
		<div id="body">
			<div id="form">
				<div id="title" className="flex flex-col my-2 py-2 text-center w-full">
					<label for="title">Title</label>
					<div className="border-2 border-red-200 rounded flex flex-row items-center">
						<input
							type="text"
							name="title"
							className="flex-1 px-4 py-1 bg-indigo-50 rounded-md w-full focus:outline-none"
						/>
						<div className="bg-red-200 py-1 px-1 mr-1 rounded-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="12"
								height="12"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="feather feather-x"
							>
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
						</div>
					</div>
				</div>

				<div id="desc" className="flex flex-col text-center">
					<label for="desc">Description</label>
					<div className="border-2 border-red-200 rounded flex flex-row items-center">
						<input
							type="text"
							name="desc"
							className="flex-1 px-4 py-1 bg-indigo-50 h-12 rounded-md w-full focus:outline-none"
						/>
						<div className="bg-red-200 py-1 px-1 mr-1 rounded-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="12"
								height="12"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="feather feather-x"
							>
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InputBox;
