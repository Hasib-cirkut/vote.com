import React from 'react';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const BottomNavigation = () => {
	const [ selected, setSelected ] = useState();

	useEffect(
		() => {
			setSelected(() => {
				return localStorage['navInfo'];
			});
		},
		[ selected ]
	);

	return (
		<React.Fragment>
			<div>
				<section className="block fixed inset-x-0 bottom-0 z-10 bg-blueGray-50 shadow h-auto w-full max-w-sm mx-auto rounded sm:mb-4 sm:max-w-md">
					<div id="tabs" className="flex flex-row justify-around items-center h-full py-4">
						<Link to="/">
							<div
								onClick={() => setSelected('home')}
								id="home"
								className={`flex flex-row justify-center items-center 
						${selected === 'home' ? 'py-1 px-4 bg-blue-200 rounded-full text-black' : ''}`}
							>
								<div>
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
										class="feather feather-home"
									>
										<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
										<polyline points="9 22 9 12 15 12 15 22" />
									</svg>
								</div>

								<span className={`${selected === 'home' ? 'ml-2 font-medium' : 'hidden'}`}>Home</span>
							</div>
						</Link>

						<Link to="/search">
							<div
								onClick={() => setSelected('search')}
								id="search"
								className={`flex flex-row justify-center items-center ${selected === 'search'
									? 'py-1 px-4 bg-yellow-200 rounded-full text-black'
									: ''}`}
							>
								<div>
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
										class="feather feather-search"
									>
										<circle cx="11" cy="11" r="8" />
										<line x1="21" y1="21" x2="16.65" y2="16.65" />
									</svg>
								</div>

								<span className={`${selected === 'search' ? 'ml-2 font-medium' : 'hidden'}`}>
									Search
								</span>
							</div>
						</Link>

						<Link to="/request">
							<div
								onClick={() => setSelected('request')}
								id="request"
								className={`flex flex-row justify-center items-center ${selected === 'request'
									? 'py-1 px-4 bg-pink-300 rounded-full text-black'
									: ''}`}
							>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="feather feather-plus-circle"
									>
										<circle cx="12" cy="12" r="10" />
										<line x1="12" y1="8" x2="12" y2="16" />
										<line x1="8" y1="12" x2="16" y2="12" />
									</svg>
								</div>

								<span className={`${selected === 'request' ? 'ml-2 font-medium' : 'hidden'}`}>
									Request
								</span>
							</div>
						</Link>

						<Link to="/notification">
							<div
								onClick={() => setSelected('notification')}
								id="notification"
								className={`flex flex-row justify-center items-center ${selected === 'notification'
									? 'py-1 px-4 bg-green-200 rounded-full text-black'
									: ''}`}
							>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="feather feather-bell"
									>
										<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
										<path d="M13.73 21a2 2 0 0 1-3.46 0" />
									</svg>
								</div>

								<span className={`${selected === 'notification' ? 'ml-2 font-medium' : 'hidden'}`}>
									Notification
								</span>
							</div>
						</Link>

						<Link to="/settings">
							<div
								onClick={() => setSelected('settings')}
								id="settings"
								className={`flex flex-row justify-center items-center ${selected === 'settings'
									? 'py-1 px-4 bg-blue-400 rounded-full text-black'
									: ''}`}
							>
								<div>
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
										class="feather feather-sliders"
									>
										<line x1="4" y1="21" x2="4" y2="14" />
										<line x1="4" y1="10" x2="4" y2="3" />
										<line x1="12" y1="21" x2="12" y2="12" />
										<line x1="12" y1="8" x2="12" y2="3" />
										<line x1="20" y1="21" x2="20" y2="16" />
										<line x1="20" y1="12" x2="20" y2="3" />
										<line x1="1" y1="14" x2="7" y2="14" />
										<line x1="9" y1="8" x2="15" y2="8" />
										<line x1="17" y1="16" x2="23" y2="16" />
									</svg>
								</div>

								<span className={`${selected === 'settings' ? 'ml-2 font-medium' : 'hidden'}`}>
									Settings
								</span>
							</div>
						</Link>
					</div>
				</section>
			</div>
		</React.Fragment>
	);
};

export default BottomNavigation;
