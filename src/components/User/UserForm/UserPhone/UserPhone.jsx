import { ReactComponent as ApproveIcon } from 'shared/images/user/userApprove.svg';
import { ReactComponent as EditIcon } from 'shared/images/user/userChange.svg';

import style from '../UserForm.module.scss';

export const UserPhone = ({ heading, tel, editUserData, edited }) => {
	return (
		<label htmlFor={heading} key={heading} className={style.user__label}>
			<p className={style.user__text}>{heading}:</p>
			<input
				className={style.user__input}
				type="tel"
				id={heading}
				value={tel}
		
			/>
			<button type="button" className={style.user__button} onClick={editUserData}>
				{edited ? (
					<ApproveIcon fill="currentColor" width="20px" height="20px" />
				) : (
					<EditIcon fill="currentColor" width="20px" height="20px" />
				)}
			</button>
		</label>
	);
};
