import { ReactComponent as ApproveIcon } from 'shared/images/user/userApprove.svg';
import { ReactComponent as EditIcon } from 'shared/images/user/userChange.svg';

import style from '../UserForm.module.scss';

export const UserEmail = ({
	heading,
	email,
	isDisabled,
	editUserData,
	edited,
}) => {
	return (
		<label htmlFor={heading} key={heading} className={style.user__label}>
			<p className={style.user__text}>{heading}:</p>
			{edited ? (
				<input className={style.user__input} type="email" id={heading} />
			) : (
				<p>{email}</p>
			)}
			{edited ? (
				<button
					className={style.user__button}
					type="button"
					onClick={editUserData}
				>
					<ApproveIcon fill="currentColor" width="20px" height="20px" />
				</button>
			) : (
				<div className={style.user__button} onClick={editUserData}>
					<EditIcon fill="currentColor" width="20px" height="20px" />
				</div>
			)}
		</label>
	);
};
