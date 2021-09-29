import React from 'react';

const Login = () => {
	return (
		<React.Fragment>
			<div className="grid grid-rows-2 h-screen overflow-hidden bg-black text-gray-50 px-8 py-4">
				<div className="flex flex-col justify-around">
					<div className="py-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 text-gray-400 hover:cursor-pointer hover:text-yellow-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 19l-7-7m0 0l7-7m-7 7h18"
							/>
						</svg>
					</div>

					<div className="space-y-2">
						<h1 className="text-2xl font-semibold">Let's sign you in.</h1>

						<div className="">
							<p className="text-xl font-semibold text-gray-300">Welcome Back.</p>
							<p className="text-xl font-semibold text-gray-300">You have been Missed!</p>
						</div>
					</div>

					<div className="space-y-4 mt-14">
						<input
							className="w-full rounded-lg h-10 bg-gray-900 placeholder-gray-500 pl-4 font-normal text-sm focus:outline-none ring-2 ring-gray-900 focus:ring-offset-1 focus:ring-offset-sky-900 focus:ring-gray-800"
							type="text"
							placeholder="Username or Email"
						/>
						<input
							className="w-full rounded-lg h-10 bg-gray-900 placeholder-gray-500 pl-4 font-normal text-sm focus:outline-none ring-2 ring-gray-900 focus:ring-offset-1 focus:ring-offset-sky-900 focus:ring-gray-800"
							type="password"
							placeholder="Password"
						/>
					</div>
				</div>

				<div className="flex flex-col justify-end space-y-5">
					<div className="text-xs text-gray-500 text-center">
						<p>
							Don't have an account? {' '}
							<span className="text-gray-200 font-bold hover:cursor-pointer">Register</span>
						</p>
					</div>

					<div className="bg-white uppercase text-black text-xs font-bold text-center py-3 rounded-md hover:cursor-pointer">
						<p>Sign In</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Login;
