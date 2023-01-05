import { ReactComponent as ApproveIcon } from 'shared/images/user/userApprove.svg';
import { ReactComponent as EditIcon } from 'shared/images/user/userChange.svg';

import style from '../UserForm.module.scss';

export const UserCityBirthday = ({ heading, data, edited, isDisabled }) => {
	return (
		<label htmlFor={heading} key={heading} className={style.user__label}>
			<p className={style.user__text}>{heading}:</p>
			<input
				className={style.user__input}
				type="text"
				id={heading}
				value={data}
				disabled={isDisabled}
			/>
			<button type="button" className={style.user__button}>
				{edited ? (
					<ApproveIcon fill="currentColor" width="20px" height="20px" />
				) : (
					<EditIcon fill="currentColor" width="20px" height="20px" />
				)}
			</button>
		</label>
	);
};
