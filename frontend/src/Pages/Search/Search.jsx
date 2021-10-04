import React, { useState, useEffect } from 'react';

import SearchBar from './Components/SearchBar';

const Search = () => {
	const [ navInfo, setNavInfo ] = useState('search');

	useEffect(() => {
		localStorage.setItem('navInfo', navInfo);
	}, []);
	return (
		<React.Fragment>
			<div id="body" className="flex-1 overflow-y-auto">
				<SearchBar />
			</div>
		</React.Fragment>
	);
};

export default Search;
