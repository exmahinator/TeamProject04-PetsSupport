import React from 'react';
import { Link } from 'react-router-dom';
import style from './Logo.module.scss';

export const Logo = () => {
	return (
		<Link to="/" className={style.link}>
			pe<span className={style.span}>t</span>ly
		</Link>
	);
};
