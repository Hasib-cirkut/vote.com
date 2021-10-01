import React from 'react';
import BottomNavigation from './Components/BottomNavigation';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<div className=" bg-black text-white h-screen flex flex-col pt-8">{children}</div>

			<BottomNavigation />
		</React.Fragment>
	);
};

export default Layout;
