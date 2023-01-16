import { ReactComponent as OpenedEyeIcon } from 'shared/images/auth/openedEye.svg';
import { ReactComponent as ClosedEyeIcon } from 'shared/images/auth/closedEye.svg';

import style from './PasswordBtn.module.scss';

export const PasswordBtn = ({ onClickHandler, type }) => (
	<button className={style.btn} onClick={onClickHandler} type="button">
		{' '}
		{type === 'password' ? <OpenedEyeIcon /> : <ClosedEyeIcon />}
	</button>
);
