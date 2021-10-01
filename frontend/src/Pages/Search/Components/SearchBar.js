import React from 'react';

const SearchBar = () => {
	return (
		<React.Fragment>
			<div class="flex flex-row items-center p-4 max-w-lg mx-auto">
				<div id="searchBar" class="flex-1  rounded">
					<input type="text" placeholder="Search for threads." class="input_box" />
				</div>
				<div id="searchBtn" class="rounded ml-2">
					<button class="btn_white px-4">Search</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SearchBar;
