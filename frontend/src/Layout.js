import React from 'react';
import BottomNavigation from './Components/BottomNavigation';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<div className=" bg-blueGray-900 text-white h-screen flex flex-col pt-8">{children}</div>

			<BottomNavigation />
		</React.Fragment>
	);
};

export default Layout;
