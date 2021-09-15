import React from 'react';

const SearchBar = () => {
	return (
		<React.Fragment>
			<div class="flex flex-row items-center p-4">
				<div id="searchBar" class="flex-1 border-2 border-yellow-400 rounded-md">
					<input type="text" class="w-full focus:outline-none px-2 py-1 font-light text-base" />
				</div>
				<div id="searchBtn" class="bg-yellow-200 px-2 py-1 rounded ml-2">
					<button class="text-sm font-medium text-center">Serach</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SearchBar;
