import { NavLink } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';
import style from './NoticesCategories.module.scss';

const NoticesCategories = () => {
	const activ = { color: '#FFFFFF', background: '#ff6101' };
	const notActive = { color: '#111111'};

	const isLogin = useAuth();

	return (
		<ul className={style.nav}>
			<li className={style.nav__item}>
				<NavLink
					to="/notices/sell"
					className={style.nav__link}
					style={({ isActive }) => (isActive ? activ : notActive)}
				>
					sell
				</NavLink>
			</li>
			<li className={style.nav__item}>
				<NavLink
					to="/notices/lost-found"
					className={style.nav__link}
					style={({ isActive }) => (isActive ? activ : notActive)}
				>
					lost/found
				</NavLink>
			</li>
			<li className={style.nav__item}>
				<NavLink
					to="/notices/for-free"
					className={style.nav__link}
					style={({ isActive }) => (isActive ? activ : notActive)}
				>
					in good hands
				</NavLink>
			</li>
			{isLogin && (
				<>
					<li className={style.nav__item}>
						<NavLink
							to="/notices/favorite"
							className={style.nav__link}
							style={({ isActive }) => (isActive ? activ : notActive)}
						>
							favorite
						</NavLink>
					</li>
					<li className={style.nav__item}>
						<NavLink
							to="/notices/own"
							className={style.nav__link}
							style={({ isActive }) => (isActive ? activ : notActive)}
						>
							my ads
						</NavLink>
					</li>
				</>
			)}
		</ul>
	);
};

export default NoticesCategories;
