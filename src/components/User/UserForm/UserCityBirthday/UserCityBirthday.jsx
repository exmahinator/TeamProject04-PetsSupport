import { ReactComponent as ApproveIcon } from 'shared/images/user/userApprove.svg';
import { ReactComponent as EditIcon } from 'shared/images/user/userChange.svg';

import style from '../UserForm.module.scss';

export const UserCityBirthday = ({
	heading,
	data,
	edited,
	editUserData,
	onUploadSubmit,
	register,
}) => {
	return (
		<label htmlFor={heading} key={heading} className={style.user__label}>
			<p className={style.user__text}>{heading}:</p>
			{edited ? (
				<input
					className={style.user__input}
					{...register(`${heading}`)}
					type="text"
					id={heading}
				/>
			) : (
				<p>{data}</p>
			)}
			{edited ? (
				<button
					type="submit"
					className={style.user__button}
					onSubmit={onUploadSubmit}
				>
					<ApproveIcon fill="currentColor" width="20px" height="20px" />
				</button>
			) : (
				<button
					type="button"
					className={style.user__button}
					onClick={editUserData}
				>
					<EditIcon fill="currentColor" width="20px" height="20px" />
				</button>
			)}
		</label>
	);
};
