import { ReactComponent as ApproveIcon } from 'shared/images/user/userApprove.svg';
import { ReactComponent as EditIcon } from 'shared/images/user/userChange.svg';

import style from '../UserForm.module.scss';

export const UserEmail = ({
	heading,
	email,
	userInput,
	isDisabled,
	editUserData,
	edited,
	onChange,
}) => {
	return (
		<label htmlFor={heading} key={heading} className={style.user__label}>
			<p className={style.user__text}>{heading}:</p>
			<input
				className={style.user__input}
				type="email"
				placeholder={email}
				id={heading}
				value={userInput}
				disabled={isDisabled}
				onChange={onChange}
			/>
			<button
				className={style.user__button}
				type="button"
				onClick={editUserData}
				disabled={isDisabled}
			>
				{edited ? (
					<ApproveIcon fill="currentColor" width="20px" height="20px" />
				) : (
					<EditIcon fill="currentColor" width="20px" height="20px" />
				)}
			</button>
		</label>
	);
};
