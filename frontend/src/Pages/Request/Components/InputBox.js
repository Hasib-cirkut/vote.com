import React from 'react';

const InputBox = () => {
	return (
		<div id="body">
			<div id="form">
				<div id="title" className="flex flex-col my-2 py-2 text-center w-full">
					<div className="rounded flex flex-row items-center">
						<input type="text" name="title" className="input_box" placeholder="Title" />
					</div>
				</div>

				<div id="desc" className="flex flex-col text-center">
					<div className="rounded flex flex-row items-center">
						<textarea rows="4" cols="50" className="input_box h-auto py-2" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default InputBox;
