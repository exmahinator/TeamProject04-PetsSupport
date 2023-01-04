import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.scss';

export const Nav = () => {
	return (
		<ul className={style.menu}>
			<li className={style.item}>
				<NavLink className={style.link}>News</NavLink>
			</li>
			<li className={style.item}>
				<NavLink className={style.link}>Find pet</NavLink>
			</li>
			<li className={style.item}>
				<NavLink className={style.link}>Our friend</NavLink>
			</li>
		</ul>
	);
};
