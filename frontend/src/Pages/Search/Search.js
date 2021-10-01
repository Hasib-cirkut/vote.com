import React from 'react';

import SearchBar from './Components/SearchBar';

const Search = () => {
	return (
		<React.Fragment>
			<div id="body" className="flex-1 overflow-y-auto">
				<SearchBar />
			</div>
		</React.Fragment>
	);
};

export default Search;
