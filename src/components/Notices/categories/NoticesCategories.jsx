import { NavLink } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';
import { categoryLinks } from '../../../shared/constants/categoryLinks';

import style from './NoticesCategories.module.scss';

export const NoticesCategories = () => {
	const activ = {
		color: '#FFFFFF',
		background: '#F59256',
		borderColor: 'transparent',
	};
	const notActive = { color: '#111111' };

	const isLogin = useAuth();

	return (
		<ul className={style.nav}>
			{categoryLinks.map((el, index) => {
				if (!isLogin && !el.private) {
					return (
						<li key={index} className={style.nav__item}>
							<NavLink
								to={el.path}
								className={style.nav__link}
								style={({ isActive }) => (isActive ? activ : notActive)}
							>
								{el.text}
							</NavLink>
						</li>
					);
				}
				if (isLogin) {
					return (
						<li key={index} className={style.nav__item}>
							<NavLink
								to={el.path}
								className={style.nav__link}
								style={({ isActive }) => (isActive ? activ : notActive)}
							>
								{el.text}
							</NavLink>
						</li>
					);
				}
				return '';
			})}
		</ul>
	);
};
