import React from 'react';
import { Link } from 'react-router-dom';
import style from './UserNav.module.scss';
import { ReactComponent as AccountCircle } from 'shared/images/AccountCircle/AccountCircle.svg';

export const UserNav = () => {
	return (
		<div className={style.container}>
			<AccountCircle
				className={style.svg}
				width="28px"
				heigth="28px"
			></AccountCircle>
			<Link to="/user" className={style.link}>
				Account
			</Link>
		</div>
	);
};
