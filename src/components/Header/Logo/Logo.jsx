import { Link } from 'react-router-dom';

import style from './Logo.module.scss';

export const Logo = ({ setIsOpen }) => {
	return (
		<Link to="/" className={style.link} onClick={() => setIsOpen(false)}>
			pe<span className={style.span}>t</span>ly
		</Link>
	);
};
