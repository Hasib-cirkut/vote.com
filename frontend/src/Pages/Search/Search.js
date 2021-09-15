import React from 'react';

import SearchBar from './Components/SearchBar';

const Search = () => {
	return (
		<React.Fragment>
			<div className="bg-indigo-50 h-screen flex flex-col">
				<div id="body" className="flex-1 overflow-y-auto">
					<SearchBar />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Search;
