import React from 'react';
import { Outlet } from 'react-router-dom/dist';
import { Header } from './../Header/Header';
// import style from './SharedLayout.module.scss';

export const SharedLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};
