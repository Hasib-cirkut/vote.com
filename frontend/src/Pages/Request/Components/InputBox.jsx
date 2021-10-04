import React, { useState, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import axios from 'axios';

const type = [ { name: 'Thread', val: 'thread' }, { name: 'Vote Post', val: 'votePost' } ];

const InputBox = ({ setType }) => {
	const [ title, setTitle ] = useState('');
	const [ desc, setDesc ] = useState('');
	const [ imageUrl, setImageUrl ] = useState(null);

	const [ selected, setSelected ] = useState(type[0]);

	const [ showBottomMsg, setBottomMsg ] = useState(false);

	/// Error States

	const [ showTitleError, setShowTitleError ] = useState(false);
	const [ showDescError, setShowDescError ] = useState(false);

	useEffect(
		() => {
			console.log(imageUrl);
		},
		[ imageUrl ]
	);

	useEffect(
		() => {
			setType((prev) => selected.name);
		},
		[ selected ]
	);

	async function handleSubmit(e) {
		e.preventDefault();

		//handle Form error

		if (title === '') {
			setShowTitleError((prev) => true);
			return;
		}

		if (desc === '') {
			setShowDescError((prev) => true);
			return;
		}

		const user = JSON.parse(localStorage.getItem('user'));
		const token = localStorage.getItem('token');

		if (selected.val === 'votePost') {
			let data = new FormData();

			data.append('title', title);
			data.append('desc', desc);
			data.append('image', imageUrl);

			let returnVal = await axios.post(`${process.env.REACT_APP_LOCAL_API_URL}/request/votePost`, data);

			console.log(returnVal);
		} else {
			//TODO:
			//handle thread request
			//This is more easier as threads doesn't have any images

			let payload = {
				username: user.username,
				title,
				desc,
				token
			};

			let response = await axios.post(`${process.env.REACT_APP_LOCAL_API_URL}/request/thread`, payload);

			if (response.data.code === 'accepted') {
				//Show bottom message
				setBottomMsg((prev) => true);

				//reset the state
				setTitle((prev) => '');
				setDesc((prev) => '');

				//hide the bottom Message after 5s

				setTimeout(() => {
					setBottomMsg((prev) => false);
				}, 5000);
			} else {
				console.log('request denied. try again later');
			}
		}
	}

	function renderDropdown() {
		return (
			<div className="w-72">
				<Listbox value={selected} onChange={setSelected}>
					<div className="relative mt-1">
						<Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-gray-900 rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
							<span className="block truncate">{selected.name}</span>
							<span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
								<SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
							</span>
						</Listbox.Button>
						<Transition
							as={React.Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-gray-900 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
								{type.map((person, personIdx) => (
									<Listbox.Option
										key={personIdx}
										className={({ active }) =>
											`${active ? 'text-black bg-yellow-200 ' : 'text-gray-200 '}
                          					cursor-default select-none relative py-2 pl-10 pr-4`}
										value={person}
									>
										{({ selected, active }) => (
											<React.Fragment>
												<span
													className={`${selected
														? 'font-medium'
														: 'font-normal'} block truncate`}
												>
													{person.name}
												</span>
												{selected ? (
													<span
														className={`${active ? 'text-black' : 'text-gray-200'}
                                absolute inset-y-0 left-0 flex items-center pl-3`}
													>
														<CheckIcon className="w-5 h-5" aria-hidden="true" />
													</span>
												) : null}
											</React.Fragment>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</Listbox>
			</div>
		);
	}

	return (
		<div id="body" className="grid grid-rows-2 h-full">
			<div id="form" className="space-y-4">
				<div id="title" className="flex flex-col my-2 py-2 text-center w-full">
					<div className="rounded flex flex-row items-center">
						<input
							type="text"
							name="title"
							className="input_box"
							placeholder="Title"
							value={title}
							onChange={(e) => {
								setTitle(e.target.value);
							}}
						/>
					</div>
				</div>
				{showTitleError && <span className="text-sm text-red-400 font-mono">Title is required.</span>}

				<div id="desc" className="flex flex-col text-center">
					<div className="rounded flex flex-row items-center">
						<textarea
							rows="4"
							cols="50"
							className="input_box h-auto py-2"
							value={desc}
							onChange={(e) => {
								setDesc(e.target.value);
							}}
						/>
					</div>
				</div>

				{showDescError && <span className="text-sm text-red-400 font-mono">Description is required.</span>}

				{renderDropdown()}

				{selected.val === 'votePost' && (
					<div id="imageUpload">
						<input
							type="file"
							onChange={(event) => {
								setImageUrl(() => {
									return event.target.files[0];
								});
							}}
						/>
					</div>
				)}

				<div>
					{imageUrl && (
						<img src={URL.createObjectURL(imageUrl)} alt="image" className="object-contain h-32 w-32" />
					)}
				</div>
			</div>

			<div className="space-y-10">
				<div className="btn_white h-11 transition hover:bg-green-300" onClick={handleSubmit}>
					Submit Request
				</div>

				{showBottomMsg && (
					<div className={`border rounded-sm px-4 py-2 text-xl font-md text-gray-300 text-center`}>
						<p>
							Request for {selected.name} has been accepted. You'll be notified when your request is added
							to the main list. Thank you for you patience.
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default InputBox;
