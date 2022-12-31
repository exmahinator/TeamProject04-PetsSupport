import React from 'react';
import { Outlet } from 'react-router-dom/dist';

export const SharedLayout = () => {
	return (
		<>
			<header>HEADER</header>
			<Outlet />
		</>
	);
};
