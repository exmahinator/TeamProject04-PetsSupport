// import { red } from '@mui/material/colors';
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.scss';

export const Nav = () => {
	const active = { color: '#F59256', 'text-decoration': 'underline' };
	const noActive = { color: '#181C27' };
	return (
		<ul className={style.menu}>
			<li className={style.item}>
				<NavLink
					to="/news"
					className={style.link}
					style={({ isActive }) => (isActive ? active : noActive)}
				>
					News
				</NavLink>
			</li>
			<li className={style.item}>
				<NavLink
					to="/notices"
					className={style.link}
					style={({ isActive }) => (isActive ? active : noActive)}
				>
					Find pet
				</NavLink>
			</li>
			<li className={style.item}>
				<NavLink
					to="/friends"
					className={style.link}
					style={({ isActive }) => (isActive ? active : noActive)}
				>
					Our friend
				</NavLink>
			</li>
		</ul>
	);
};
