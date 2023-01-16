import { NavLink } from 'react-router-dom';
import { navLinks } from '../../../shared/constants/navLinks';

import style from './Nav.module.scss';

export const Nav = ({ setIsOpen }) => {
	const active = { color: '#F59256', textDecoration: 'underline' };
	const noActive = {};

	return (
		<ul className={style.menu}>
			{navLinks.map((el, index) => (
				<li key={index} className={style.item}>
					<NavLink
						to={el.path}
						className={style.link}
						style={({ isActive }) => (isActive ? active : noActive)}
						onClick={() => setIsOpen(false)}
					>
						{el.text}
					</NavLink>
				</li>
			))}
		</ul>
	);
};
