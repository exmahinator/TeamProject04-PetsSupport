import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.scss';

export const Nav = ({ setIsOpen}) => {
	const active = { color: '#F59256', textDecoration: 'underline' };
	const noActive = {};
	return (
		<ul className={style.menu}>
			<li className={style.item}>
				<NavLink
					to="/news"
					className={style.link}
					style={({ isActive }) => (isActive ? active : noActive)}
					onClick={()=>setIsOpen(false)}
				>
					News
				</NavLink>
			</li>
			<li className={style.item}>
				<NavLink
					to="/notices/sell"
					className={style.link}
					style={({ isActive }) => (isActive ? active : noActive)}
					onClick={()=>setIsOpen(false)}
				>
					Find pet
				</NavLink>
			</li>
			<li className={style.item}>
				<NavLink
					to="/friends"
					className={style.link}
					style={({ isActive }) => (isActive ? active : noActive)}
					onClick={()=>setIsOpen(false)}
				>
					Our friend
				</NavLink>
			</li>
		</ul>
	);
};
