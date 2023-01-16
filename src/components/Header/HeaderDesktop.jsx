import { Logo } from './Logo/Logo';
import { Nav } from './Nav/Nav';
import { UserNav } from './UserNav/UserNav';
import { AuthNav } from './AuthNav/AuthNav';
import { useAuth } from 'shared/hooks/useAuth';

import style from './Header.module.scss';

export const HeaderDesktop = () => {
	const isAuth = useAuth();

	return (
		<div className={style.wrapper}>
			<div className={style.mainNav}>
				<Logo />
				<Nav />
			</div>

			{isAuth ? <UserNav /> : <AuthNav />}
		</div>
	);
};
