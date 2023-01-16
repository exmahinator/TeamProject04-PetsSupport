import { Link } from 'react-router-dom';

import style from './AuthNav.module.scss';

export const AuthNav = ({ setIsOpen }) => {
	return (
		<div className={style.btn}>
			<div className={style.login}>
				<Link
					to="/login"
					className={style.linkLogo}
					onClick={() => setIsOpen(false)}
				>
					Login
				</Link>
			</div>
			<div className={style.registration}>
				<Link
					to="/register"
					className={style.linkRegistration}
					onClick={() => setIsOpen(false)}
				>
					Registration
				</Link>
			</div>
		</div>
	);
};
