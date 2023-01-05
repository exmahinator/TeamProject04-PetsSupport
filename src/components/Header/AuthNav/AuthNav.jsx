import React from 'react';
import { Link } from 'react-router-dom';
import style from './AuthNav.module.scss';

export const AuthNav = () => {
	return (
		<div className={style.btn}>
			<div className={style.login}>
				<Link className={style.linkLogo}>Login</Link>
			</div>
			<div className={style.registration}>
				<Link className={style.linkRegistration}>Registration</Link>
			</div>
		</div>
	);
};
