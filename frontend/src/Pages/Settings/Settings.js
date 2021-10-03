import { useState, useEffect } from 'react';

import { Link, Redirect } from 'react-router-dom';

export default function Settings() {
	const [ themeSwitch, setThemeSwitch ] = useState(localStorage['theme']);

	const [ render, setRender ] = useState(false);

	useEffect(
		() => {
			localStorage.setItem('navInfo', 'settings');

			localStorage.setItem('theme', themeSwitch);
		},
		[ themeSwitch ]
	);

	function handleLogout() {
		//get the current theme before flushing the localstorage
		const currTheme = localStorage.getItem('theme');

		//clear localstorage
		localStorage.clear();

		localStorage.setItem('theme', currTheme);

		//This is done to re-render the component
		setRender((prev) => !prev);
	}

	if (localStorage.getItem('token')) {
		return (
			<main className="w-screen h-screen bg-black overflow-hidden text-gray-100">
				<div className="grid grid-rows-6 h-full p-4 max-w-md mx-auto">
					<div className="flex items-center justify-between transition-colors">
						<div className="flex items-center space-x-3">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
							<div className="text-xl">
								<h2>Adib Hasib</h2>
							</div>
						</div>

						<div className="cursor-pointer transition-colors duration-400" onClick={handleLogout}>
							<div className="flex items-end space-x-3 bg-gray-900 hover:bg-white hover:text-black px-2 py-1 rounded-sm">
								<span>Logout</span>
							</div>
						</div>
					</div>

					<div>
						<h4 className="text-xl">Theme</h4>

						<div className="h-full flex flex-col justify-center">
							<div className="flex flex-row py-1 px-1 cursor-pointer space-x-2 mx-auto justify-around border rounded transition">
								<div
									onClick={() => {
										setThemeSwitch((prev) => 'dark');
									}}
									className={`px-8 py-2 ${themeSwitch === 'dark'
										? 'bg-white text-black rounded-sm'
										: ''}`}
								>
									Dark
								</div>
								<div
									onClick={() => {
										setThemeSwitch((prev) => 'light');
									}}
									className={`px-8 py-2 ${themeSwitch === 'light'
										? 'bg-white text-black rounded-sm'
										: ''}`}
								>
									Light
								</div>
							</div>
						</div>
					</div>

					<div className="row-span-4 text-xl space-y-6">
						<h4>User</h4>

						<div className="flex flex-col">
							<Link to="/dashboard">
								<div className="flex flex-row space-x-4 hover:bg-gray-800 px-4 py-2 rounded cursor-pointer">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
											/>
										</svg>
									</div>
									<h3>Dashboard</h3>
								</div>
							</Link>

							<div className="flex flex-row space-x-4 hover:bg-gray-800 px-4 py-2 rounded cursor-pointer">
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
										/>
									</svg>
								</div>
								<h3>Notifications</h3>
							</div>

							<div className="flex flex-row space-x-4 hover:bg-gray-800 px-4 py-2 rounded cursor-pointer">
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
										/>
									</svg>
								</div>
								<h3>Settings</h3>
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	} else {
		return <Redirect to="/login" />;
	}
}
