import React from 'react';
import BottomNavigation from './Components/BottomNavigation';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			{children}

			<BottomNavigation />
		</React.Fragment>
	);
};

export default Layout;
