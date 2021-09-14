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
				</div>

				<div id="right" className="flex flex-col justify-between items-center">
					<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512">
						<path d="M256 0C114.833 0 0 114.833 0 256s114.833 256 256 256 256-114.853 256-256S397.167 0 256 0zm0 472.341c-119.275 0-216.341-97.046-216.341-216.341S136.725 39.659 256 39.659c119.295 0 216.341 97.046 216.341 216.341S375.275 472.341 256 472.341z" />
						<path d="m369.227 283.365-99.148-99.148c-7.734-7.694-20.226-7.694-27.96 0l-99.148 99.148c-6.365 7.416-6.365 18.382 0 25.798 7.119 8.309 19.651 9.28 27.96 2.161L256 226.256l85.267 85.069c7.734 7.694 20.226 7.694 27.96 0 7.694-7.734 7.694-20.227 0-27.96z" />
					</svg>

					<svg height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg">
						<path d="M256 512c-68.379 0-132.668-26.629-181.0195-74.9805C26.6289 388.668 0 324.379 0 256S26.629 123.332 74.9805 74.9805C123.332 26.6289 187.621 0 256 0s132.668 26.629 181.0195 74.9805C485.3711 123.332 512 187.621 512 256s-26.629 132.668-74.9805 181.0195C388.668 485.3711 324.379 512 256 512zm0-472C136.8984 40 40 136.8984 40 256s96.8984 216 216 216 216-96.8984 216-216S375.1016 40 256 40zm138.2852 182L366 193.7148l-110 110-110-110L117.7148 222 256 360.2852zm0 0" />
					</svg>
				</div>
			</div>
		</div>
	);
};

export default VoteCard;
