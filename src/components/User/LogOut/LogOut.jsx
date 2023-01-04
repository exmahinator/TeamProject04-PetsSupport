import { ReactComponent as LogOutIcon } from 'shared/images/user/LogOutIcon.svg';

import styles from './LogOut.module.scss';

export const LogOut = () => {
	const onLogOut = () => {
		console.log('first');
	};
	return (
		<button type="button" onClick={onLogOut} 
		className={styles.LogOut}>
			<LogOutIcon fill="#F59256" width={18} height={18} />
			<p className={styles.LogOut__text}>Log Out</p>
		</button>
	);
};
