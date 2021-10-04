import React from 'react';
import BottomNavigation from './Components/BottomNavigation.jsx';

import { Redirect } from 'react-router-dom';

const Layout = ({ children }) => {
	if (localStorage.getItem('token')) {
		return (
			<React.Fragment>
				<div className=" bg-black text-white h-screen flex flex-col pt-8">{children}</div>

				<BottomNavigation />
			</React.Fragment>
		);
	} else {
		return <Redirect to="/login" />;
	}
};

export default Layout;
