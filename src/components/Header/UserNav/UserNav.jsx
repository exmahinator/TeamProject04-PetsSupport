import { Link } from 'react-router-dom';
import { ReactComponent as AccountCircle } from 'shared/images/AccountCircle/AccountCircle.svg';

import style from './UserNav.module.scss';

export const UserNav = ({ setIsOpen }) => {
	return (
		<div className={style.container}>
			<Link to="/user" className={style.link} onClick={() => setIsOpen(false)}>
				<AccountCircle className={style.svg} width="28px" heigth="28px" />
				Account
			</Link>
		</div>
	);
};
